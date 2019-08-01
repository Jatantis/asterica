<template>
   <div class="menu_morph_group" ref="menuAnimationContainer">
     <transition
        v-on:enter="menuTextPlay" appear>
       <!--<span ref="text" class="menu_bg_text">-->
         <!--<span class="letter">М</span>-->
         <!--<span class="letter">Е</span>-->
         <!--<span class="letter">Н</span>-->
         <!--<span class="letter">Ю</span>-->
       <!--</span>-->
    </transition>
       <img class="menu_morph_img" src="@/assets/img/sections/section2/spot1.png" ref="mask"/>
       <img class="menu_morph_img_lines" src="@/assets/img/sections/section2/spotline.png" ref="lines"/>
       <img class="menu_morph_img_lines" src="@/assets/img/sections/section2/spotline.png" ref="lines2"/>
       <img class="menu_morph_img" src="@/assets/img/menu/home.jpg" ref="img"/>
       <img class="menu_morph_img" src="@/assets/img/menu/company.jpg" ref="img2"/>
       <img class="menu_morph_img" src="@/assets/img/menu/bg1.jpg" ref="img3"/>
       <img class="menu_morph_img" src="@/assets/img/menu/contacts.jpg" ref="img4"/>
       <img class="menu_morph_img" src="@/assets/img/menu/2.jpg" ref="displace"/>
       <img class="menu_item_img" src="@/assets/img/menu/images/1.png" ref="time"/>
       <img class="menu_item_img" src="@/assets/img/sections/section2/zeus.png" ref="zeus"/>
       <img class="menu_item_img" src="@/assets/img/menu/images/2.png" ref="lion"/>
       <img class="menu_item_img" src="@/assets/img/menu/images/3.png" ref="man"/>
   </div>
</template>

<script>
if (process.browser) {
 const PIXI = require('pixi.js')
}

