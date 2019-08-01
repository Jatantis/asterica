<template>
  <div class="slider_home_page">
    <h3 class="home_slider_title">НАШИ РАБОТЫ</h3>
    <div class="background_home_slider"></div>
    <div class="background_home_slider_black_box"></div>
    <div class="slider_home_group">
      <div class="black_transition_block"></div>
      <div class="slider_home_left"></div>
      <div class="slider_home_center"></div>
    </div>
    <div class="slider_home_group">
       <div class="black_transition_block_second"></div>
      <div class="slider_home_top_inis"></div>
      <div class="slider_home_top">
         <div class="home_slider_arrow h_meta_transition">
             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="h_slider_arrow_left"><path d="M189.796 705.548c9.002 9.002 21.005 9.002 30.008 0s9.002-21.005 0-27.007l-147.036-147.036h930.228c12.003 0 21.005-9.002 21.005-18.004 0-12.003-9.002-21.005-21.005-21.005h-930.228l144.035-144.035c9.002-9.002 9.002-21.005 0-30.008s-21.005-9.002-30.008 0l-180.044 180.044c-9.002 9.002-9.002 21.005 0 27.007l183.045 180.044z"></path></svg>
           <div class="h_slide_counter">
             <span>01</span>
             <span style="font-size:0.6em">/07</span>
           </div>
             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="h_slider_arrow_right"><path d="M834.204 705.548c-9.002 9.002-21.005 9.002-30.008 0s-9.002-21.005 0-27.007l147.036-147.036h-930.228c-12.003 0-21.005-9.002-21.005-18.004 0-12.003 9.002-21.005 21.005-21.005h930.228l-144.035-144.035c-9.002-9.002-9.002-21.005 0-30.008s21.005-9.002 30.008 0l180.044 180.044c9.002 9.002 9.002 21.005 0 27.007l-183.045 180.044z"></path></svg>
         </div>
         <div class="h_company_meta">
           <p class="h_meta_transition">интернет-магазин</p>
           <span class="h_meta_transition">SINAIL</span>
           <button class="h_meta_transition h_meta_btn">посмотреть проект
             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32" class="button__icon button__arrow"><path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path></svg>
           </button>
           <p class="h_meta_transition" style="align-self: flex-end">смотреть все работы</p>
         </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
    }
  },
  methods: {

  },
  mounted(){

  }
}
</script>

<style scoped>
/*ALL*/
.slider_home_page{
  font-size: calc(100vw/18);
  width: 60vw;
  height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
/*BG SLIDER*/
.background_home_slider{
  background: #131313;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: url('http://wac.2f9ad.chicdn.net/802F9AD/u/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=52');
  background-size: cover;
  background-repeat: no-repeat;
}
/*SLIDER GROUP UP AND DOWN*/
.slider_home_group{
  display: flex;
  height: 50%;
  width: 100%;
  position: relative;
  z-index: 1;
}
/*SLIDER BLACK BOX*/
.background_home_slider_black_box{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #131313;
  transform: scaleX(0);
  transform-origin: left;
  top: 0;
  left: 0;
  z-index: 0;
}
.black_transition_block{
  position: absolute;
  width: 8em;
  height: 100%;
  top: 0;
  left: 0;
  background: #131313;
  transform-origin: left;
  transform: scaleX(0);
  z-index: 1;
}
.black_transition_block_second{
  position: absolute;
  width: 4em;
  height: 200%;
  top: -100%;
  left: calc(0% + 4em);
  background: #131313;
  transform-origin: top;
  transform: scaleY(0);
  z-index: 1;
}
/*SLIDERS TOP*/
.slider_home_left{
  background: url('https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg');
}
.slider_home_center{
  background: url('https://s3media.247sports.com/Uploads/Assets/753/690/8690753.jpg?fit=bounds&crop=620:320,offset-y0.50&width=620&height=320')
}
.slider_home_left, .slider_home_center{
  width: 4em;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
/*SLIDERS BOTTOM*/
.slider_home_top_inis{
  background: transparent;
  height: 100%;
  width: 4em;
}
.slider_home_top{
  width: 4em;
  height: 105%;
  background: #091830;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/*META*/
.home_slider_title{
  position: absolute;
  font-size: 0.5em;
  color: #efefef;
  z-index: 2;
  top: 25%;
  left: 50%;
}
.h_company_meta{
  font-size: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
}
.h_slide_counter{
  color: #efefef;
  font-size: 0.4em;
  display: flex;
  align-items: flex-end;
}
.home_slider_arrow{
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around
}
.home_slider_arrow svg{
  width: 30%;
  height: 30%;
  fill: #efefef
}
.h_company_meta p{
  color: #efefef;
  font-size: 1.1em;
  text-align: left;
  align-self: flex-start;
}
.h_company_meta span{
  color: #efefef;
  font-size: 1.65em;
  align-self: flex-start;
  font-weight: 600;
}
.h_meta_btn{
  border: solid white 0.1em;
  background: none;
  color: #efefef;
  display: flex;
  padding: 0.2em;
  justify-content: center;
  align-items: center;
  outline: none;
  position: relative;
  transition: 0.25s ease-in-out;
}
.h_meta_btn:before{
  content: '';
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 2px);
  top: 0;
  background: #efefef;
  z-index: -1;
  transform-origin: left;
  transition: 0.5s ease-in-out;
  transform: scaleX(0)
}
.h_meta_btn:hover{
  color: #131313;
}
.h_meta_btn:hover:before{
  transform: scaleX(1)
}
.h_meta_btn:hover svg{
  fill: #131313;
  transition: 0.5s ease-in-out;
}
.h_meta_btn svg{
  width: 10%;
  height: 10%;
  fill: #efefef;
  padding-left: 10%;
}
</style>
