<template>
    <div id="section4" class="section section-4 active">

        <div class="section__content-wrapper">

            <section class="container">

                <div class="portfolio-slider">

                    <div class="portfolio-slider__bg">

                        <div class="portfolio-slider-bg-bg"></div>

                        <div class="portfolio-bg-track">

                            <div class="portfolio-slider__bg-image" :style="{ backgroundImage: 'url(' + imageBeloris + ')' }"></div>
                            <div class="portfolio-slider__bg-image" :style="{ backgroundImage: 'url(' + imageGorodSad + ')' }"></div>
                            <div class="portfolio-slider__bg-image" :style="{ backgroundImage: 'url(' + imageSinail + ')' }"></div>
                            <div class="portfolio-slider__bg-image" :style="{ backgroundImage: 'url(' + imageVaribasi + ')' }"></div>
                            <div class="portfolio-slider__bg-image" :style="{ backgroundImage: 'url(' + imageVeranda + ')' }"></div>
                            <div class="portfolio-slider__bg-image" :style="{ backgroundImage: 'url(' + imageBabka + ')' }"></div>
                            <div class="portfolio-slider__bg-image" :style="{ backgroundImage: 'url(' + imageTakzhivem + ')' }"></div>



                        </div>

                    </div>

                    <div class="portfolio-slider__preview">

                        <div class="portfolio-slider-preview-bg"></div>

                        <div class="portfolio-preview-track">

                            <div class="portfolio-preview">

                                <img src="@/assets/img/portfolio/slider/beloris/Beloris.jpg" alt="">

                            </div>

                            <div class="portfolio-preview">

                                <img src="@/assets/img/portfolio/slider/gorodSad/Gorod-sad.jpg" alt="">

                            </div>

                            <div class="portfolio-preview">

                                <img src="@/assets/img/portfolio/slider/Sinail/SiNail.jpg" alt="">

                            </div>

                            <div class="portfolio-preview">

                                <img src="@/assets/img/portfolio/slider/Varibasi/Varibasi.jpg" alt="">

                            </div>

                            <div class="portfolio-preview">

                                <img src="@/assets/img/portfolio/slider/veranda/Veranda.jpg" alt="">

                            </div>

                            <div class="portfolio-preview">

                                <img src="@/assets/img/portfolio/slider/babka/Babulina-lavka.jpg" alt="">

                            </div>

                            <div class="portfolio-preview">

                                <img src="@/assets/img/portfolio/slider/tj/tj.jpg" alt="">

                            </div>



                        </div>

                    </div>

                    <div class="portfolio-slider__info">

                        <div class="portfolio-slider__top">

                            <div class="portfolio-slider__top-images">

                                <div class="portfolio-slider-top-bg"></div>

                                <div class="portfolio-image-track">

                                    <div class="portfolio-image">

                                        <img src="@/assets/img/portfolio/slider/tj/Background-2.jpg" alt="" class="portfolio-slider__image">

                                    </div>

                                    <div class="portfolio-image">

                                        <img src="@/assets/img/portfolio/slider/babka/Background-2.jpg" alt="" class="portfolio-slider__image">

                                    </div>

                                    <div class="portfolio-image">

                                        <img src="@/assets/img/portfolio/slider/veranda/Background-2.jpg" alt="" class="portfolio-slider__image">

                                    </div>

                                    <div class="portfolio-image">

                                        <img src="@/assets/img/portfolio/slider/Varibasi/Background-2.jpg" alt="" class="portfolio-slider__image">

                                    </div>

                                    <div class="portfolio-image">

                                        <img src="@/assets/img/portfolio/slider/Sinail/Background-2.jpg" alt="" class="portfolio-slider__image">

                                    </div>

                                    <div class="portfolio-image">

                                        <img src="@/assets/img/portfolio/slider/gorodSad/Background-2.jpg" alt="" class="portfolio-slider__image">

                                    </div>


                                    <div class="portfolio-image">

                                        <img src="@/assets/img/portfolio/slider/beloris/Background-2.jpg" alt="" class="portfolio-slider__image">

                                    </div>














                                </div>

                            </div>



                        </div>

                        <div class="portfolio-slider__action">

                            <div class="portfolio-slider-action-bg"></div>

                            <div class="portfolio-slider__nav">

                                <button class="portfolio-slider__button js-prev-case" disabled v-on:click="mSlide==0?mSlide:mSlide--">

                                    <svg class="portfolio-slider__arrow asterica_link " version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path d="M189.796 705.548c9.002 9.002 21.005 9.002 30.008 0s9.002-21.005 0-27.007l-147.036-147.036h930.228c12.003 0 21.005-9.002 21.005-18.004 0-12.003-9.002-21.005-21.005-21.005h-930.228l144.035-144.035c9.002-9.002 9.002-21.005 0-30.008s-21.005-9.002-30.008 0l-180.044 180.044c-9.002 9.002-9.002 21.005 0 27.007l183.045 180.044z"></path>
                                    </svg>

                                </button>

                                <div class="portfolio-slider__numbers">

                                    <span class="portfolio-slider__current-slider js-current-slide">01</span>

                                    <span class="portfolio-slider__all-slides-count">/ 07</span>

                                </div>

                                <button class="portfolio-slider__button js-next-case" v-on:click="mSlide==6?mSlide:mSlide++">

                                    <svg class="portfolio-slider__arrow asterica_link" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path d="M834.204 705.548c-9.002 9.002-21.005 9.002-30.008 0s-9.002-21.005 0-27.007l147.036-147.036h-930.228c-12.003 0-21.005-9.002-21.005-18.004 0-12.003 9.002-21.005 21.005-21.005h930.228l-144.035-144.035c-9.002-9.002-9.002-21.005 0-30.008s21.005-9.002 30.008 0l180.044 180.044c9.002 9.002 9.002 21.005 0 27.007l-183.045 180.044z"></path>
                                    </svg>

                                </button>

                            </div>

                            <div class="portfolio-slider__project-info">

                                <div class="portfolio-slider__type">Магазин косметики</div>

                                <div class="portfolio-slider__name">Белорис</div>

                                <div class="portfolio-slider__buttons">

                                    <a v-bind:href="slideTitles[mSlide][lang].url" class="button button_size_normal button_white-transparent button_with-icon-right portfolio-slider__current-btn">

                                        <span class="button__background"></span>

                                        <span class="button__text lang-decrypt" :data-text="locale[lang].button">{{locale[lang].button}}</span>

                                        <svg class="button__icon button__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32">
                                            <path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path>
                                        </svg>

                                    </a>

                                    <nuxt-link class="asterica_link portfolio-slider__all-btn lang-decrypt" to="/portfolio" :data-text="locale[lang].all">{{locale[lang].all}}</nuxt-link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <h1 class="title title_huge title_white portfolio-slider__title">
                                <span class="lang-decrypt" :data-text="locale[lang].title">
                                    {{locale[lang].title}}
                                </span>
                </h1>
                <div ref="mslider" class="portfolio-slider-mobile">

                     <div class="m-top-group">
                        <div ref="mbgslide" class="m-top-bg"></div>
                         <transition-group
                             class="m_img_transition"
                             mode="out-in"
                             v-on:enter="enter"
                             v-on:leave="leave">
                            <img key="0" v-show="mSlide == 0" src="@/assets/img/portfolio/slider/beloris/Beloris.jpg" alt="">
                            <img key="1" v-show="mSlide == 1" src="@/assets/img/portfolio/slider/gorodSad/Gorod-sad.jpg" alt="">
                            <img key="2" v-show="mSlide == 2" src="@/assets/img/portfolio/slider/Sinail/SiNail.jpg" alt="">
                            <img key="3" v-show="mSlide == 3" src="@/assets/img/portfolio/slider/Varibasi/Varibasi.jpg" alt="">
                            <img key="4" v-show="mSlide == 4" src="@/assets/img/portfolio/slider/veranda/Veranda.jpg" alt="">
                            <img key="5" v-show="mSlide == 5" src="@/assets/img/portfolio/slider/babka/Babulina-lavka.jpg" alt="">
                            <img key="6" v-show="mSlide == 6" src="@/assets/img/portfolio/slider/tj/tj.jpg" alt="">
                        </transition-group>
                     </div>
                     <div class="m-bottom-group">
                        <div class="m_arrow_group" style="display: flex ;justify-content: space-between; align-items:baseline; width: 100%;">
                            <button v-on:click="mSlide==0?mSlide:mSlide--">
                               <svg class="portfolio-slider__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                    <path d="M189.796 705.548c9.002 9.002 21.005 9.002 30.008 0s9.002-21.005 0-27.007l-147.036-147.036h930.228c12.003 0 21.005-9.002 21.005-18.004 0-12.003-9.002-21.005-21.005-21.005h-930.228l144.035-144.035c9.002-9.002 9.002-21.005 0-30.008s-21.005-9.002-30.008 0l-180.044 180.044c-9.002 9.002-9.002 21.005 0 27.007l183.045 180.044z"></path>
                                </svg>
                            </button>
                            <div class="portfolio-slider__numbers">
                                <span class="portfolio-slider__current-slider js-current-slide">0{{ mSlide+1 }}</span>
                                <span class="portfolio-slider__all-slides-count">/ 07</span>
                            </div>
                            <button v-on:click="mSlide==6?mSlide:mSlide++">
                                <svg class="portfolio-slider__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                    <path d="M834.204 705.548c-9.002 9.002-21.005 9.002-30.008 0s-9.002-21.005 0-27.007l147.036-147.036h-930.228c-12.003 0-21.005-9.002-21.005-18.004 0-12.003 9.002-21.005 21.005-21.005h930.228l-144.035-144.035c-9.002-9.002-9.002-21.005 0-30.008s21.005-9.002 30.008 0l180.044 180.044c9.002 9.002 9.002 21.005 0 27.007l-183.045 180.044z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="portfolio-slider__project-info">
                            <div class="portfolio-slider__type">{{ slideTitles[mSlide][lang].title }}</div>
                            <div class="portfolio-slider__name">{{ slideTitles[mSlide][lang].name }}</div>
                            <div class="m-slider_btn">
                                <a v-bind:href="slideTitles[mSlide][lang].url" class="cst_m_slide_btn">
                                    <span :data-text="locale[lang].button">{{locale[lang].button}}</span>
                                    <svg class="portfolio-slider__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32">
                                        <path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path>
                                    </svg>
                                </a>
                                <nuxt-link class="portfolio_mobile" to="/portfolio" :data-text="locale[lang].all">{{locale[lang].all}}</nuxt-link>
                            </div>
                        </div>
                      </div>
                </div>

            </section>

        </div>

    </div>
