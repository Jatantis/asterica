<template>
    <Fragment>
        <div class="portfolio-page">
            <div class="portfolio-page__background">
                <video class="section__video" muted loop autoplay>
                    <source><source src="@/assets/video/projects_1920.mp4" type='video/mp4'>
                </video>
            </div>
            <main class="portfolio-wrapper">

                <section class="container">

                    <h1 class="title title_white title_huge portfolio-title">
                        <span class="lang-decrypt" :data-text="locale[lang].title">{{locale[lang].title}}</span>
                    </h1>

                    <section class="project js-parallax-element" data-parallax-rotate-x="10" data-parallax-rotate-y="10" v-for="el in projects" :key="+el.id">

                        <div class="project__left">

                            <svg class="project__count" xmlns="http://www.w3.org/2000/svg">
                                <text class="project__count-number" x="0" y="0">{{el.id}}</text>
                            </svg>

                            <div class="project__gradient"></div>

                            <a :href="el.link" target="_blank" class="project__ref-cont">
                                <div class="project__preview project__preview-front"></div>
                                <img class="project__preview" :src="el.preview" alt="">
                            </a>

                            <a :href="el.link" target="_blank">
                                <img class="project__logo asterica_link" :src="el.logo" alt="">
                                <div class="project__logo__before"></div>
                            </a>

                        </div>

                        <div class="project__right">

                            <span class="project__type lang-decrypt" :data-text="el.info[lang].type">{{el.info[lang].type}}</span>

                            <h2 ref="title" class="project__title lang-decrypt" :data-text="el.info[lang].title">{{el.info[lang].title}}</h2>


                            <p class="text-with-bg project__desc">
                                <span class="text-with-bg__line"><span class="text-with-bg__front"></span><span class="text-with-bg__back"></span><span class="text-with-bg__content lang-decrypt" :data-text="el.info[lang].desc">{{el.info[lang].desc}}</span></span><br>
                            </p>

                            <ul class="project-categories">

                                <li class="project-categories__item" v-if="el.info[lang].icons.dev">

                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="30" viewBox="0 0 36 32">
                                        <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1942" d="M36.229 0h-36.229v32c20.343 0 25.829 0 36.229 0v-32z"></path>
                                        <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1942" d="M36.229 7.543h-36.229"></path>
                                        <path fill="#fff" d="M31.657 2.514c-0.686 0-1.257 0.571-1.257 1.371s0.571 1.371 1.257 1.371c0.686 0 1.257-0.571 1.257-1.371 0.114-0.686-0.457-1.371-1.257-1.371v0z"></path>
                                        <path fill="#fff" d="M27.543 2.514c-0.686 0-1.257 0.571-1.257 1.371s0.571 1.371 1.257 1.371c0.686 0 1.257-0.571 1.257-1.371 0-0.686-0.571-1.371-1.257-1.371v0z"></path>
                                        <path fill="none" stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1942" d="M12.571 14.971l-6.057 4.914 6.057 4.914M23.657 14.971l6.057 4.914-6.057 4.914M20 12.571l-3.086 14.629"></path>
                                    </svg>

                                    <span class="project-categories__text lang-decrypt" :data-text="locale[lang].icons.dev">{{locale[lang].icons.dev}}</span>

                                </li>

                                <li class="project-categories__item" v-if="el.info[lang].icons.adp">

                                    <svg class="project-categories__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 32 32">
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="1.8231" d="M18.326 12.534h-15.003v9.591c7.407 0 11.3 0 15.098 0v-9.591h-0.095z"></path>
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="1.8231" d="M18.896 14.813c5.792 0 7.217 0 11.68 0v-13.958h-21.745v11.11"></path>
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="1.8231" d="M19.941 18.137v-3.134"></path>
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="1.8231" d="M18.801 18.611h6.267"></path>
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="1.8231" d="M25.163 21.175h4.938c0.38 0 0.665 0.285 0.665 0.665v8.546c0 0.38-0.285 0.665-0.665 0.665h-4.938c-0.38 0-0.665-0.285-0.665-0.665v-8.546c0-0.38 0.285-0.665 0.665-0.665v0z"></path>
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="1.8231" d="M21.365 18.137v-3.039"></path>
                                        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="1.8231" d="M0.95 25.163c6.837 0 16.332 0 19.846 0"></path>
                                    </svg>

                                    <span class="project-categories__text lang-decrypt" :data-text="locale[lang].icons.adp">{{locale[lang].icons.adp}}</span>

                                </li>

                                <li class="project-categories__item" v-if="el.info[lang].icons.adv">

                                    <svg class="project-categories__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="34" height="29" viewBox="0 0 37 32">
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M1.107 30.893h34.768"></path>
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M2.99 21.038h4.651v9.855h-4.651v-9.855z"></path>
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M11.737 12.291h4.651v18.602h-4.651v-18.602z"></path>
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M20.595 20.042h4.651v10.851h-4.651v-10.851z"></path>
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M29.343 16.055h4.651v14.837h-4.651v-14.837z"></path>
                                        <path stroke="#fff" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M5.315 10.076c-1.439 0-2.657 1.218-2.657 2.657s1.218 2.657 2.657 2.657c1.439 0 2.657-1.218 2.657-2.657 0-1.55-1.218-2.657-2.657-2.657v0zM14.062 1.107c-1.439 0-2.657 1.218-2.657 2.657s1.218 2.657 2.657 2.657 2.657-1.218 2.657-2.657c0.111-1.439-1.107-2.657-2.657-2.657v0zM22.92 9.080c-1.439 0-2.657 1.218-2.657 2.657s1.218 2.657 2.657 2.657 2.657-1.218 2.657-2.657c0-1.439-1.218-2.657-2.657-2.657v0zM31.668 4.983c-1.439 0-2.657 1.218-2.657 2.657s1.218 2.657 2.657 2.657c1.439 0 2.657-1.218 2.657-2.657 0.111-1.439-1.107-2.657-2.657-2.657v0z"></path>
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M7.751 10.298l4.097-4.097"></path>
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M16.498 5.979l4.208 3.875"></path>
                                        <path stroke="#fff" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="22.9256" stroke-width="2.1258" d="M25.578 10.63l3.1-1.55"></path>
                                    </svg>

                                    <span class="project-categories__text lang-decrypt" :data-text="locale[lang].icons.adv">{{locale[lang].icons.adv}}</span>

                                </li>

                            </ul>

                        </div>

                    </section>

                </section>

            </main>
        </div>
    </Fragment>