export default {
  props:{
    activeLink:{
      type: Number,
      required: true
    },
    newActiveLink:{
      type: Number,
      required: true
    },
    leaveTarget:{
      type: Number,
      required: true
    }
  },
  data() {
    return{
       pageDetect: null,
       tl: null,
       portalTl2: null,
       itemsTl: null,
       linesTl2: null,
       linesTl3: null,
       time: 1,
       image: null,
       image2: null,
       image3: null,
       image4: null,
       displacementSprite: null,
       displacementFilter: null,
       displacementSprite2: null,
       displacementFilter2: null,
       stage: null,
       renderer: null
    }
  },
  watch: {
    activeLink(val){
       // this.tl.reverse();
       // this.portalTl2.reverse();
       // this.itemsTl.reverse();
       if(val != this.pageDetect){
           this.deactiveLinkAnimation(val)
       }
    },
    newActiveLink(val){
       if(val != this.pageDetect){
         this.activeLinkAnimation(val)
       }
    },
    leaveTarget(val){
       this.leaveAnimation(val)
    }
  },
  methods: {
    initPixi(){
//PIXI CREATE
      var size = [window.innerWidth, window.innerHeight];
      var ratio = size[0] / size[1];
          this.renderer = new PIXI.Application({width: size[0], height: size[1], transparent: true, antialias: true});
          this.renderer.renderer.autoResize = true;
          this.renderer.view.classList += 'menu_bg_morph'
          this.$refs.menuAnimationContainer.appendChild(this.renderer.view);
      var ratio = Math.min(size[0] / this.renderer.renderer.width, size[1] / this.renderer.renderer.height);
          this.renderer.stage.scale.set(ratio,ratio);
          this.renderer.stage.position.set(size[0]/2.3, size[1]/4);
//IMG FIRST
      var texture = PIXI.Texture.fromImage(this.$refs.img.getAttribute('src'));
          this.image = new PIXI.Sprite(texture);
          this.image.scale.set(0.4)
          this.image.alpha = 0
//IMG SECOND
       var texture2 = PIXI.Texture.fromImage(this.$refs.img2.getAttribute('src'));
          this.image2 = new PIXI.Sprite(texture2);
          this.image2.scale.set(0.4)
          this.image2.alpha = 0
//IMG THIRD
       var texture3 = PIXI.Texture.fromImage(this.$refs.img3.getAttribute('src'));
          this.image3 = new PIXI.Sprite(texture3);
          this.image3.scale.set(0.4)
          this.image3.alpha = 0
//IMG FOURTH
       var texture4 = PIXI.Texture.fromImage(this.$refs.img4.getAttribute('src'));
          this.image4 = new PIXI.Sprite(texture4);
          this.image4.scale.set(0.4)
          this.image4.alpha = 0
//DISPLACE IMG
          this.displacementSprite = PIXI.Sprite.fromImage(this.$refs.displace.getAttribute('src'));
          this.displacementSprite.scale.set(10)
          this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
//DISPLACE IMG2
          this.displacementSprite2 = PIXI.Sprite.fromImage(this.$refs.displace.getAttribute('src'));
          this.displacementSprite2.scale.set(10)
          this.displacementFilter2 = new PIXI.filters.DisplacementFilter(this.displacementSprite);
//MASK IMG
      var maskEl = this.$refs.mask.getAttribute('src')
      var brush = PIXI.Sprite.fromImage(maskEl);
          brush.scale.set(0.45)
              brush.anchor.set(-0.1);
//ADD TO CONTAINER
          this.image.filters = [this.displacementFilter];
          this.image2.filters = [this.displacementFilter];
          this.image3.filters = [this.displacementFilter];
          this.image4.filters = [this.displacementFilter];
          this.renderer.stage.filters = [this.displacementFilter2];
          this.renderer.stage.addChild(this.displacementSprite);
          this.renderer.stage.addChild(this.image);
          this.renderer.stage.addChild(this.image2);
          this.renderer.stage.addChild(this.image3);
          this.renderer.stage.addChild(this.image4);
          this.renderer.stage.addChild(brush);
          this.renderer.stage.mask = brush
//ADD INFINITE TL
        var linesTl = new TimelineMax({ repeat: -1})
            linesTl.set([this.$refs.lines,this.$refs.lines2],{visibility: 'hidden'},0)
        var portalTl = new TimelineMax({ repeat: -1})
            portalTl.fromTo(this.displacementSprite.scale,60,{x:this.displacementSprite.scale.x+Math.random(30)*100,y:this.displacementSprite.scale.y+Math.random(30)*100,ease: Power0.easeNone},{y:10,x:10})
        var portalTlImg = new TimelineMax({ repeat: -1})
            portalTlImg.fromTo(this.displacementFilter.scale,60,{x:this.displacementFilter.scale.x+Math.random(30)*100,y:this.displacementFilter.scale.y+Math.random(30)*100,ease: Power0.easeNone},{y:10,x:10})
    },
    animate(t){
      this.time = t
      this.renderer.render();
      requestAnimationFrame(this.animate);
    },
    activeLinkAnimation(newVal, oldVal){
      var $self = this
      var scaledFilter = this.displacementFilter.scale
      var allAplhaImage = [this.image, this.image2, this.image3, this.image4]
      var allItems = [this.$refs.zeus, this.$refs.man, this.$refs.time, this.$refs.lion]
      var imageAlphaWithoutThis = allAplhaImage.slice(0)
      imageAlphaWithoutThis.splice(newVal, 1)
//INFINIE
      this.linesTl2 = new TimelineMax()
           this.linesTl2.set([this.$refs.lines,this.$refs.lines2],{visibility: 'visible'},0.35)
      this.linesTl3 = new TimelineMax({delay: 0.25, repeat: -1})
           this.linesTl3.staggerFromTo([this.$refs.lines,this.$refs.lines2],2,{scale:0, opacity: 0.4},{scale:1.35,opacity:0},0.2)
      this.itemsTl = new TimelineMax({ repeat: -1, yoyo: true})
           this.itemsTl.fromTo(allItems[newVal],2,{y: 0},{y: 60, ease: Sine.easeInOut})
//PLYEBLE
      this.portalTl2 = new TimelineMax({delay: 0.2})
           this.portalTl2.fromTo('.menu_bg_morph',0.75,{scale:0},{scale:1, ease: Back.easeOut.config(1.7)},0.25)
      this.tl = new TimelineMax()
          this.tl.set(allItems,{opacity: 0, ease: Sine.easeInOut},0)
          this.tl.to(allItems[newVal],0.75,{ opacity: 1, ease: Sine.easeInOut},.25)
          this.tl.set(imageAlphaWithoutThis,{alpha: 0, ease: Sine.easeInOut})
          this.tl.to(allAplhaImage[newVal],0.75,{alpha: 1,  ease: Sine.easeInOut},.25)
    },
    deactiveLinkAnimation(newVal){
      this.tl.kill()
      this.itemsTl.kill()
      this.portalTl2.kill()
      this.linesTl2.kill()
      this.linesTl3.kill()
      var allAplhaImage = [this.image, this.image2, this.image3, this.image4]
      var allItems = [this.$refs.zeus, this.$refs.man, this.$refs.time, this.$refs.lion]
      this.portalTl2 = new TimelineMax({delay: 0.1})
           this.portalTl2.fromTo('.menu_bg_morph',0.45,{scale:1},{scale:0,ease: Sine.easeInOut})
           this.portalTl2.set([this.$refs.lines,this.$refs.lines2],{visibility: 'hidden'},0)

      this.tl = new TimelineMax()
          this.tl.to(allItems,0.55,{opacity: 0, ease: Sine.easeInOut},0)
          this.tl.to(allAplhaImage,0.5,{alpha: 0, ease: Sine.easeInOut},0)
    },
    leaveAnimation(val){
    var els = this.$refs.text.querySelectorAll('.letter')
    var allItems = [this.$refs.zeus, this.$refs.man, this.$refs.time, this.$refs.lion]
      this.portalTl2 = new TimelineMax()
          this.portalTl2.fromTo([this.displacementFilter2.scale,this.displacementSprite2.scale],0.75,{x:this.displacementSprite2.scale.x,y:this.displacementSprite2.scale.y,ease: Sine.easeInOut},{x:500,y:500})
          this.portalTl2.to(this.renderer.stage,0.55,{alpha: 0,ease: Sine.easeInOut},0)
          this.portalTl2.to(allItems[val],0.75,{scale: 0, opacity: 0, ease: Sine.easeInOut},0)
          this.portalTl2.set([this.$refs.lines,this.$refs.lines2],{visibility: 'hidden'},0)
          this.portalTl2.staggerFromTo(els,0.75,{opacity:1,y:0},{opacity: 0,y:-40, delay: 0.25, ease: Sine.easeInOut},0.15,0)
    },
    watchOnRoute(){
        if (this.$route.name == 'index'){
            this.pageDetect = 0
        } else if (this.$route.name == 'company'){
            this.pageDetect = 1
        } else if (this.$route.name == 'portfolio'){
            this.pageDetect = 2
        } else {
            this.pageDetect = 3
        }
    },
    menuTextPlay(el,done){
      var els = el.querySelectorAll('.letter')
      TweenMax.staggerFromTo(els,0.75,{opacity: 0, y:40},{opacity: 1, y: 0, delay: 0.55, ease: Sine.easeInOut},0.15)
    }
  },
  mounted(){
    this.initPixi()
    this.animate();
    this.watchOnRoute()
    if(process.browser){
      window.addEventListener('resize', (e) => {
        var ratio = Math.min(window.innerWidth / this.renderer.renderer.width, window.innerHeight / this.renderer.renderer.height);
            this.renderer.stage.position.set(this.renderer.renderer.width/2.3, this.renderer.renderer.height/4);
            this.renderer.stage.scale.set(ratio,ratio);
            this.renderer.renderer.resize(window.innerWidth, window.innerHeight)
      });
    }
  }
}
</script>

<style>
.menu_morph_group{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
    font-size: calc(100vw/20);
}
.menu_morph_img{
  display: none;
}
.menu_bg_morph{
  position: fixed;
  transform-origin: 60% 50%;
  left:0;
  top: -0.5em;
}
.menu_item_img {
    position: fixed;
    width: auto;
    height: 4.5em;
    top: 32%;
    left: 56%;
    z-index: 1;
    opacity: 0;
}
.menu_bg_text{
  font-weight: 600;
  position: absolute;
  font-size: 2.6em;
  font-family: 'Bebas Neue';
  color: #060606;
  left: 20%;
  top: 5%;
  letter-spacing: 0.35em;
}
.menu_bg_text .letter{
  display: inline-block;
}
.menu_bg_text .letter{
  opacity: 0;
}
.menu_morph_img_lines{
  position: fixed;
  top: calc(100vh/4.25);
  left: calc(100vw/2.25);
  width: 400px;
  height: auto
}
@media (max-width: 1000px){
  .menu_morph_group{
     display: none;
   }
}
@media (min-width: 2000px){
  .menu_morph_group{
      font-size: calc(100vw/28);
   }
   .menu_bg_text{
    letter-spacing: 0.45em;
    left: 25%;
  }

}
</style>
