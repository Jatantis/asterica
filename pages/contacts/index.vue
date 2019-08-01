<template>
    <main class="contacts-screen">

            <Brief v-if="isBrifActive"/>

            <section class="contacts-screen__content">

                <div class="contacts-screen__text">

                    <h1 class="title title_huge title_white contacts-screen__title">
                        <span class="lang-decrypt" :data-text="locale[lang].line1">{{locale[lang].buffer.line1}}</span> <br>
                        <span class="lang-decrypt" :data-text="locale[lang].line2">{{locale[lang].buffer.line2}}</span><br>
                        <span class="lang-decrypt" :data-text="locale[lang].line3">{{locale[lang].buffer.line3}}</span>

                    </h1>

                    <div v-show="showAnimObj != null" class="contacts-screen__desc">

                        <p class="text-with-bg contacts-screen__text-with-bg">
                        <span class="text-with-bg__line">
                            <span class="text-with-bg__front"></span>
                            <span class="text-with-bg__back"></span>
                            <span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].line4">{{locale[lang].buffer.line4}}</span>
                        </span>
                            <br>
                            <span class="text-with-bg__line">
                            <span class="text-with-bg__front"></span>
                            <span class="text-with-bg__back"></span>
                            <span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].line5">{{locale[lang].buffer.line5}}</span>
                        </span>
                        </p>

                        <div class="contacts contacts_type_column">

                            <div class="text-with-bg section-5__text">

                            <span class="text-with-bg__line">

                                <span class="text-with-bg__front"></span>

                                <span class="text-with-bg__back"></span>

                                <span class="text-with-bg__content contacts__item">

                                    <span class="lang-decrypt" :data-text="locale[lang].line6">{{locale[lang].buffer.line6}}</span>

                                    <span class="contacts__delimiter asterica_link"></span>

                                    <a href="tel:+7 (473) 300 39 27">+7 (473) 300 39 27</a>

                                </span>

                            </span>

                                <span class="text-with-bg__line">

                                <span class="text-with-bg__front"></span>

                                <span class="text-with-bg__back"></span>

                                <span class="text-with-bg__content contacts__item">

                                    <span class="lang-decrypt" :data-text="locale[lang].line7">{{locale[lang].buffer.line7}}</span>

                                    <span class="contacts__delimiter"></span>

                                    <span class="lang-decrypt" :data-text="locale[lang].line8">{{locale[lang].buffer.line8}}</span>

                                </span>

                            </span>

                                <span class="text-with-bg__line">

                                <span class="text-with-bg__front"></span>

                                <span class="text-with-bg__back"></span>

                                <span class="text-with-bg__content contacts__item">

                                    <span class="lang-decrypt" :data-text="locale[lang].line9">{{locale[lang].buffer.line9}}</span>

                                    <span class="contacts__delimiter asterica_link"></span>

                                    <a href="mailto:info@asterica.ru">info@asterica.ru</a>

                                </span>

                            </span>

                                <span class="socials">

                                <a class="socials__item" href="https://vk.com/asterica_web_studio">

                                    <svg class="socials__icon socials__vk" viewBox="0 0 25 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.866,11.742 C24.836,11.682 24.807,11.633 24.781,11.593 C24.348,10.881 23.519,10.007 22.295,8.970 L22.269,8.947 L22.256,8.935 L22.243,8.923 L22.230,8.923 C21.675,8.440 21.324,8.116 21.176,7.950 C20.907,7.633 20.846,7.313 20.994,6.988 C21.098,6.743 21.488,6.225 22.165,5.434 C22.521,5.015 22.803,4.679 23.011,4.425 C24.512,2.606 25.163,1.443 24.963,0.936 L24.886,0.818 C24.834,0.747 24.699,0.682 24.483,0.622 C24.265,0.563 23.988,0.553 23.649,0.593 L19.901,0.616 C19.840,0.597 19.754,0.598 19.641,0.622 C19.528,0.646 19.471,0.658 19.471,0.658 L19.406,0.688 L19.355,0.723 C19.311,0.747 19.263,0.788 19.211,0.848 C19.160,0.907 19.116,0.976 19.081,1.055 C18.673,2.013 18.209,2.903 17.689,3.726 C17.368,4.216 17.073,4.641 16.804,5.001 C16.535,5.361 16.309,5.626 16.127,5.796 C15.945,5.967 15.780,6.103 15.632,6.206 C15.485,6.309 15.372,6.352 15.294,6.336 C15.216,6.320 15.142,6.304 15.073,6.289 C14.951,6.218 14.853,6.121 14.780,5.998 C14.706,5.875 14.656,5.721 14.630,5.535 C14.604,5.349 14.589,5.189 14.585,5.054 C14.581,4.920 14.582,4.730 14.591,4.485 C14.600,4.240 14.604,4.074 14.604,3.986 C14.604,3.686 14.611,3.360 14.624,3.007 C14.637,2.655 14.647,2.376 14.656,2.171 C14.665,1.965 14.669,1.747 14.669,1.518 C14.669,1.289 14.654,1.108 14.624,0.978 C14.594,0.848 14.548,0.721 14.487,0.598 C14.426,0.476 14.337,0.381 14.220,0.313 C14.103,0.246 13.958,0.193 13.784,0.153 C13.325,0.059 12.739,0.007 12.027,-0.001 C10.413,-0.017 9.376,0.078 8.917,0.284 C8.734,0.371 8.570,0.490 8.422,0.640 C8.266,0.814 8.244,0.909 8.357,0.924 C8.878,0.996 9.246,1.166 9.463,1.435 L9.541,1.577 C9.602,1.680 9.663,1.862 9.724,2.123 C9.784,2.384 9.823,2.673 9.841,2.990 C9.884,3.567 9.884,4.062 9.841,4.473 C9.797,4.884 9.756,5.205 9.717,5.434 C9.678,5.664 9.619,5.850 9.541,5.992 C9.463,6.134 9.411,6.221 9.385,6.253 C9.359,6.285 9.337,6.304 9.320,6.312 C9.207,6.352 9.090,6.372 8.969,6.372 C8.847,6.372 8.700,6.316 8.526,6.206 C8.353,6.095 8.173,5.942 7.986,5.749 C7.799,5.555 7.589,5.284 7.355,4.936 C7.121,4.587 6.878,4.176 6.626,3.702 L6.418,3.357 C6.288,3.136 6.110,2.813 5.884,2.390 C5.659,1.967 5.459,1.557 5.286,1.162 C5.216,0.996 5.112,0.869 4.973,0.782 L4.908,0.746 C4.865,0.715 4.795,0.681 4.700,0.646 C4.604,0.610 4.505,0.584 4.401,0.568 L0.834,0.592 C0.470,0.592 0.223,0.667 0.093,0.818 L0.041,0.889 C0.014,0.928 0.001,0.991 0.001,1.078 C0.001,1.166 0.027,1.272 0.079,1.399 C0.600,2.515 1.166,3.590 1.778,4.627 C2.389,5.663 2.921,6.498 3.372,7.130 C3.823,7.763 4.283,8.361 4.752,8.923 C5.220,9.484 5.531,9.844 5.682,10.003 C5.834,10.161 5.953,10.280 6.040,10.358 L6.366,10.643 C6.574,10.833 6.880,11.061 7.283,11.326 C7.687,11.591 8.134,11.852 8.624,12.109 C9.114,12.366 9.684,12.576 10.335,12.738 C10.986,12.900 11.619,12.966 12.235,12.934 L13.732,12.934 C14.036,12.910 14.266,12.823 14.422,12.673 L14.474,12.613 C14.509,12.566 14.541,12.493 14.571,12.394 C14.602,12.295 14.617,12.186 14.617,12.068 C14.608,11.728 14.636,11.421 14.701,11.148 C14.766,10.875 14.840,10.670 14.923,10.531 C15.005,10.392 15.099,10.276 15.202,10.181 C15.307,10.086 15.381,10.029 15.424,10.009 C15.467,9.989 15.502,9.976 15.528,9.968 C15.736,9.904 15.981,9.965 16.263,10.152 C16.546,10.337 16.810,10.567 17.057,10.839 C17.305,11.113 17.602,11.420 17.949,11.760 C18.296,12.100 18.600,12.353 18.860,12.519 L19.120,12.661 C19.294,12.756 19.519,12.843 19.797,12.923 C20.074,13.002 20.317,13.021 20.526,12.982 L23.858,12.934 C24.187,12.934 24.443,12.885 24.625,12.786 C24.808,12.687 24.916,12.578 24.951,12.460 C24.986,12.341 24.987,12.207 24.957,12.056 C24.927,11.906 24.896,11.801 24.866,11.742 Z"></path>
                                    </svg>
                                </a>

                                <a class="socials__item" href="https://www.facebook.com/astericaW/">

                                    <svg class="socials__icon socials__fb" viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.7,6.9H6.7v-2C6.9,3.1,10,3.4,10,3.4l0-0.1l0,0v-3h0v0h0c-0.1,0-6.1-1.4-7.3,3.1c0,0,0,0,0,0c0,0,0,0,0,0 C2.5,3.9,2.5,6.5,2.5,6.9H0v3.5h2.7v9.5h3.9v-9.5h3L10,6.9L9.7,6.9z"></path>
                                    </svg>

                                </a>

                                <a class="socials__item" target="_blank" href="https://www.behance.net/stooder">

                                    <svg class="socials__icon socials__be" viewBox="0 0 22 13" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.873,1.839 L14.359,1.839 L14.359,0.539 L19.873,0.539 L19.873,1.839 L19.873,1.839 ZM10.688,7.171 C11.044,7.695 11.222,8.330 11.222,9.076 C11.222,9.847 11.021,10.539 10.614,11.150 C10.354,11.555 10.032,11.896 9.645,12.171 C9.209,12.489 8.693,12.707 8.100,12.824 C7.504,12.940 6.860,13.000 6.166,13.000 L-0.000,13.000 L-0.000,-0.000 L6.613,-0.000 C8.279,0.025 9.461,0.484 10.159,1.384 C10.578,1.936 10.785,2.599 10.785,3.369 C10.785,4.164 10.575,4.800 10.152,5.284 C9.917,5.554 9.570,5.801 9.110,6.023 C9.806,6.265 10.335,6.646 10.688,7.171 ZM3.158,5.124 L6.055,5.124 C6.651,5.124 7.132,5.017 7.503,4.802 C7.873,4.588 8.058,4.207 8.058,3.659 C8.058,3.055 7.813,2.654 7.322,2.461 C6.901,2.326 6.361,2.257 5.706,2.257 L3.158,2.257 L3.158,5.124 ZM8.337,8.890 C8.337,8.214 8.046,7.748 7.466,7.497 C7.141,7.355 6.684,7.282 6.097,7.277 L3.158,7.277 L3.158,10.741 L6.051,10.741 C6.646,10.741 7.106,10.667 7.438,10.513 C8.037,10.230 8.337,9.691 8.337,8.890 ZM21.919,6.775 C21.985,7.200 22.015,7.817 22.003,8.624 L14.862,8.624 C14.901,9.560 15.242,10.214 15.887,10.589 C16.276,10.824 16.748,10.938 17.301,10.938 C17.883,10.938 18.358,10.798 18.724,10.511 C18.923,10.359 19.099,10.143 19.250,9.872 L21.868,9.872 C21.799,10.425 21.484,10.985 20.918,11.556 C20.040,12.461 18.810,12.915 17.229,12.915 C15.924,12.915 14.773,12.532 13.774,11.769 C12.779,11.003 12.279,9.761 12.279,8.038 C12.279,6.423 12.728,5.187 13.628,4.326 C14.532,3.464 15.699,3.035 17.137,3.035 C17.989,3.035 18.758,3.179 19.443,3.470 C20.127,3.761 20.691,4.219 21.136,4.849 C21.539,5.404 21.798,6.045 21.919,6.775 ZM19.342,7.018 C19.294,6.370 19.067,5.881 18.657,5.546 C18.251,5.211 17.743,5.042 17.137,5.042 C16.478,5.042 15.969,5.222 15.607,5.576 C15.243,5.929 15.016,6.410 14.923,7.018 L19.342,7.018 L19.342,7.018 Z"></path>
                                    </svg>

                                </a>

                            </span>

                            </div>

                        </div>

                    </div>

                </div>

                <button class=" asterica_link button_white-transparent button button_size_normal button_red button_with-icon button_with-icon-right " @click.prevent="enableBrif">
                    <span style="background-color: #ff0000;" class="button__background button__background_red"></span>
                    <span style="color: #fff;" class="button__text lang-decrypt" :data-text="locale[lang].line10">{{locale[lang].buffer.line10}}</span>

                    <svg style="fill: #fff" class="button__icon button__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32">
                        <path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path>
                    </svg>

                </button>

                <div class="яДумаюЧтоДвеСекундочкиПрошли"></div>

            </section>

            <div class="contacts-screen__video-wrapper">
                <video class="section__video" muted loop autoplay playsinline>
                    <source><source src="@/assets/video/contacts_1920.mp4" type='video/mp4'>
                </video>
            </div>

        </main>