</template>

<script>
    import * as anime from 'animejs'
    import image from './../../assets/img/portfolio/bg.jpg'
    import imageBabka from './../../assets/img/portfolio/slider/babka/Background-1.jpg'
    import imageSinail from './../../assets/img/portfolio/slider/Sinail/Background-1.jpg'
    import imageBeloris from './../../assets/img/portfolio/slider/beloris/Background-1.jpg'
    import imageVeranda from './../../assets/img/portfolio/slider/veranda/Background-1.jpg'
    import imageVaribasi from './../../assets/img/portfolio/slider/Varibasi/Background-1.jpg'
    import imageGorodSad from './../../assets/img/portfolio/slider/gorodSad/Background-1.jpg'
    import imageTakzhivem from './../../assets/img/portfolio/slider/tj/Background-1.jpg'

    import Anique from "../../assets/js/anique";
    import {decryptLetters, encryptLetters, PortfolioSlider, staticTranslate} from "../../assets/js/animateFunctions";

    export default {
        name: "Section4",
        data: () => {
            return {
                mSlide: 0,
                mtl: null,
                locale: {
                    ru: {
                        title: 'НАШИ РАБОТЫ',
                        button: 'ПОСМОТРЕТЬ ПРОЕКТ',
                        all: 'Смотреть все работы'
                    },
                    en: {
                        title: 'OUR WORKS',
                        button: 'ПОСМОТРЕТЬ ПРОЕКТ',
                        all: 'Смотреть все работы'
                    }
                },
                imageBabka,
                imageSinail,
                imageBeloris,
                imageVeranda,
                imageVaribasi,
                imageGorodSad,
                imageTakzhivem,
                slideTitles: [
                    {
                       ru: {
                           title: 'Интернет магазин',
                           name: 'Белорис',
                           url: 'https://beloris.ru/'
                       },
                       en: {
                            title: 'Online shop',
                            name: 'Beloris',
                            url: 'https://beloris.ru/'
                       }
                    }, {
                        ru: {
                            title: 'Интернет-портал',
                            name: 'Город Сад',
                            url: 'http://vrngorodsad.ru/'
                        },
                        en: {
                            title: 'Promo',
                            name: 'Город Сад',
                            url: 'http://vrngorodsad.ru/'
                        }
                    }, {
                        ru: {
                            title: 'Интернет магазин',
                            name: 'Синейл',
                            url: 'https://www.behance.net/gallery/64220969/Beauty-internet-shop'
                        },
                        en: {
                            title: 'Online shop',
                            name: 'Sinail',
                            url: 'https://www.behance.net/gallery/64220969/Beauty-internet-shop'
                        }
                    }, {
                        ru: {
                            title: 'Японский ресторан',
                            name: 'Варибаси',
                            url: 'https://www.behance.net/gallery/57643883/Shop-Varibasi'
                        },
                        en: {
                            title: 'Online shop',
                            name: 'Varibasi',
                            url: 'https://www.behance.net/gallery/57643883/Shop-Varibasi'
                        }
                    }, {
                        ru: {
                            title: 'Ресторан',
                            name: 'Веранда',
                            url: 'https://www.behance.net/gallery/57644367/Corporate-website-Veranda'
                        },
                        en: {
                            title: 'Corporate',
                            name: 'Veranda',
                            url: 'https://www.behance.net/gallery/57644367/Corporate-website-Veranda'
                        }
                    }, {
                        ru: {
                            title: 'Оптовый магазин',
                            name: 'Бабулина лавка',
                            url: 'https://www.behance.net/gallery/64221165/Eco-internet-shop'
                        },
                        en: {
                            title: 'Online shop',
                            name: 'Бабулина лавка',
                            url: 'https://www.behance.net/gallery/64221165/Eco-internet-shop'
                        }
                    }, {
                        ru: {
                            title: 'Социальная сеть',
                            name: 'Такживем',
                            url: 'https://asterica.ru/project/takzhivem'
                        },
                        en: {
                            title: 'Social network',
                            name: 'Такживем',
                            url: 'https://asterica.ru/project/takzhivem'
                        }
                    }
                ]
            }
        },
        methods: {
          enter(el,done){
            TweenMax.set(el,{zIndex:1})
            TweenMax.fromTo(el,0.55,{y:-200, opacity: 0, delay: 0.3},{y:0, opacity: 1, onComplete: done,  ease: Power1.easeInOut})
          },
          leave(el,done){
            TweenMax.set(el,{zIndex:-1})
            TweenMax.fromTo(el,0.75,{y:0, opacity:1},{y:250, opacity: 0, onComplete: done,ease: Power1.easeOut})
          },
          loadMSlide(){
            this.mtl = new TimelineMax({reversed: true, paused: true})
                this.mtl.fromTo(this.$refs.mslider,0.75,{scaleX:0},{scaleX:1 ,transformOrigin:'0% 0%', ease: Power1.easeIn},0)
                this.mtl.fromTo(this.$refs.mbgslide,0.55,{scaleY:1, transformOrigin:'0% 0%'},{scaleY:0, transformOrigin:'0% 100%'},0.74)
          }
        },
        computed: {
            demount(){
                return this.$store.state.appState.animationQueue.startDemountCurrentSlide
            },
            isFourthSlide() {
                return this.$store.state.appState.slides[3]
            },
            isRouteWipe() {
                return this.$store.state.startDestructionOnRouteLeave
            },
            lang() {
                return this.$store.state.appState.language
            }
        },
        watch: {
            demount(newValue, oldValue ) {

                if (oldValue != newValue && newValue == true && this.isFourthSlide) {
                    this.mtl.reverse()
                    this.hideAnimObj.start(this.$store.getters.getMovingType);
                    this.hideAnimObj.destroy();
                    this.showAnimObj.destroy();
                    document.querySelector('#section4').classList.remove('section-4-optimize');
                    setTimeout(()=>this.$store.commit('toggleSlides',{fromId: 4, toId : this.$store.state.appState.animationQueue.nextSlide}),2600);
                }
            },
            isFourthSlide(newValue, oldValue){
                if (oldValue != newValue && newValue == true) {
                    this.mtl.play()
                    document.querySelector('#section4').classList.add('section-4-optimize');
                    this.$store.state.imageEffect.fillCorrectors(3);
                    this.$store.state.imageEffect.fillPositions(3);
                    this.$store.state.imageEffect.renderSceneOnce(3);
                    this.showAnimObj.start(this.$store.getters.getMovingType);
                }
            },
            isRouteWipe(newValue, oldValue) {
                if (oldValue != newValue && newValue == true) {
                    this.hideAnimObj.destroy();
                    this.showAnimObj.destroy();
                }
            },
            lang(newValue, oldValue) {
                if (oldValue != newValue && this.isFourthSlide) {
                    let title = document.querySelectorAll('#section4 .lang-decrypt');
                    let static_translate = document.querySelectorAll('#section4 .lang-static');
                    setTimeout(()=>{
                        Array.from(title).forEach(el => {
                            decryptLetters(el, 300)
                        });
                        Array.from(static_translate).forEach(el => {
                            staticTranslate(el)
                        });
                        this.slider.translate();
                    }, 50)


                }
            }
        },
        mounted() {
            this.loadMSlide()
            let title = document.querySelector('.portfolio-slider__title span');
            let videoWrapper = document.querySelector('.section__video-wrapper');
            let canvasWrapper = document.querySelector('.section__video-canvas');

            this.showAnimObj = new Anique()
                .add({
                    name: 'move bg',
                    call: () => {
                        let t3d = {
                            value: 0
                        };
                        let webgl = document.querySelector('.webgl-backgrounds');
                        anime({
                            targets: t3d,
                            value: [100, 0],
                            duration: 1000,
                            elasticity: 0,
                            easing: [0.790, 0.010, 0.655, 0.990],
                            offset: 0,
                            update() {
                                webgl.style.transform = `translate3d(0,${t3d.value}%,0)`;
                            },
                            complete: () => {
                                videoWrapper.style.display = "block";
                                canvasWrapper.style.display = 'none';
                                this.$store.state.zoomEffect.stopAnimate();
                            }
                        });
                    },
                    alternateCall: () => {
                    },
                    delay: 1000,
                    next: [
                        {
                            name: "show title",
                            call: () => {
                                decryptLetters(title, 800);
                            }

                        }, {
                            name: 'do animation',
                            call: () => {
                                let timeline = anime.timeline();
                                this.slider = new PortfolioSlider(this.slideTitles, this);
                                // document.querySelector('.portfolio-slider__bg-image').style.opacity = 1;
                                timeline
                                    .add({
                                        targets: '.portfolio-slider__title',
                                        opacity: [0, 1],
                                        duration: 300,
                                        easing: 'linear',
                                        elasticity: 0,
                                        offset: 0
                                    })
                                    .add({
                                        targets: '.portfolio-slider__preview',
                                        scaleX: [0, 1],
                                        duration: 300,
                                        easing: 'linear',
                                        elasticity: 0,
                                        offset: 0
                                    })
                                    .add({
                                        targets: '.portfolio-slider-preview-bg',
                                        scaleX: [1, 0],
                                        duration: 300,
                                        easing: 'easeOutSine',
                                        elasticity: 0,
                                        offset: 300
                                    })
                                    .add({
                                        targets: '.portfolio-slider-top-bg',
                                        scaleX: [0, 1],
                                        duration: 300,
                                        easing: 'easeOutSine',
                                        elasticity: 0,
                                        offset: 300,
                                        complete () {
                                            document.querySelector('.portfolio-image-track')
                                                .classList.add('active');
                                            document.querySelector('.portfolio-slider__bg').style.opacity = 1;
                                        }
                                    })
                                    .add({
                                        targets: '.portfolio-slider-top-bg',
                                        scaleY: [1, 0],
                                        duration: 300,
                                        easing: 'linear',
                                        elasticity: 0,
                                        offset: 600,
                                    })
                                    .add({
                                        targets: '.portfolio-slider__action',
                                        scaleY: [0, 1],
                                        duration: 300,
                                        easing: 'linear',
                                        elasticity: 0,
                                        offset: 600
                                    })
                                    .add({
                                        targets: '.portfolio-slider-action-bg',
                                        scaleY: [1, 0],
                                        duration: 300,
                                        easing: 'easeOutSine',
                                        elasticity: 0,
                                        offset: 900,
                                    })
                                    .add({
                                        targets: '.portfolio-slider__bg',
                                        scaleX: [0, 1],
                                        duration: 800,
                                        easing: 'easeInOutSine',
                                        elasticity: 0,
                                        offset: 600
                                    })
                                    .add({
                                        targets: '.portfolio-slider-bg-bg',
                                        scaleX: [1, 0],
                                        duration: 400,
                                        easing: 'easeOutSine',
                                        elasticity: 0,
                                        offset: 1400,
                                        complete: () => {
                                            this.$store.commit('appStateMutate', {
                                                animationIsActive: false
                                            });
                                            // document.querySelectorAll('.portfolio-slider__bg-image').forEach((el)=>{
                                            //     el.style.opacity = 1;
                                            // })

                                            this.$store.commit('unlockNav');
                                        }
                                    });
                            },
                            purge: () => {
                                this.slider.destroy();
                            }

                        },
                    ]
                });

            this.hideAnimObj = new Anique()
                .add({
                    name: 'delay hack',
                    call: () => {},
                    next: [
                        {
                            name: 'hide title',
                            offset: 800,
                            call: () => {
                                encryptLetters(title, 600);
                            }
                        }, {
                            name: 'bg move',
                            offset: 2200,
                            call: () => {
                                videoWrapper.style.display = "none";
                                canvasWrapper.style.display = 'block';
                                this.$store.state.zoomEffect.animate();
                                let t3d = {
                                    value: 0
                                };
                                let webgl = document.querySelector('.webgl-backgrounds');
                                anime({
                                    targets: t3d,
                                    value: [0, 100],
                                    duration: 1000,
                                    elasticity: 0,
                                    easing: [0.790, 0.010, 0.655, 0.990],
                                    offset: 0,
                                    update() {
                                        webgl.style.transform = `translate3d(0,${t3d.value}%,0)`;
                                    }
                                });
                            },
                            alternateCall: () => {
                                this.$store.state.imageEffect.animateNext(3, this.$store.getters.getNextSlide-1, 2000);
                            }
                        }
                    ]
                })
                .add({
                    name: 'full animation',
                    call: () => {
                        let timeline = anime.timeline();
                        timeline
                            .add({
                                targets: '.portfolio-slider-action-bg',
                                scaleY: [0, 1],
                                duration: 300,
                                easing: 'linear',
                                elasticity: 0,
                                offset: 0
                            })
                            .add({
                                targets: '.portfolio-slider__action',
                                scaleY: [1, 0],
                                duration: 300,
                                easing: 'easeOutSine',
                                elasticity: 0,
                                offset: 300
                            })
                            .add({
                                targets: '.portfolio-slider-top-bg',
                                scaleY: [0, 1],
                                duration: 300,
                                easing: 'easeOutSine',
                                elasticity: 0,
                                offset: 300,
                                complete () {
                                    document.querySelector('.portfolio-image-track')
                                        .classList.remove('active');
                                }
                            })
                            .add({
                                targets: '.portfolio-slider-top-bg',
                                scaleX: [1, 0],
                                duration: 300,
                                easing: 'linear',
                                elasticity: 0,
                                offset: 600,
                            })
                            .add({
                                targets: '.portfolio-slider-preview-bg',
                                scaleX: [0, 1],
                                duration: 300,
                                easing: 'easeOutSine',
                                elasticity: 0,
                                offset: 600
                            })
                            .add({
                                targets: '.portfolio-slider__preview',
                                scaleX: [1, 0],
                                duration: 300,
                                easing: 'easeOutSine',
                                elasticity: 0,
                                offset: 900
                            })
                            .add({
                                targets: '.portfolio-slider-bg-bg',
                                scaleX: [0, 1],
                                duration: 600,
                                easing: 'easeOutSine',
                                elasticity: 0,
                                offset: 1100
                            })
                            .add({
                                targets: '.portfolio-slider__bg',
                                scaleX: [1, 0],
                                duration: 800,
                                easing: 'easeInOutSine',
                                elasticity: 0,
                                offset: 1400
                            });
                    }
                });
        }
    }