</template>

<script>
    import {Fragment} from "vue-fragment";
    import * as anime from 'animejs';
    import { Parallax } from "@/assets/js/parallax";
    import tj from '@/assets/img/portfolio/project/Takzhivem.jpg';
    import babka from '@/assets/img/portfolio/project/Babka.jpg';
    import beloris from '@/assets/img/portfolio/project/Beloris.jpg';
    import gorodsad from '@/assets/img/portfolio/project/GorodSad.jpg';
    import sinail from '@/assets/img/portfolio/project/SiNail.jpg';
    import varibasi from '@/assets/img/portfolio/project/Varibasi.jpg';
    import veranda from '@/assets/img/portfolio/project/Veranda.jpg';

    import tjLogo from '@/assets/img/portfolio/project/1Takzhivem.jpg';
    import babkaLogo from '@/assets/img/portfolio/project/1Babka.jpg';
    import belorisLogo from '@/assets/img/portfolio/project/1Beloris.jpg';
    import gorodsadLogo from '@/assets/img/portfolio/project/1GorodSad.jpg';
    import sinailLogo from '@/assets/img/portfolio/project/1SiNail.jpg';
    import varibasiLogo from '@/assets/img/portfolio/project/1Varibasi.jpg';
    import verandaLogo from '@/assets/img/portfolio/project/1Veranda.jpg';




    import {decryptLetters} from "@/assets/js/animateFunctions";
    import {staticTranslate} from "../../assets/js/animateFunctions";


    export default {
      head () {
        return {
           title: 'Портфолио',
           meta:[
              { hid: 'description', name: 'description', content: 'Работы студии ASTERICA' }
           ]
         }
       },
        components: {
            Fragment
        },
        data: () => ({
            locale: {
               ru: {
                   title: 'Проекты',
                   icons: {
                       dev: 'Разработка',
                       adp: 'Адаптив',
                       adv: 'Продвижение'
                   }
               },
               en: {
                   title: 'Projects',
                   icons: {
                       dev: 'Development',
                       adp: 'Adaptive',
                       adv: 'SEO'
                   }
               }
            },
            projects: [
                {
                    id: '01',
                    preview: tj,
                    logo: tjLogo,
                    link: 'https://asterica.ru/project/takzhivem',
                    info: {
                        ru: {
                            type: 'Социальная сеть',
                            title: 'ТАКЖИВЕМ',
                            desc: 'Проект предназначен для пользователей, выражающих свои мысли об обыденных социальных проблемах населения. Это место, где можно свободно обсудить вопросы с гражданской точки зрения. Здесь пользователи поднимают острые и насущные вопросы, высказывают мнения, делятся полезной информацией, обсуждают проблемы и вместе ищут пути их решения.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        },
                        en: {
                            type: 'Social network',
                            title: 'ТАКЖИВЕМ',
                            desc: 'The project is intended for users who express their thoughts about everyday social problems. This is a place where you can freely discuss issues from a civilian point of view. Here, users raise sharp and pressing issues, express opinions. They share useful information, discuss problems, and together look for ways to solve them.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        }
                    }
                }, {
                    id: '02',
                    preview: babka,
                    logo: babkaLogo,
                    link: 'https://www.behance.net/gallery/64221165/Eco-internet-shop',
                    info: {
                        ru: {
                            type: 'Интернет магазин',
                            title: 'БАБУЛИНА ЛАВКА',
                            desc: 'Доставка натуральных фермерских продуктов напрямую от производителя. Поставки осуществляются из заповедных мест России, таких как Карелия, Сахалин, а также фермерских хозяйств нашей необъятной родины. ',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        },
                        en: {
                            type: 'Online shop',
                            title: 'БАБУЛИНА ЛАВКА',
                            desc: 'Delivery of natural farm products directly from the farms. Deliveries are made from protected areas of Russia, such as Karelia, Sakhalin.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        }

                    }
                }, {
                    id: '03',
                    preview: beloris,
                    logo: belorisLogo,
                    link: 'https://beloris.ru',
                    info: {
                        ru: {
                            type: 'Интернет магазин',
                            title: 'BELORIS',
                            desc: 'Интернет-магазин натуральной косметики и сопутствующих товаров федерального уровня. Стремясь к совершенству во всем, магазин Белорис предлагает не только высококачественную косметику, но и первоклассный сервис. Три склада по России, собственный отдел продаж в четырех регионах. Контроль качества реализуемой продукции по европейским стандартам.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        },
                        en: {
                            type: 'Online shop',
                            title: 'BELORIS',
                            desc: 'Online store of natural cosmetics and related products. Striving for perfection in everything, Beloris shop offers not only high-quality cosmetics but also first-class service. There are three warehouses in Russia and sales departments in four regions. Quality control of products sold according to European standards.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        }

                    }
                }, {
                    id: '04',
                    preview: gorodsad,
                    logo: gorodsadLogo,
                    link: 'http://vrngorodsad.ru',
                    info: {
                        ru: {
                            type: 'Промо',
                            title: 'ГОРОД-САД',
                            desc: 'Международный фестиваль садов и цветов «Город-Сад», 150 участников, 11 членов жюри из стран ЕС. Около 100 арт объектов и более 200 000 посетителей, жителей города и приезжих гостей, насыщенная программа выступлений и мастер-классов.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        },
                        en: {
                            type: 'Promo',
                            title: 'ГОРОД-САД',
                            desc: 'International Garden and Flower Festival Город—сад has 150 participants and 11 jury members from EU. It accommodates 100 art objects and more than 200,000 visitors. It includes performances and master classes.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        }

                    }
                }, {
                    id: '05',
                    preview: sinail,
                    logo: sinailLogo,
                    link: 'https://www.behance.net/gallery/64220969/Beauty-internet-shop',
                    info: {
                        ru: {
                            type: 'Интернет магазин',
                            title: 'SINAIL',
                            desc: 'Крупный игрок на региональном рынке в beauty-сфере, главной задачей которого является розничная продажа различных материалов для следующих косметических процедур: маникюр, педикюр, депиляция, дизайн ногтей и наращивание ногтей.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        },
                        en: {
                            type: 'Online shop',
                            title: 'SINAIL',
                            desc: 'A major player in the regional market in the beauty industry. The main task is the retail of various materials for cosmetic procedures: manicure, pedicure, depilation, and nail design.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        }

                    }
                }, {
                    id: '06',
                    preview: varibasi,
                    logo: varibasiLogo,
                    link: 'https://www.behance.net/gallery/57643883/Shop-Varibasi',
                    info: {
                        ru: {
                            type: 'Интернет магазин',
                            title: 'ВАРИБАСИ',
                            desc: 'Японский ресторан премиум класса, использует только самые свежие продукты высочайшего качества. Радушный прием, незабываемая атмосфера и высокие стандарты обслуживания – это то, что привлекает в «Варибаси», не меньше, чем превосходная кухня.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        },
                        en: {
                            type: 'Online shop',
                            title: 'Varibasi',
                            desc: 'A premium Japanese restaurant that uses only the freshest, highest quality products. There are a warm welcome, an enjoyable atmosphere and high standards of service. This is what attracts to Varibasi, no less than excellent cuisine.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        }

                    }
                }, {
                    id: '07',
                    preview: veranda,
                    logo: verandaLogo,
                    link: 'https://www.behance.net/gallery/57644367/Corporate-website-Veranda',
                    info: {
                        ru: {
                            type: 'Корпоративный',
                            title: 'VERANDA',
                            desc: 'Гастробар «Veranda на Ленинском» - это новое гастрономическое пространство в тихом районе города. Место, где можно поужинать с семьей, партнерами по бизнесу, коллегами или просто провести приятный вечер в уютной атмосфере под непринужденную музыку. Интерьер ресторана выполнен в стиле лаунж, упор делается на разнообразие в меню и оригинальность подачи блюд.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        },
                        en: {
                            type: 'Corporative',
                            title: 'VERANDA',
                            desc: 'Cuisine bar Veranda is a new gastronomic space in a quiet area of the city. A place where you can dine with family, business partners, colleagues or just spend a pleasant evening in a cozy atmosphere with casual music. The restaurant is designed in a lounge style. The emphasis is on the menu variety and the serving originality.',
                            icons: {
                                dev: true,
                                adp: true,
                                adv: true
                            }
                        }

                    }
                }
            ]
        }),
        computed: {
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
            animateShow() {
                decryptLetters(document.querySelector('.portfolio-title span'), 800);
                let timeline = anime.timeline();
                timeline
                    .add({
                        targets: document.querySelectorAll('.project__ref-cont'),
                        scaleX: [0, 1],
                        easing: 'linear',
                        elasticity: 0,
                        duration: 400
                    })
                    .add({
                        targets: document.querySelectorAll('.project__preview-front'),
                        scaleX: [1, 0],
                        easing: 'easeOutSine',
                        elasticity: 0,
                        duration: 400
                    })
                    .add({
                        targets: document.querySelectorAll('.project__gradient'),
                        scaleX: [0.9, 1],
                        scaleY: [0.7, 1],
                        opacity: [0, 1],
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 400,
                        duration: 600
                    })
                    .add({
                        targets: document.querySelectorAll('.project__count'),
                        opacity: [0, 1],
                        easing: 'linear',
                        elasticity: 0,
                        duration: 600,
                    })
                    .add({
                        targets: document.querySelectorAll('.project__logo'),
                        scaleX: [0, 1],
                        easing: 'easeOutSine',
                        elasticity: 0,
                        duration: 800,
                        offset: 1200
                    })
                    .add({
                        targets: document.querySelectorAll('.project__logo__before'),
                        scaleX: [0, 1],
                        easing: 'easeOutSine',
                        elasticity: 0,
                        duration: 400,
                        offset: 1200
                    })
                    .add({
                        targets: document.querySelectorAll('.project__logo__before'),
                        transformOrigin: '100% 0%',
                        duration: 100,
                        offset: 1850
                    })
                    .add({
                        targets: document.querySelectorAll('.project__logo__before'),
                        scaleX: [1, 0],
                        easing: 'easeOutSine',
                        elasticity: 0,
                        duration: 600,
                        offset: 1900
                    })
                    .add({
                        targets: document.querySelectorAll('.text-with-bg, .text-with-bg__line'),
                        scaleX: [0, 1],
                        easing: 'easeOutSine',
                        elasticity: 0,
                        duration: 400,
                        offset: 1200,
                    })
                    .add({
                        targets: document.querySelectorAll('.project-categories__item'),
                        opacity: [0, 1],
                        easing: 'linear',
                        elasticity: 0,
                        duration: 300,
                        offset: 1900,
                    })
                    .add({
                        targets: document.querySelectorAll('.project__type, .project__title'),
                        opacity: [0, 1],
                        easing: 'linear',
                        elasticity: 0,
                        duration: 200,
                        offset: 1200,
                    })
                    .add({
                        targets: document.querySelectorAll('.text-with-bg__front'),
                        scaleX: [1, 0],
                        easing: 'easeOutSine',
                        elasticity: 0,
                        duration: 500,
                        offset: 1600,
                        complete: () => {
                            this.parallax = new Parallax(document.querySelector('.container'), true)
                        }
                    })
            }
        },
        beforeRouteLeave(to, from, next) {
            this.$store.commit('prepareToNavigation');
            setTimeout(()=>next(),1000);
        },
        fetch({store}){
            store.commit('setCurrentPage', store.state.PAGES.PORTFOLIO);
        },
        mounted() {
            this.parallax = null;
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
    @import "../../assets/sass/portfolio/portfolio.sass"
    .project
        &__logo
            /*opacity: 0*/
            transform: rotateX(90deg)
            transform-style: preserve-3d
            perspective: 2000px
            transform-origin: left
            &__before
                position: absolute
                top: 20px
                right: -50px
                width: 213px
                max-width: 100%
                z-index: 4
                background: #000
                height: 109px
                transform-origin: left
                transform: scaleX(0)
        &__gradient
            transform-origin: right
            opacity: 0
        &__preview

            transform-origin: 0 0
            &-front
                background: #000
                display: flex
                width: 100%
                height: 100%
                position: absolute
                z-index: 3
                transform-origin: 100% 0
        &__ref-cont
            display: block
            position: relative
            transform: scaleX(0)
            transform-origin: 0 0
        &__right
            opacity: 1
        &__count
            opacity: 0
    .title span
        opacity: 0
    .technology-stack__info .text-with-bg__back
        top: 45%
        height: 20%
    .project-categories__item, .project__title, .project__type
        opacity: 0
</style>
