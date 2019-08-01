<template>

    <div id="section1" class="section section-1 active">

        <svg class="section-1__logo js-parallax-element" style="opacity: 0;" data-parallax-move-x="10" data-parallax-invert="1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path d="M971.043 847.578l-7.809-18.528c-1.771 2.044-2.661 4.695-2.661 7.809-0.085 6.205 4.255 10.111 10.46 10.73zM926.891 838.532c0-16.935 10.636-27.226 27.488-30.235l-5.051-11.884c-2.306 0.713-4.522 1.508-6.917 2.484l-7.179-24.565c1.332-0.534 2.661-1.067 3.993-1.592l-305.124-721.7h-244.561l-389.54 921.92h266.808l65.353-163.424h80.339c-1.152-3.019-1.771-6.561-1.771-10.636 0-21.106 16.935-32.896 39.813-32.896 14.546 0 29.531 4.255 40.965 11.527l-11.968 21.987c-10.284-5.677-21.464-9.223-29.354-9.223-5.325 0-8.069 2.044-8.069 5.146 0 3.814 5.677 5.677 16.138 8.783 5.408 1.592 10.46 3.196 14.986 5.146h38.839v-13.393h-11.789v-28.107h11.789v-25.184h34.847v25.184h23.14v28.107h-23.14v13.393h32.007c3.545-25.006 23.056-43.712 49.571-43.712 30.057 0 45.934 19.332 49.392 43.712h7.356l8.33 20.483v-61.979h34.847v20.038c5.677-13.57 14.895-22.438 31.388-21.637v36.712h-2.925c-18.178 0-28.465 10.46-28.465 33.431v30.856h-19.598l43.094 105.607h272.049l-45.399-107.471c-5.146 2.567-11.172 4.076-18.267 4.076-18.886 0.085-33.431-10.815-33.431-30.947zM406.739 612.062l103.3-260.249 101.97 260.249h-205.27zM807.892 867.352h-34.847v-99.307h34.847v99.307zM808.605 758.993h-36.356v-25.718h36.356v25.718zM875.28 869.744c-29.973 0-51.96-23.495-51.96-51.96 0-28.107 21.808-51.781 53.206-51.781 20.394 0 33.966 8.866 42.38 22.26l-23.317 16.852c-4.789-6.561-10.46-9.757-18.005-9.757-12.68 0-20.394 9.934-20.394 22.438 0 12.858 8.069 22.615 19.859 22.615 8.247 0 13.216-4.076 18.706-10.46l23.675 17.113c-9.133 13.478-22.343 22.699-44.163 22.699zM628.777 791.539c-9.223 0-15.427 7.179-17.293 18.005h34.488c-1.24-11.088-7.631-18.005-17.2-18.005zM578.496 817.782c0 31.208 21.987 51.96 53.206 51.96 19.859 0 33.61-8.069 43.187-20.216l-19.241-15.961c-7.179 7.002-13.743 10.111-22.080 10.111-10.815 0-18.706-5.504-21.464-16.317h66.411c0.178-2.39 0.178-4.966 0.178-7.179 0-3.637-0.262-7.179-0.713-10.636h-98.961c-0.355 2.661-0.534 5.408-0.534 8.247zM512.168 836.492c0 23.675 12.504 32.896 33.431 32.896 9.757 0 18.005-2.217 24.208-5.677v-27.399c-4.255 2.044-8.605 3.28-13.216 3.28-6.382 0-9.579-2.925-9.579-9.934v-20.216h-34.847v27.050zM693.596 867.352h15.248l-15.248-37.331v37.331zM446.020 830.997c10.46 2.746 15.961 4.611 15.961 8.425s-2.746 5.677-8.783 5.677c-10.284 0-22.789-3.814-34.139-11.349l-13.037 21.106c13.743 9.934 30.235 14.721 46.992 14.721 24.208 0 40.611-11.349 40.611-33.252 0-14.274-8.247-21.637-20.216-26.778h-60.825c4.522 12.24 17.733 17.2 33.431 21.464zM1023.987 867.352v-57.106c0-13.917-3.102-24.208-10.636-31.567-7.892-7.892-20.038-12.146-37.769-12.146-15.070 0-26.072 2.39-36.177 6.12l10.020 23.767c6.382-1.949 12.765-3.102 20.483-3.102 13.393 0 19.859 5.847 19.859 16.138v1.687c-5.677-2.044-14.721-3.814-23.852-3.814-4.076 0-7.892 0.355-11.438 0.974l8.783 20.834c2.661-3.102 7.179-4.873 13.3-4.873 5.146 0 10.111 1.067 13.57 2.567v4.611c0 9.934-7.179 16.317-17.293 16.317-0.619 0-1.24 0-1.771-0.085l7.535 17.91c4.255-2.127 7.809-5.051 10.91-8.425v10.284h34.488z"></path>
        </svg>


        <div class="section__content-wrapper">

            <section class="container">

                <h1 class="title title_huge title_white section-1__title">

                    <span class="section-1__text-line section-1-title__line1 lang-decrypt" :data-text="locale[lang].title.line1">{{locale[lang].buffer.title.line1}}</span>

                    <span class="section-1__text-line section-1-title__line2 lang-decrypt" :data-text="locale[lang].title.line2">{{locale[lang].buffer.title.line2}}</span>

                    <span class="section-1__text-line section-1-title__line3 lang-decrypt" :data-text="locale[lang].title.line3">{{locale[lang].buffer.title.line3}}</span>

                </h1>

                <p class="text-with-bg section-1__text">
                    <span class="text-with-bg__line"><span class="text-with-bg__front"></span><span class="text-with-bg__back"></span><span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].title.line4">{{locale[lang].buffer.title.line4}}</span></span><br>
                    <span class="text-with-bg__line"><span class="text-with-bg__front"></span><span class="text-with-bg__back"></span><span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].title.line5">{{locale[lang].buffer.title.line5}}</span></span>
                </p>

            </section>

        </div>

    </div>