</script>

<style lang="sass">
@import "../../assets/sass/sections/section4.sass"

@media (max-width: 768px)
    .portfolio-slider__title
        font-size: 40px !important
        top: 12% !important
        left: 30% !important
    .portfolio-slider__project-info
        text-align: center
    .backgrounds canvas
        left: 0
    .m-top-bg
        background: #131313
        z-index: 2
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    .m-top-group
        margin-bottom: 100%
        margin-left: -100%
    .m_img_transition img
        position: absolute
    .cst_m_slide_btn
        padding: 13px
        white-space: nowrap
        border: solid #efefef 1px
        display: flex
        justify-content: center
        align-items: center
        align-self: center
        font-size: 12px
    .portfolio-slider__numbers
        white-space: nowrap
        margin: 0px
        justify-content: center
        align-items: baseline
    .portfolio_mobile
        margin: 5%
        font-size: 12px
        text-align: right
        color: #0090ff !important
    .portfolio-slider__current-slider
        width: auto !important
        font-size: 67px
    .portfolio-slider__all-slides-count
        font-size: 35px
        margin-left: 15%
    .portfolio-slider__name
        margin: 0 0 20px
        font-size: 35px
        white-space: nowrap
    .portfolio-slider__type
        font-size: 17px
        margin-top: 5%
    .m-slider_btn
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
    .m-slider_btn a
        text-decoration: none
        color: #efefef
    #section4 .container
        display: flex
        justify-content: center
        align-items: center
    .backgrounds
        height: 100vh
    .title_huge
        font-size: 51px
        top: -8%
        left: 0%
    .title_huge span
        opacity: 1 !important
    .backgrounds canvas
        left: 0
    .portfolio-slider-mobile
        margin-top: 10%
        position: absolute
        display: flex !important
        flex-direction: column
        justify-content: center
        align-items: center
        max-width: 80%
    .m-bottom-group
        background: #091830
        width: 335px
        color: #efefef
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        padding: 13%

.portfolio-slider-mobile
   display: none

@media (max-width:450px)
    .portfolio-slider__title
       top: 18% !important
       left: 33% !important
       font-size: 28px !important
</style>
