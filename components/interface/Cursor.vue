<template>
      <div ref="cursorContainer" class="cursor_container">
        <div ref="small" v-bind:style="style" class="cursor cursor--small"></div>
        <canvas ref="paper" class="cursor cursor--canvas" resize></canvas>
      </div>
</template>

<script>
import SimplexNoise from 'simplex-noise'
import paper from "paper"

export default {
  data() {
    return{
      clientX: -100,
      clientY: -100,
      isStuck: false,
      showCursor: false,
      stuckX: null,
      stuckY: null,
      lastX: 0,
      lastY: 0,
      polygon: null,
      group: null
    }
  },
  computed: {
     style () {
        return { transform: 'translate(' + this.clientX +'px,' + this.clientY +'px)'}
     },
     resetHover() {
        return this.$store.state.CURRENT_PAGE
     }
  },
  watch: {
     resetHover(val){
       console.log(val)
       var $self = this
       setTimeout(function(){
           $self.removeCursorEvents()
           $self.addCursorEvents()
       },500)
     }
  },
  methods: {
    initCursorBackground() {
        let fillOuterCursor;

        const initCanvas = () => {
          const canvas = this.$refs.paper
          const shapeBounds = {
            width: 55,
            height: 55
          };
          paper.setup(canvas);
          const strokeColor = "rgba(255, 255, 255, 1)";
          const strokeWidth = 1;
          const segments = 8;
          const radius = 15;

          const noiseScale = 150;
          const noiseRange = 4;
          let isNoisy = false;

          this.polygon = new paper.Path.RegularPolygon( new paper.Point(0, 0), segments, radius);
          this.polygon.strokeColor = strokeColor;
          this.polygon.strokeWidth = strokeWidth;
          this.polygon.smooth();
          this.group = new paper.Group([this.polygon]);
          this.group.applyMatrix = false;

          const noiseObjects = this.polygon.segments.map(() => new SimplexNoise());
          let bigCoordinates = [];

          const lerp = (a, b, n) => {
            return (1 - n) * a + n * b;
          }

          const map = (value, in_min, in_max, out_min, out_max) => {
            return (
              ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
            );
          }

          paper.view.onFrame = event => {
            if (!this.isStuck) {
              this.lastX = lerp(this.lastX, this.clientX, 0.2);
              this.lastY = lerp(this.lastY, this.clientY, 0.2);
              this.group.position = new paper.Point(this.lastX, this.lastY);
            } else if (this.isStuck) {
              this.lastX = lerp(this.lastX, this.stuckX, 0.2);
              this.lastY = lerp(this.lastY, this.stuckY, 0.2);
              this.group.position = new paper.Point(this.lastX, this.lastY);
            }
            if (this.isStuck && this.polygon.bounds.width < shapeBounds.width) {
              this.polygon.scale(1.08);
            } else if (!this.isStuck && this.polygon.bounds.width > 30) {
              if (isNoisy) {
                  this.polygon.segments.forEach((segment, i) => {
                    segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
                  })
                 isNoisy = false;
                 bigCoordinates = [];
              }
              const scaleDown = 0.92;
              this.polygon.scale(scaleDown);
            }
            if (this.isStuck && this.polygon.bounds.width >= shapeBounds.width) {
              isNoisy = true;
              if (bigCoordinates.length === 0) {
                this.polygon.segments.forEach((segment, i) => {
                  bigCoordinates[i] = [segment.point.x, segment.point.y];
                })
              }
              this.polygon.segments.forEach((segment, i) => {
                const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
                const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
                const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
                const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);
                const newX = bigCoordinates[i][0] + distortionX;
                const newY = bigCoordinates[i][1] + distortionY;
                segment.point.set(newX, newY);
              })

            }
            this.polygon.smooth()
          }
        }
     initCanvas();
   },
   handleMouseEnter(e){
     const navItem = e.currentTarget;
     const navItemBox = navItem.getBoundingClientRect();
     this.stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
     this.stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
     this.isStuck = true;
   },
   handleMouseLeave(){
     this.isStuck = false;
   },
   addCursorEvents(){
     const linkItems = document.querySelectorAll(".asterica_link");
       linkItems.forEach(item => {
         item.addEventListener("mouseenter", this.handleMouseEnter);
         item.addEventListener("mouseleave", this.handleMouseLeave);
       });
       document.addEventListener("mousemove", e => {
         this.clientX = e.clientX;
         this.clientY = e.clientY;
         /* CHECK LEAVE */
               var newWidth = document.body.clientWidth,
                   newHeight = window.innerHeight;
               if ( e.clientY >= newHeight-20|| e.clientX == newWidth-10||e.clientY <= 20|| e.clientX == 0 ) {
                this.$refs.small.style.opacity = 0
                this.$refs.paper.style.opacity = 0
              } else {
                this.$refs.small.style.opacity = 1
                this.$refs.paper.style.opacity = 1
              }
       });
   },
   removeCursorEvents(){
     const linkItems = document.querySelectorAll(".asterica_link");
       linkItems.forEach(item => {
         item.removeEventListener("mouseenter", this.handleMouseEnter);
         item.removeEventListener("mouseleave", this.handleMouseLeave);
       });
       document.removeEventListener("mousemove", e => {
         this.clientX = e.clientX;
         this.clientY = e.clientY;
         /* CHECK LEAVE */
               var newWidth = document.body.clientWidth,
                   newHeight = window.innerHeight;
               if ( e.clientY >= newHeight-20|| e.clientX == newWidth-10||e.clientY <= 20|| e.clientX == 0 ) {
                this.$refs.small.style.opacity = 0
                this.$refs.paper.style.opacity = 0
              } else {
                this.$refs.small.style.opacity = 1
                this.$refs.paper.style.opacity = 1
              }
       });
   }
 },
  mounted(){
    if (process.client) {
    this.initCursorBackground()
    this.addCursorEvents()
    }
  }
}
</script>
<style>
/*PAGE*/
body, body *, .button {
 cursor: none !important;
}
html {
  scroll-behavior: smooth;
}
/*CURSOR*/
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  mix-blend-mode: difference;
}
.cursor--small {
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: #fff;
}
.cursor--canvas {
  width: 100vw;
  height: 100vh;
  z-index: 12000;
}

 @media (max-width: 768px){
  .cursor_container{
    display: none;
  }
}
</style>