</template>

<script>
    import Brief from "@/components/Brief";
    import {decryptLetters} from "@/assets/js/animateFunctions";
    import {staticTranslate} from "../../assets/js/animateFunctions";
    import Anique from '../../assets/js/anique'
    import * as anime from 'animejs';
    export default {
        head () {
          return {
             title: 'Контакты',
             meta:[
                { hid: 'description', name: 'description', content: 'Контакты студии ASTERICA' }
             ]
           }
         },
        components: {Brief},
        data: () => ({
            showAnimObj: null,
            locale: {
                ru: {
                    line1: 'Мы воплотим',
                    line2: 'Ваш проект - мечту',
                    line3: 'В реальность',
                    line4: 'Наш главный офис находится в г. Воронеж.',
                    line5: 'Но мы с любовью работаем по всей России',
                    line6: 'Наш телефон',
                    line7: 'Адрес',
                    line8: 'Воронеж, Московский проспект, 97',
                    line9: 'Наш Email',
                    line10: 'Заполнить бриф',
                    buffer: {
                        line1: 'Мы воплотим',
                        line2: 'Ваш проект - мечту',
                        line3: 'В реальность',
                        line4: 'Наш главный офис находится в г. Воронеж.',
                        line5: 'Но мы с любовью работаем по всей России',
                        line6: 'Наш телефон',
                        line7: 'Адрес',
                        line8: 'Воронеж, Московский проспект, 97',
                        line9: 'Наш Email',
                        line10: 'Заполнить бриф'
                    }

                },
                en: {
                    line1: 'WE INCARNATE',
                    line2: 'YOUR DREAM PROJECT',
                    line3: 'TO REALITY',
                    line4: 'Our main office is located in Voronezh.',
                    line5: 'We work all over Russia with love.',
                    line6: 'Phone',
                    line7: 'Adress',
                    line8: 'Voronezh, Moskovsky prospect, 97',
                    line9: 'Email',
                    line10: 'Fill brief',
                    buffer: {
                        line1: 'WE INCARNATE',
                        line2: 'YOUR DREAM PROJECT',
                        line3: 'TO REALITY',
                        line4: 'Our main office is located in Voronezh.',
                        line5: 'We work all over Russia with love.',
                        line6: 'Phone',
                        line7: 'Adress',
                        line8: 'Voronezh, Moskovsky prospect, 97',
                        line9: 'Email',
                        line10: 'Fill brief',
                    }
                }
            }
        }),
        computed: {
            isBrifActive() {
                return this.$store.state.appState.brif;
            },
            sitePreloader() {
                return this.$store.state.preloader;
            },
            routerPreloader() {
                return this.$store.state.preloader_n;
            },
            menuPreloader() {
                return !(this.$store.state.appState.menuNavState == 'COMPLETE')
            },
            lang() {
                return this.$store.state.appState.language;
            }
        },
        watch: {
            sitePreloader(newVal, oldVal) {
                if (newVal != oldVal && newVal == false) {
                    setTimeout(()=>{
                        this.animateShow();
                    },500)
                }
            },
            routerPreloader(newVal, oldVal) {
                if (newVal != oldVal && newVal == false) {
                    setTimeout(()=>{
                        this.animateShow();
                    },1600)
                }
            },
            menuPreloader(newVal, oldVal) {
                if (newVal != oldVal && newVal == false) {
                    setTimeout(()=>{
                        this.animateShow();
                    },900)
                }
            },
            lang(newValue, oldValue) {
                if (oldValue != newValue) {
                    let title = document.querySelectorAll('.lang-decrypt');
                    let static_translate = document.querySelectorAll('.lang-static');
                    setTimeout(()=>{
                        // location.reload()
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
        methods: {
          enableBrif() {
              this.$store.commit('enableBrif');
              document.body.classList.add('--overflow-hidden');
          },
          animateShow() {
              let textLines = document.querySelectorAll('.title span');
              decryptLetters(textLines[0], 800);
              decryptLetters(textLines[1], 800);
              decryptLetters(textLines[2], 800);
              this.showAnimObj.start('swipe');
          },
          animateLeftText() {
              this.showAnimObj = new Anique()
                  .add({
                      name: 'text line',
                      call: () => {
                          anime({
                              targets: '.text-with-bg .text-with-bg__content',
                              opacity: [0, 1],
                              transformOrigin: '0% 0%',
                              duration: 400,
                              easing: 'easeInSine',
                              offset: 0
                          })
                      }
                    })
                    .add({
                        name: 'text line',
                        call: () => {
                            anime({
                                targets: '.text-with-bg .text-with-bg__line',
                                scaleX: [0, 1],
                                opacity: [0, 1],
                                transformOrigin: '0% 0%',
                                duration: 400,
                                easing: 'easeOutSine',
                                offset: 0
                            })
                        }
                      })
                      .add({
                          name: 'text line',
                          call: () => {
                              anime({
                                  targets: '.text-with-bg .text-with-bg__back',
                                  scaleY: [0, 1],
                                  transformOrigin: '100% 100%',
                                  duration: 400,
                                  easing: 'easeOutSine',
                                  offset: 0
                              })
                          }
                        })
                        .add({
                            name: 'text line',
                            call: () => {
                                anime({
                                    targets: '.text-with-bg .text-with-bg__front',
                                    scaleX: [1, 0],
                                    opacity: [1, 1],
                                    transformOrigin: '100% 0%',
                                    duration: 400,
                                    easing: 'easeOutSine',
                                    offset: 500
                                })
                            }
                        })
                        .add({
                            name: 'btn',
                            call: () => {
                                anime({
                                    targets: '.button_red',
                                    opacity: [0, 1],
                                    duration: 400,
                                    easing: 'easeInSine',
                                    offset: 0
                                })
                            }
                          })
                      }
        },
        fetch({store}){
            store.commit('setCurrentPage', store.state.PAGES.CONTACTS);
        },
        beforeRouteLeave(to, from, next) {
            this.$store.commit('prepareToNavigation');
            setTimeout(()=>next(),1000);
        },
        mounted() {
            this.animateLeftText();
            if (this.$store.state.preloader) {
                this.$store.commit('increacePercentage', 70);
            }
            setTimeout(()=>{
                this.$store.commit('completeNavigation');
            }, 500)
        }
    }
</script>

<style lang="sass" >
    @import "../../assets/sass/contacts/contacts.sass"
    @import "../../assets/sass/sections/section5.sass"
    @import "../../assets/sass/form.sass"
    .contacts-screen
        &__content
            position: relative
            z-index: 1
        &__video-wrapper
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            width: 100%
            height: 100%
            overflow: hidden
        &__desc
            right: 5%
    .title span
        opacity: 0
    .section__video
            min-width: 100%
            min-height: 100%
            width: auto
            height: auto

    @media (min-width: 768px)
        .contacts-screen__desc
            right: 5%
    @media (min-width: 1400px)
       .contacts-screen__desc
            right: 16%
    @media (min-width: 1700px)
       .contacts-screen__desc
            right: 18%
    @media (max-width: 768px)
       .contacts-screen__text
            flex-direction: column
            margin: 0 0 50px
       .contacts-screen__desc
            position: relative
            right: 0%

    .button_red
        opacity: 0
</style>
