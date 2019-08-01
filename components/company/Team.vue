<template>
  <div class="team_face_component">
      <div ref="cmdBlock" class="comand_block">
          <div ref="teamBlock" class="team_face">
            <canvas v-bind:id="canvasId+'_face'" class="team_bg_face"></canvas>
          </div>
          <canvas v-bind:id="canvasId+'_line'" class="team_bg_lines"></canvas>
          <div class="homo-sapiens__info">
            <span class="text-with-bg__line">
                <span class="text-with-bg__front"></span>
                <span class="text-with-bg__back"></span>
                <h2 class="my_name lang-decrypt homo-sapiens__name text-with-bg__content" :data-text="name">{{ name }}</h2>
            </span>
            <span class="text-with-bg__line">
                <span class="text-with-bg__front"></span>
                <span class="text-with-bg__back"></span>
                 <p class="my_vacancy lang-decrypt homo-sapiens__position text-with-bg__content" :data-text="vacancy">{{ vacancy }}</p>
            </span>
          </div>
      </div>
  </div>
</template>

<script>
import paper from "paper"
import { TweenMax } from 'gsap'

export default {
  props: {
      canvasId:{
        type: String,
        required: true
      },
      name:{
        type: String,
        required: false
      },
      vacancy:{
        type: String,
        required: false
      },
      img:{
        type: String,
        required: false
      },
      morph:{
        type: Number,
        required: false
      }
  },
  data() {
    return{
      circs: null
    }
  },
  methods: {
//CREATE MORPH BG LINES
   initCircle(){
     var mypaper = new paper.PaperScope()
       mypaper.setup(this.canvasId+'_line');
       mypaper.view.viewSize = [ this.$refs.teamBlock.offsetWidth*1.4, this.$refs.teamBlock.offsetHeight*1.4];
       var path_prop = {
         strokeWidth: 4,
         closed: true,
       }
       path_prop.strokeColor = {
         gradient: {
             stops: ['#18d3ff', '#fdf02f', '#dc11c9', '#fdf02f']
         },
         origin: [300,680],
         destination: [200,700]
       };
       var circs = [];
       circs[0] = new mypaper.Path(path_prop);
       var numSegs = 120;
       var len = 78;
       while(circs[0].segments.length < numSegs) {
         var pt = mypaper.view.center.add(new mypaper.Point({
           length: len,
           angle: (circs[0].segments.length + 1) * (360 / numSegs)
         }));
         circs[0].add(pt);
       }
       function movingNormal(i, t, m) {
         t %= m; if(t < 0) t += m;
         var r = Math.abs(t - i);
         if(r > m - r) r = m - r;
         return Math.exp(-Math.pow(r, 2.3) / 7000);
       }
// path.smooth();
       var a = this.morph;
       mypaper.view.onFrame = function(event) {
         var k = event.time*a/20;
         for(var ix = 0; ix < circs[0].segments.length; ix++) {
           var dir = circs[0].segments[ix].point.subtract(mypaper.view.center).normalize(1);
           circs[0].segments[ix].point = mypaper.view.center.add(dir.multiply(len + 16 * movingNormal(ix, 20 * k, numSegs) * Math.sin(a * (k/60) + ix * (8 * Math.PI / numSegs))));
         }

       }
   },
//INIT PHOTO WHITH MASK EFFECT
   initMask() {
      var maskGroup = new paper.PaperScope()
      maskGroup.setup(this.canvasId+'_face');
      maskGroup.view.viewSize = [ this.$refs.teamBlock.offsetWidth*1.5, this.$refs.teamBlock.offsetHeight*1.5];
      var rasterBg = new maskGroup.Raster({
       source: '/img/bg.png',
       position: maskGroup.view.center
      });
      var url = this.img;
      var raster = new maskGroup.Raster(url);
      var mask = new maskGroup.Shape.Circle(new maskGroup.Point(40, 40), 90);
      raster.scale(0.6)
      rasterBg.scale(0.8)
      mask.scale(0.7)
      raster.position = maskGroup.view.center;
      raster.position.y = raster.position.y+20;
      mask.position = maskGroup.view.center;
      // Create a group of the two items and clip it:
      mask = new maskGroup.Path();
      var numSegs = 300;
      var len = 80;
      while(mask.segments.length < numSegs) {
       var pt = maskGroup.view.center.add(new maskGroup.Point({
         length: len,
         angle: (mask.segments.length + 1) * (360 / numSegs)
       }));
       mask.add(pt);
      }
      function movingNormal(i, t, m) {
        t %= m; if(t < 0) t += m;
        var r = Math.abs(t - i);
        if(r > m - r) r = m - r;
        return Math.exp(-Math.pow(r, 2.3) / 7000);
      }
      var group = new maskGroup.Group(mask, rasterBg ,raster);
      group.clipped = true;
       var a = this.morph;
      maskGroup.view.onFrame = function(event) {
        rasterBg.rotate(-a/500)
           var k = event.time;
       for(var ix = 0; ix < mask.segments.length; ix++) {
         var dir = mask.segments[ix].point.subtract(maskGroup.view.center).normalize(1);
         mask.segments[ix].point = maskGroup.view.center.add(dir.multiply(len + a * movingNormal( ix, a * k, numSegs) * Math.cos(a * (k/60) + ix * (8 * Math.PI /numSegs))));
       }
      }
   },
//INIT HOVER MAGNETIC EFFECT
   initMagneticHover($self){
    var hover = false;
    var offsetHoverMax = 0.4
    var offsetHoverMin = 0.3

    var attachEventsListener = function() {
      window.addEventListener("mousemove", function(e) {
        var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

        var cursor = {
          x: e.clientX,
          y: e.clientY - window.pageYOffset
        };

        var width = $self.offsetWidth
        var height = $self.offsetHeight;

        var rect = $self.getBoundingClientRect();
        var offset = {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        }

        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2
        };

        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;

        var dist = Math.sqrt(x * x + y * y);
        var mutHover = false;

        if (dist < width * hoverArea) {
          mutHover = true;
          if (!hover) {
            hover = true;
          }
          onHover(x, y);
        }

        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    }
    function onLeave() {
      TweenMax.to($self, 0.4, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.config(1.2, 0.4)
      });
    }
    function onHover(x, y) {
      TweenMax.to($self, 0.7, {
        x: x * 0.5,
        y: y * 0.5,
        //scale: .9,
        rotation: x * 0.05,
        ease: Power2.easeOut,
      });
    }
      attachEventsListener();
   }
 },
  mounted(){
    if (process.client) {
        this.initCircle();
        this.initMask();
        this.initMagneticHover(this.$refs.teamBlock);
     }
  },
  destory(){
  }
}
</script>

