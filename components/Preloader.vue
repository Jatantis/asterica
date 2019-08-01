<template>
        <div class="preloader">
            <!--<svg class="preloader__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.6 142.4">-->
                <!--<linearGradient id="preloader" gradientUnits="userSpaceOnUse" x1="-454.8224" y1="270.3882" x2="-323.6492" y2="180.4543" gradientTransform="matrix(-0.992 0.1264 -0.1264 -0.992 -278.32 347.3873)">-->
                    <!--<stop offset="0" style="stop-color:#FFFF25"></stop>-->
                    <!--<stop offset="0.4655" style="stop-color:#D900D5"></stop>-->
                    <!--<stop offset="1" style="stop-color:#18D3FF"></stop>-->
                <!--</linearGradient>-->
                <!--<path fill="url(#preloader)" class="js-outline-path" style="transform-origin: 47% 50%; transform: scaleX(0.55) scaleY(0.75);" d="M37.8,6.2c10.4-3.3,20.1-5.1,25-5.8c14.2-2.1,26,4.3,37.5,10.5c5.4,2.9,10.5,5.7,15.7,7.4 c1.7,0.6,3.4,1.1,5,1.7c14.9,4.9,27.8,9.1,37.7,25.6c1,1.7,2.1,3.5,3.1,5.2c9.7,16.1,19.8,32.7,15.9,47.5 c-2.9,11-15.4,15.7-27.4,20.3c-7.4,2.8-15.1,5.7-20.4,10.1c-14,11.6-22.2,11.5-34.6,11.3c-1.4,0-2.9-0.1-4.5-0.1l0,0 c-6.4,0-12.3,0.7-18,1.4c-13,1.5-24.2,2.9-35.6-4.7c-2-1.4-4.1-2.7-6.2-4C15.6,122.6-0.5,112.3,2,91.4c0.9-7.7,0-16.8-0.8-25.5 c-1.3-13.4-2.6-27.3,2.3-36.7C9.4,17.8,24.1,10.6,37.8,6.2z M113.4,136.9c4.7-1.5,9.5-4.3,15.6-9.3c5.4-4.5,13.2-7.4,20.7-10.3 c11.7-4.4,23.9-9,26.6-19.4c3.7-14.3-6.2-30.6-15.8-46.5c-1-1.7-2.1-3.5-3.1-5.2c-9.6-16.1-22.3-20.2-36.9-25 c-1.7-0.5-3.3-1.1-5.1-1.7c-5.3-1.8-10.4-4.6-15.9-7.5C88.4,6,76.8-0.3,63,1.8C51.9,3.4,14.8,10.3,4.7,29.9 c-4.7,9-3.4,22.7-2.2,35.9c0.8,8.8,1.7,18,0.8,25.8c-2.3,20,12.6,29.6,28.5,39.7c2.1,1.3,4.2,2.7,6.2,4c11,7.3,22,6,34.7,4.5 c5.8-0.7,11.7-1.4,18.2-1.4l0,0c1.6,0,3.1,0,4.5,0.1C102.3,138.7,107.7,138.8,113.4,136.9z"></path>-->
            <!--</svg>-->
            <div v-show="pageLoaded" class="preloader__text">
                <svg xmlns="http://www.w3.org/2000/svg" class="preloader__mask-wrapper" width="95px" height="120px">
                    <mask id="waveprl">
                        <path class="page-number__mask js-wave-path" transform="translate(0, 70)"
                              d="m-0.25,39.875c0,0 10.5,-29.75 30.75,-29.75c20.25,0 23.75,16 29.75,29.625c6,13.625 9.75,30.375 29.75,30.375c20,0 29.75,-30.25 29.75,-30.375c0,-0.125 78,108.875 78,183.75c0,74.875 -256.5,-6.875 -256.5,-7c0,-0.125 58.5,-176.625 58.5,-176.625z"
                        />
                    </mask>
                </svg>
                <svg class="preloader__percent" xmlns="http://www.w3.org/2000/svg">
                    <text class="preloader__numbers preloader__numbers_data1" text-anchor="middle" x="50" y="109">0</text>
                    <text mask="url(#waveprl)" class="preloader__numbers preloader__numbers_masked preloader__numbers_data2" text-anchor="middle" x="50" y="109">0</text>
                </svg>
            </div>
        </div>

</template>

