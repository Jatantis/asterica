<template>
    <Fragment>
        <Nav />

        <div>
            <img class="spot-item spot-item_gamepad" src="@/assets/img/sections/portal_items/gamepad.png" alt="">
            <img class="spot-item spot-item_hairstyle" src="@/assets/img/sections/portal_items/hairstyle.png" alt="">
            <img class="spot-item spot-item_mac" src="@/assets/img/sections/portal_items/mac.png" alt="">
            <img class="spot-item spot-item_pizza" src="@/assets/img/sections/portal_items/pizza.png" alt="">
            <img class="spot-item spot-item_ufo" src="@/assets/img/sections/portal_items/ufo.png" alt="">
        </div>

        <main class="scroll-sections">


            <div class="section__video-wrapper">
                <video class="section__video js-parallax-element" data-parallax-move-x="5" muted loop playsinline>
                    <source src="@/assets/video/vid.mp4" type='video/mp4'>
                </video>
            </div>

            <div class="section__video-canvas"></div>

            <Section1 v-show="isFirstSlide" />
            <Section2 v-show="isSecondSlide" />
            <Section3 v-show="isThirdSlide" />
            <Section4 v-show="isFourthSlide" />
            <Section5 v-show="isFifthSlide" />

            <div class="backgrounds">

                <img src="@/assets/img/sections/section1/bg.jpg" alt="">

                <img src="@/assets/img/sections/section2/bg.jpg" alt="">

                <img src="@/assets/img/sections/section3/bg.jpg" alt="">

                <img src="@/assets/img/sections/section4/bg.jpg" alt="">

                <img src="@/assets/img/sections/section5/bg.jpg" alt="">

                <img src="@/assets/img/menu/bg.jpg" alt="">

            </div>

        </main>
    </Fragment>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from "@/components/HelloWorld.vue";
    import { Fragment } from 'vue-fragment'


    import somebg from '@/assets/section4/bg.jpg'
    import { morphWave, PortfolioSlider } from './../assets/js/animateFunctions'
    import { ImageEffect } from './../assets/js/distortion'
    import {LineEffect} from './../assets/js/lineEffect'
    import {SeparateMenuEffect} from './../assets/js/separateMenuEffect'
    import {ZoomEffect} from './../assets/js/videoZoomEffect'


    import Nav from "../components/Nav";

    import displacementImage from './../assets/img/sections/displacement.png'
    import section2Spot from './../assets/img/sections/section2/spot.jpg'
    import section2SmallSpot from './../assets/img/sections/section2/spot_small.jpg'
    import section3Spot from './../assets/img/sections/section3/spot.jpg'
    import section3SmallSpot from './../assets/img/sections/section3/spot_small.jpg'
    import section5Map from './../assets/img/sections/section5/map.jpg'
    import Section1 from "./../components/home/Section1";
    import Section2 from "./../components/home/Section2";
    import Section3 from "./../components/home/Section3";
    import Section4 from "./../components/home/Section4";
    import Section5 from "./../components/home/Section5";

    export default {
        components: {
            Section5,
            Section4,
            Section3,
            Section2,
            Section1,
            Nav,
            Fragment
        },
        data: ()=> ({
            image: somebg
        }),
        computed: {
            isFirstSlide() {
                return this.$store.state.appState.slides[0]
            },
            isSecondSlide() {
                return this.$store.state.appState.slides[1]
            },
            isThirdSlide() {
                return this.$store.state.appState.slides[2]
            },
            isFourthSlide() {
                return this.$store.state.appState.slides[3]
            },
            isFifthSlide() {
                return this.$store.state.appState.slides[4]
            }
        },
        beforeRouteLeave(to, from, next) {

            this.$store.commit('prepareToNavigation');
            setTimeout(()=>next(),1000);
        },
        beforeDestroy(){
            window.removeEventListener('resize', this.onWindowResize);
            this.$store.commit('unsetVideo');
            this.$store.state.imageEffect.stopAnimate();
            this.$store.commit('unsetImageEffect');
            this.$store.state.zoomEffect.stopAnimate();
            this.$store.commit('unsetZoomEffect');
        },
        fetch({store}){
            store.commit('setCurrentPage', store.state.PAGES.MAIN);
            store.commit('appStateMutate', {
                activeSlide: 1
            });
        },
        methods: {
            onWindowResize() {
                  this.$store.state.zoomEffect.resize();
                  this.$store.state.imageEffect.resize();
            },
        },
        mounted() {
            this.$store.commit('setVideo', document.querySelector('.section-1__video'));
            // PortfolioSlider();
            //
            let backgrounds = [];
            //
            Array.from(document.querySelectorAll('.backgrounds img')).forEach(function (el) {
                backgrounds.push(el.getAttribute('src'));
            });


            this.$store.commit('setImageEffect', new ImageEffect({
                parent: document.querySelector('.backgrounds'),
                image0: backgrounds[0],
                image1: backgrounds[1],
                image2: backgrounds[2],
                image3: backgrounds[3],
                image4: backgrounds[4],
                menuBg: backgrounds[5],
                displacementImage,
                section2Spot,
                section2SmallSpot,
                section3Spot,
                section3SmallSpot,
                section5Map
            }, this).then((res)=>{
                this.$store.commit('setImageEffect', res);
                // this.$store.state.imageEffect.renderSceneOnce(1);
            }));

            //
            //
            // console.log("imageEffect");
            //
            //
            this.$store.commit('setZoomEffect', new ZoomEffect({
                parent: document.querySelector('.section__video-canvas')
            }, this));

            let pan = document.querySelector('.webgl-backgrounds');
            window.addEventListener('resize', this.onWindowResize);


            // this.$store.commit('increacePercentage', 10);
            document.querySelector('.section__video').play();
            setTimeout(()=>{
               this.onWindowResize()
                this.$store.commit('completeNavigation');
            }, 1500)
        }

    };
</script>


<style lang="sass">
    @import "../assets/sass/sections/all.sass"

    .webgl-backgrounds
        will-change: transform
    .section__video
            min-width: 100%
            min-height: 100%
            width: auto
            height: auto

    // .section__video-canvas
    //       background: url('/img/sec1bg.jpg')
    //       background-size: cover
    //       background-position: center
</style>