<style>
.team_face_component{
  display: flex;
  width: 25%;
  padding-bottom: 12%;
}
.comand_block{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.45s cubic-bezier(.79,.64,.47,.65);
  transform-origin: center;
  color: #fff;
  width: 100%;
}
.team_face{
  width: 100%;
  height: 12em;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0)
}
.team_bg_face{
   opacity: 1;
   position: absolute;
}
.team_face::before{
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 55%;
  height: 55%;
  border: transparent;
  background: transparent;
  box-shadow: -2em 2em 5em rgba(186, 38, 179, 0.64), 2em 2em 5em #1b50e68c;
}
.team_bg_lines{
  position: absolute;
  z-index: -1;
  left: -15%;
  top: -14%;
  opacity: 1;
  transform: scale(0)
}
.homo-sapiens__info{
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  white-space: nowrap;
}
.homo-sapiens__info .text-with-bg__line{
    margin: 0 auto;
}
.homo-sapiens__info .text-with-bg__line .text-with-bg__back {
  height: 30%;
  top: 40%;
}

/*HOVER AND KF*/
@keyframes startAnimCanvas{
  from{transform: scale(0); opacity: 0}
  to{transform:  scale(1); opacity: 1}
}
@keyframes rotateBgLines{
  from{ transform: rotate(0deg)}
  to{ transform: rotate(360deg)}
}
</style>