</template>

<script>
    import * as anime from 'animejs';
    import {decryptLetters, encryptLetters, showTextWithBg, staticTranslate} from "../../assets/js/animateFunctions";
    import Anique from '../../assets/js/anique'

    export default {
        name: "Section1",
        data: () => ({
            locale: {
                ru: {
                    title : {
                        line1: 'Ux/Ui дизайн',
                        line2: 'Digital & Creative',
                        line3: 'Брендинг',
                        line4: 'Разработка corporate & promo - сайтов,',
                        line5: 'брендинг, дизайн интерфейсов'
                    },

                    buffer: {
                        title : {
                            line1: 'Ux/Ui дизайн',
                            line2: 'Digital & Creative',
                            line3: 'Брендинг',
                            line4: 'Разработка corporate & promo - сайтов,',
                            line5: 'брендинг, дизайн интерфейсов'
                        }
                    }
                },
                en: {
                    title : {
                        line1: 'Ux/Ui design',
                        line2: 'Digital & Creative',
                        line3: 'Brending',
                        line4: 'Websites development: corporate & promo,',
                        line5: 'branding, interface design'
                    },

                    buffer: {
                        title : {
                            line1: 'Ux/Ui design',
                            line2: 'Digital & Creative',
                            line3: 'Brending',
                            line4: 'Websites development: corporate & promo,',
                            line5: 'branding, interface design'
                        }
                    }
                }
            }
        }),
        computed: {
            demount(){
                return this.$store.state.appState.animationQueue.startDemountCurrentSlide
            },
            isFirstSlide() {
                  return this.$store.state.appState.slides[0]
            },
            isActivePreloader() {
              return this.$store.state.preloader;
            },
            routerPreloader() {
              return this.$store.state.preloader_n;
            },
            isRouteWipe() {
                return this.$store.state.startDestructionOnRouteLeave;
            },
            menuPreloader() {
                return !(this.$store.state.appState.menuNavState == 'COMPLETE')
            },
            lang() {
                return this.$store.state.appState.language;
            }
        },
        watch: {
            demount(newValue, oldValue){
               if (oldValue != newValue && newValue == true && this.isFirstSlide) {
                   this.hideAnimate();
                   document.querySelector('#section2').classList.remove('section-1-optimize');
                   setTimeout(()=>this.$store.commit('toggleSlides', {fromId: 1, toId : this.$store.state.appState.animationQueue.nextSlide}),800);
               }
            },
            isFirstSlide(newValue, oldValue){
                if (oldValue != newValue && newValue == true) {
                    document.querySelector('#section2').classList.remove('section-1-optimize');
                    this.showAnimate();
                }
            },
            isActivePreloader(newValue, oldValue) {
                if (oldValue != newValue && newValue == false) {
                    this.showAnimate();
                }
            },
            routerPreloader(newValue, oldValue) {
                if (oldValue != newValue && newValue == false) {
                    setTimeout(()=>{
                        this.showAnimate();
                    },1600)
                }
            },
            menuPreloader(newVal, oldVal) {
                if (newVal != oldVal && newVal == false) {
                    setTimeout(()=>{
                        this.showAnimate();
                    },900)
                }
            },
            isRouteWipe(newValue, oldValue) {
                if (oldValue != newValue && newValue == true) {
                    this.hideAnimObj.destroy();
                    this.showAnimObj.destroy();
                }
            },
            lang(newValue, oldValue) {
                if (oldValue != newValue && this.isFirstSlide) {
                    let title = document.querySelectorAll('#section1 .lang-decrypt');
                    let static_translate = document.querySelectorAll('#section1 .lang-static');
                    setTimeout(()=>{
                        Array.from(title).forEach((el, i) => {
                            decryptLetters(el, 300)
                        });
                        Array.from(static_translate).forEach(el => {
                            staticTranslate(el)
                        });
                    }, 50)


                }
            }
        },
        mounted() {
            let title = document.querySelectorAll('.section-1__text-line');

            this.showAnimObj = new Anique()
                .add({
                    name: 'decrypt',
                    call: () => {
                        Array.from(title).forEach((el, i) => {
                            setTimeout(() => {
                                decryptLetters(el, 600)
                            }, i * 200);
                        });
                    }
                })
                .add({
                    name: 'showing lower text',
                    call: () => {
                        showTextWithBg('.section-1')
                    },
                    delay: 1200,
                    next: [{
                        name: 'close animation',
                        call: ()=> {
                            this.$store.commit('appStateMutate', {
                                animationIsActive: false
                            });
                        }
                    }]
                }).add({
                    name: 'asterica comes',
                    call: () => {
                        this.$store.state.zoomEffect.animateShowLogo()
                    },
                    delay: 1000,
                    next: [
                        {
                            name: 'unlock navigation',
                            call: () => {
                                this.$store.commit('unlockNav')
                            }
                        }
                    ]
                });


            this.hideAnimObj = new Anique()
                .add({
                    name: 'encrypt text',
                    call: () => {
                        Array.from(title).forEach((el, i) => {
                            setTimeout(() => {
                                encryptLetters(el, 400);
                            }, i * 100);
                        });
                    }
                })
                .add({
                    name: 'text line',
                    call: () => {
                        anime({
                            targets: '.section-1 .text-with-bg__front',
                            scaleX: [0, 1],
                            duration: 400,
                            easing: 'easeOutSine',
                            offset: 0
                        })
                    },
                    delay: 400,
                    next: [{
                        name: 'text background',
                        call: () => {
                            anime({
                                targets: '.section-1 .text-with-bg__line',
                                scaleX: [1, 0],
                                duration: 400,
                                easing: 'easeOutSine',
                                offset: 0
                            })
                        }
                    }]
                }).add({
                    name: 'asterica comes',
                    call: () => {
                        this.$store.state.zoomEffect.animateHideLogo()
                    }
                });



        },
        methods: {
            showAnimate: function () {
                this.$store.commit('appStateMutate', {
                    animationIsActive: true
                });


                // this.$store.state.videoDomElement.play();

                this.showAnimObj.start('swipe');



                // this.$store.state.zoomEffect.animateShowLogo();
                // console.log(document.querySelector('.section-1__text-line'));

            },
            hideAnimate: function () {


                this.$store.commit('appStateMutate', {
                    animationIsActive: true
                });



                this.hideAnimObj.start();
                this.hideAnimObj.destroy();
                this.showAnimObj.destroy();

                // zoomEffect.animateHideLogo();

            }
        }

    }
</script>

<style lang="sass">
@import "../../assets/sass/sections/section1.sass"
.webgl-backgrounds
   left: 0
</style>