<script>

    import * as anime from 'animejs'


    export default {
        name: "Preloader",
        data() {
          return{
            pageLoaded: false,
            waveVal: null
          }
        },
        computed: {
            prl_val(){
                return this.$store.state.preloaderPercent;
            },
            contentLoaded(){
                return this.$store.state.pageLoaded;
            }
        },
        watch:{
            contentLoaded(val){
              this.pageLoaded = val
              this.initPreloaderAnimation()
              this.initWaveAnimation(this.waveVal)
            },
            prl_val(newVal){
              this.waveVal = newVal
          }
        },
        methods: {
          initWaveAnimation(newVal){
            if (newVal >= 100) {
                let fn = document.querySelector('.preloader__numbers_data1');
                let fn2 = document.querySelector('.preloader__numbers_data2');
                let waveNode = document.querySelector('.js-wave-path');
                anime.remove(this.preloaderVal);
                anime({
                    targets: this.preloaderVal,
                    value: newVal,
                    wavePosition: ['50', '-40'],
                    duration: 3000,
                    easing: 'linear',
                    update:  () => {
                        fn.innerHTML = fn2.innerHTML = parseInt(this.preloaderVal.value);
                        waveNode.setAttribute('transform', 'translate(0, ' + this.preloaderVal.wavePosition + ')')
                    },
                    complete: () => {
                        if (newVal >= 100) {
                            if (this.$route.name == 'index') {
                                this.$store.state.imageEffect.renderSceneOnce(1);
                            }
                            this.$store.commit('hidePreloader');
                        }
                    }
                });
            }
          },
          initPreloaderAnimation(){
            this.preloaderVal = {
                wavePosition: 0,
                value: 0,
                opacity: 1
            };

            let fn = document.querySelector('.preloader__numbers_data1');
            let fn2 = document.querySelector('.preloader__numbers_data2');
            let waveNode = document.querySelector('.js-wave-path');

            anime({
                targets: this.preloaderVal,
                value: 100,
                wavePosition: ['90', '60'],
                duration: 4000,
                easing: 'linear',
                update:  () => {
                    fn.innerHTML = fn2.innerHTML = parseInt(this.preloaderVal.value);
                    waveNode.setAttribute('transform', 'translate(0, ' + this.preloaderVal.wavePosition + ')')
                },
                complete: () => {
                        this.$store.commit('hidePreloader');
                }
            });

            anime({
                targets: '.js-wave-path',
                d: [{
                    value: 'm0,70.125c20.25,0 23.75,-17 30.5,-30.5c6.75,-13.5 9.75,-29.75 29.5,-29.625c19.75,0.125 23.25,17.125 30,30.125c6.75,13 10.25,29.75 29.75,30.125c19.5,0.375 78,78.375 78,153.25c0,74.875 -256.5,-6.875 -256.5,-7c0,-0.125 38.5,-146.375 58.75,-146.375z'
                },
                    {
                        value: 'm-0.25,39.875c0,0 10.25,30 30.5,30c20.25,0 24,-16.75 30,-30.125c6,-13.375 10.25,-29.625 30.25,-29.625c20,0 26.75,25.5 29.25,29.625c2.5,4.125 78,108.875 78,183.75c0,74.875 -256.5,-6.875 -256.5,-7c0,-0.125 58.5,-176.625 58.5,-176.625z'
                    },
                    {
                        value: 'm0.25,10.125c15.25,0 23.5,21 29.75,30.5c6.25,9.5 15.75,29.75 30,29.625c14.25,-0.125 24.25,-19.875 30,-29.875c5.75,-10 15.5,-30 30,-30.625c14.5,-0.625 77.75,138.875 77.75,213.75c0,74.875 -256.5,-6.875 -256.5,-7c0,-0.125 43.75,-206.375 59,-206.375z'
                    },
                    {
                        value: 'm-0.25,39.875c0,0 10.5,-29.75 30.75,-29.75c20.25,0 23.75,16 29.75,29.625c6,13.625 9.75,30.375 29.75,30.375c20,0 29.75,-30.25 29.75,-30.375c0,-0.125 78,108.875 78,183.75c0,74.875 -256.5,-6.875 -256.5,-7c0,-0.125 58.5,-176.625 58.5,-176.625z'
                    }
                ],
                duration: 9000,
                easing: 'linear',
                elasticity: 1000,
                delay: 0,
                loop: true
            });

            // anime({
            //     targets: '.js-outline-path',
            //     rotateZ: ['0deg', '360deg'],
            //     // translateZ:['0px', '10px'],
            //     skewY: ['0deg', '-4deg', '0deg', '4deg', '0deg'],
            //     skewX: ['0deg', '5deg', '9deg', '5deg', '0deg', '-5deg', '-9deg', '-5deg', '0deg'],
            //     scaleY: ['0.7', '0.7', '0.63', '0.63', '0.75','0.75'],
            //     scaleX: ['0.63', '0.67', '0.6',  '0.64',  '0.55'],
            //     duration: 12000,
            //     easing: 'linear',
            //     elasticity: 0,
            //     delay: 0,
            //     loop: true
            // });
          }
        },
        mounted() {
            this.$nextTick(() => {
                var video = document.querySelector('.section__video')
                    video.load();
                    video.play()
           });
        }
    }
</script>


<style >
@import "./../assets/css/fonts.css";
    #preloaderMorphLine{
       z-index: -1;
       position: absolute;
       top: 14%;
       left: 15%;
    }
    .preloader {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
    }

    .preloader__text {

    }
    .preloader__svg {
        position: absolute;
        top: calc(50% - 366px / 2);
        left: calc(50% - 460px / 2);
        width: 460px
    }
    .preloader__percent {
        width: 95px;
        height: 120px;

    }
    .preloader__numbers {
        font-size: 150px;
        fill: #ff0048;
        /*transform: translateY(100px);*/
        font-family: 'Heathergreen', bold;

    }
    .preloader__numbers_masked {
        fill: #fff
    }
    .preloader__mask-wrapper {
        position: absolute;
    }
</style>
