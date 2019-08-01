<template>
    <main class="company-main">

            <section class="company-first section-static-promo" ref="headCont">

                <div class="company-first__bg">
                    <video class="section__video" muted loop autoplay>
                        <source><source src="@/assets/video/company_1920.mp4" type='video/mp4'>
                    </video>
                </div>

                <div class="container">

                    <div class="years-line js-company-parallax-scroll" data-parallax-scroll-y-mod="7">

                        <span class="years-line__number">
                            <span>2</span><span>0</span><span>0</span><span>9</span>
                        </span>

                        <span class="years-line__line"></span>

                        <span class="years-line__number">
                            <span>2</span><span>0</span><span>1</span><span>9</span>
                        </span>

                    </div>

                    <h1 class="title title_white title_huge company-first__title js-company-parallax-scroll" data-parallax-scroll-y-mod="6">

                        <span class="lang-decrypt" :data-text="locale[lang].intro.title.line1">{{locale[lang].intro.title.line1}}</span>
                        <br>

                        <span class="lang-decrypt" :data-text="locale[lang].intro.title.line2">{{locale[lang].intro.title.line2}}</span>
                        <br>

                        <span class="lang-decrypt" :data-text="locale[lang].intro.title.line3">{{locale[lang].intro.title.line3}}</span>

                    </h1>

                    <section class="advantages">

                        <Ad />

                    </section>

                </div>

            </section>
            <div class="scrollable-container">
                <div class="scrollable-content">
                    <div class="team">

                        <section class="container">

                            <h2 class="title title_huge title_white team__title title_location_company lang-decrypt" :data-text="locale[lang].list.section1.title">{{locale[lang].list.section1.title}}&nbsp;</h2>

                            <div class="team__items-wrapper">


                                <Team
                                    :canvasId="'canvas_team_1'"
                                    :name="locale[lang].list.section1.team[0].name"
                                    :vacancy="locale[lang].list.section1.team[0].state"
                                    :img="'/img/1.png'"
                                    :morph="16"/>

                                <Team
                                    :canvasId="'canvas_team_2'"
                                    :name="locale[lang].list.section1.team[1].name"
                                    :vacancy="locale[lang].list.section1.team[1].state"
                                    :img="'/img/2.png'"
                                    :morph="20"/>

                                <Team
                                    :canvasId="'canvas_team_3'"
                                    :name="locale[lang].list.section1.team[2].name"
                                    :vacancy="locale[lang].list.section1.team[2].state"
                                    :img="'/img/3.png'"
                                    :morph="24"/>

                                <Team
                                    :canvasId="'canvas_team_4'"
                                    :name="locale[lang].list.section1.team[3].name"
                                    :vacancy="locale[lang].list.section1.team[3].state"
                                    :img="'/img/4.png'"
                                    :morph="11"/>

                                <Team
                                    :canvasId="'canvas_team_5'"
                                    :name="locale[lang].list.section1.team[4].name"
                                    :vacancy="locale[lang].list.section1.team[4].state"
                                    :img="'/img/5.png'"
                                    :morph="26"/>

                                <Team
                                    :canvasId="'canvas_team_6'"
                                    :name="locale[lang].list.section1.team[5].name"
                                    :vacancy="locale[lang].list.section1.team[5].state"
                                    :img="'/img/6.png'"
                                    :morph="13"/>

                                <Team
                                    :canvasId="'canvas_team_7'"
                                    :name="locale[lang].list.section1.team[6].name"
                                    :vacancy="locale[lang].list.section1.team[6].state"
                                    :img="'/img/7.png'"
                                    :morph="23"/>


                            </div>

                            <div class="company-job">

                                <span class="company-job__text lang-decrypt" :data-text="locale[lang].list.section1.job.line1">{{locale[lang].list.section1.job.line1}}</span>

                                <a class="company-job__link lang-decrypt asterica_link" href="mailto:Job@asterica.ru" :data-text="locale[lang].list.section1.job.line2">{{locale[lang].list.section1.job.line2}}</a>

                            </div>

                        </section>

                    </div>

                    <div class="technology-stack">

                        <div class="container">

                            <section class="technology-stack__info js-parallax-element" data-parallax-rotate-x="10" data-parallax-rotate-y="15">

                                <h2 class="title title_huge title_white title_location_company lang-decrypt" :data-text="locale[lang].list.section2.title">{{locale[lang].list.section2.title}}</h2>

                                <section class="technology-stack__section">

                                    <h2 class="title title_white title_type_subtitle technology-stack__subtitle lang-decrypt" :data-text="locale[lang].list.section2.tech.title" >{{locale[lang].list.section2.tech.title}}</h2>

                                    <p class="text text_white text-with-bg technology-stack__text">

                                        <span class="text-with-bg__line">
                                            <span class="text-with-bg__front"></span>
                                            <span class="text-with-bg__back"></span>
                                            <span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].list.section2.tech.line1">
                                                {{locale[lang].list.section2.tech.line1}}
                                            </span>
                                        </span>

                                        <span class="text-with-bg__line">
                                            <span class="text-with-bg__front"></span>
                                            <span class="text-with-bg__back"></span>
                                            <span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].list.section2.tech.line2">
                                                {{locale[lang].list.section2.tech.line2}}
                                            </span>
                                        </span>

                                    </p>

                                </section>

                                <section class="technology-stack__section">

                                    <h2 class="title title_white title_type_subtitle technology-stack__subtitle lang-decrypt" :data-text="locale[lang].list.section2.meth.title">{{locale[lang].list.section2.meth.title}}</h2>

                                    <p class="text text_white text-with-bg technology-stack__text">

                                        <span class="text-with-bg__line">
                                            <span class="text-with-bg__front"></span>
                                            <span class="text-with-bg__back"></span>
                                            <span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].list.section2.meth.line1">
                                                {{locale[lang].list.section2.meth.line1}}
                                            </span>
                                        </span>

                                    </p>

                                </section>

                                <section class="technology-stack__section">

                                    <h2 class="title title_white title_type_subtitle technology-stack__subtitle lang-decrypt" :data-text="locale[lang].list.section2.codebase.title">{{locale[lang].list.section2.codebase.title}}</h2>

                                    <p class="text text_white text-with-bg technology-stack__text">

                                        <span class="text-with-bg__line">
                                            <span class="text-with-bg__front"></span>
                                            <span class="text-with-bg__back"></span>
                                            <span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].list.section2.codebase.line1">
                                                {{locale[lang].list.section2.codebase.line1}}
                                            </span>
                                        </span>

                                        <span class="text-with-bg__line">
                                            <span class="text-with-bg__front"></span>
                                            <span class="text-with-bg__back"></span>
                                            <span class="text-with-bg__content lang-decrypt" :data-text="locale[lang].list.section2.codebase.line2">
                                                {{locale[lang].list.section2.codebase.line2}}
                                            </span>
                                        </span>

                                    </p>

                                </section>

                            </section>

                            <div class="technology-stack__images">

                                <img class="technology-stack__image-1" src="~@/assets/img/test/squirt_mask.png" alt="">

                                <!--<img class="technology-stack__image-2" src="/img/company/stack/stack-chelik.png" alt="">-->



                            </div>

                        </div>

                    </div>

                    <div class="reviews">

                        <section class="container">

                            <h2 class="title title_huge title_white title_location_company lang-decrypt" :data-text="locale[lang].list.section3.title">{{locale[lang].list.section3.title}}</h2>

                            <div class="reviews__slider reviews-slider">

                                <div class="reviews-slider__images-wrapper">

                                    <div class="reviews-slider__image">

                                        <div class="reviews-slider__image-bg"></div>

                                        <div class="reviews-slider__photo-track">

                                            <div class="reviews-slider__photo-item" :style="{ backgroundImage: 'url(' + el.photo +')' }" v-for="el in reviews" :key="el.id"></div>

                                        </div>

                                    </div>

                                    <div class="reviews-slider__logo">

                                        <div class="reviews-slider__logo-bg"></div>

                                        <div class="reviews-slider__logo-track">

                                            <div class="reviews-slider__logo-item" :style="{ backgroundImage: 'url(' + el.logo +')' }" v-for="el in reviews" :key="el.id"></div>

                                        </div>

                                    </div>

                                </div>

                                <div class="reviews-slider__info">

                                    <img class="reviews-slider__quotes" src="~@/assets/img/company/quote.png" alt="">
                                    <div class="reviews-slider__text">

                                        <div class="reviews-slider__text-track">

                                            <div class="reviews-slider__text-item" v-for="el in reviews" :key="el.id">
                                                <span ref="moreLessText" class="moreText">
                                                      <span ref="sliced" class="lang-static" :data-text="el[lang].text">{{el[lang].text}}</span>
                                                      <div ref="moreBtn" class="more_less_btn asterica_link lang-static" v-on:click="showMore" :data-text="el[lang].btn">{{el[lang].btn}}</div>
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="reviews-slider__person">

                                        <div class="reviews-slider__person-track">

                                            <div class="reviews-slider__person-item" v-for="el in reviews" :key="el.id">
                                                <div class="reviews-slider__person-name lang-decrypt" :data-text="el[lang].name">{{el[lang].name}}</div>
                                                <div class="reviews-slider__person-position lang-decrypt" :data-text="el[lang].position">{{el[lang].position}}</div>
                                            </div>


                                        </div>

                                    </div>

                                    <div class="reviews-slider__action">

                                        <button class="reviews-slider__button js-reviews-prev asterica_link" v-on:click="addMoreLessBtn">

                                            <svg class="reviews-slider__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                                <path d="M189.796 705.548c9.002 9.002 21.005 9.002 30.008 0s9.002-21.005 0-27.007l-147.036-147.036h930.228c12.003 0 21.005-9.002 21.005-18.004 0-12.003-9.002-21.005-21.005-21.005h-930.228l144.035-144.035c9.002-9.002 9.002-21.005 0-30.008s-21.005-9.002-30.008 0l-180.044 180.044c-9.002 9.002-9.002 21.005 0 27.007l183.045 180.044z"></path>
                                            </svg>

                                        </button>

                                        <div class="reviews-slider__numbers">

                                            <span class="reviews-slider__current">01</span>

                                            <span class="reviews-slider__all">/3</span>

                                        </div>

                                        <button class="reviews-slider__button js-reviews-next asterica_link" v-on:click="addMoreLessBtn">

                                            <svg class="reviews-slider__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                                <path d="M834.204 705.548c-9.002 9.002-21.005 9.002-30.008 0s-9.002-21.005 0-27.007l147.036-147.036h-930.228c-12.003 0-21.005-9.002-21.005-18.004 0-12.003 9.002-21.005 21.005-21.005h930.228l-144.035-144.035c-9.002-9.002-9.002-21.005 0-30.008s21.005-9.002 30.008 0l180.044 180.044c9.002 9.002 9.002 21.005 0 27.007l-183.045 180.044z"></path>
                                            </svg>

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </section>

                    </div>

                    <div ref="lastSec" class="request-form" :class="{'animate':playLastSection}">

                        <section class="container">

                            <h2 class="title title_white title_huge title_location_company lang-decrypt" :data-text="locale[lang].list.section4.title">{{locale[lang].list.section4.title}}</h2>

                            <p class="request-form__desc text-with-bg">
                                <span class="text-with-bg__line">
                                    <span class="text-with-bg__back"></span>
                                    <span class="text-with-bg__front"></span>
                                    <span class="text-with-bg__line lang-decrypt" :data-text="locale[lang].list.section4.line1">{{locale[lang].list.section4.line1}}</span>
                                </span>
                                <br>
                                <span class="text-with-bg__line">
                                    <span class="text-with-bg__back"></span>
                                    <span class="text-with-bg__front"></span>
                                    <span class="text-with-bg__line lang-decrypt" :data-text="locale[lang].list.section4.line2">{{locale[lang].list.section4.line2}}</span>
                                </span>
                            </p>

                            <img class="request-form__paint" src="~@/assets/img/sections/section5/map.jpg" alt="">

                            <form class="form company-form" action="">

                                <h2 class="form__title lang-decrypt" :data-text="locale[lang].list.section4.form.title">{{locale[lang].list.section4.form.title}}</h2>

                                <div class="form__inputs">

                                    <TextBox block-class="form" :use-decrypt="true" :title="locale[lang].list.section4.form.box1" v-model="form.info.name"/>
                                    <TextBox class="contact-data__email" block-class="form" :use-decrypt="true" :title="locale[lang].list.section4.form.box2" v-model="form.info.email"/>
                                    <TextBox class="phone_validate"  block-class="form" :use-decrypt="true" :title="locale[lang].list.section4.form.box3" v-model="form.info.phone"/>

                                </div>
                                <!--FORM ERRORS -->
                                <p v-if="errors.length" style="color: #fff;" class="lang-static">
                                <b>{{locale[lang].list.section4.form.errorsLine}}</b>
                                   <ul>
                                     <li v-for="error in errors" >{{ error }}</li>
                                   </ul>
                                </p>
                                <button class="button button_size_normal button_white-transparent button_with-icon-right request-form__send" type="submit" @click.prevent="submitForm">

                                    <span class="button__background"></span>

                                    <span class="button__text lang-decrypt asterica_link" :data-text="locale[lang].list.section4.form.submit">{{locale[lang].list.section4.form.submit}}</span>

                                    <svg class="button__icon button__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32">
                                        <path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path>
                                    </svg>

                                </button>

                                <button class="button button_size_normal button_blue button_with-icon-right js-open-brief request-form__brief" type="button" v-if="false" >

                                    <span class="button__text">Заполнить бриф</span>

                                    <svg class="button__icon button__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32">
                                        <path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path>
                                    </svg>

                                </button>

                            </form>

                            <div class="contacts">

                                <div class="text-with-bg">

                                    <span class="text-with-bg__line">

                                        <span class="text-with-bg__front"></span>

                                        <span class="text-with-bg__back"></span>

                                        <span class="text-with-bg__content contacts__item">

                                            <span class="lang-decrypt" :data-text="locale[lang].list.section4.contacts.phone">{{locale[lang].list.section4.contacts.phone}}</span>

                                            <span class="contacts__delimiter"></span>

                                            <a class="asterica_link" href="tel:+7(473)-300-39-27">+7 (473) 300 39 27</a>

                                        </span>

                                    </span>

                                    <span class="text-with-bg__line">

                                        <span class="text-with-bg__front"></span>

                                        <span class="text-with-bg__back"></span>

                                        <span class="text-with-bg__content contacts__item">

                                            <span class="lang-decrypt" :data-text="locale[lang].list.section4.contacts.phone">{{locale[lang].list.section4.contacts.phone}}</span>

                                            <span class="contacts__delimiter"></span>

                                            <a class="asterica_link" href="mailto:info@asterica.ru">info@asterica.ru</a>

                                        </span>

                                    </span>

                                    <span class="socials">

                                        <a class="socials__item asterica_link" href="https://vk.com/asterica_web_studio">

                                            <svg class="socials__icon socials__vk" viewBox="0 0 25 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.866,11.742 C24.836,11.682 24.807,11.633 24.781,11.593 C24.348,10.881 23.519,10.007 22.295,8.970 L22.269,8.947 L22.256,8.935 L22.243,8.923 L22.230,8.923 C21.675,8.440 21.324,8.116 21.176,7.950 C20.907,7.633 20.846,7.313 20.994,6.988 C21.098,6.743 21.488,6.225 22.165,5.434 C22.521,5.015 22.803,4.679 23.011,4.425 C24.512,2.606 25.163,1.443 24.963,0.936 L24.886,0.818 C24.834,0.747 24.699,0.682 24.483,0.622 C24.265,0.563 23.988,0.553 23.649,0.593 L19.901,0.616 C19.840,0.597 19.754,0.598 19.641,0.622 C19.528,0.646 19.471,0.658 19.471,0.658 L19.406,0.688 L19.355,0.723 C19.311,0.747 19.263,0.788 19.211,0.848 C19.160,0.907 19.116,0.976 19.081,1.055 C18.673,2.013 18.209,2.903 17.689,3.726 C17.368,4.216 17.073,4.641 16.804,5.001 C16.535,5.361 16.309,5.626 16.127,5.796 C15.945,5.967 15.780,6.103 15.632,6.206 C15.485,6.309 15.372,6.352 15.294,6.336 C15.216,6.320 15.142,6.304 15.073,6.289 C14.951,6.218 14.853,6.121 14.780,5.998 C14.706,5.875 14.656,5.721 14.630,5.535 C14.604,5.349 14.589,5.189 14.585,5.054 C14.581,4.920 14.582,4.730 14.591,4.485 C14.600,4.240 14.604,4.074 14.604,3.986 C14.604,3.686 14.611,3.360 14.624,3.007 C14.637,2.655 14.647,2.376 14.656,2.171 C14.665,1.965 14.669,1.747 14.669,1.518 C14.669,1.289 14.654,1.108 14.624,0.978 C14.594,0.848 14.548,0.721 14.487,0.598 C14.426,0.476 14.337,0.381 14.220,0.313 C14.103,0.246 13.958,0.193 13.784,0.153 C13.325,0.059 12.739,0.007 12.027,-0.001 C10.413,-0.017 9.376,0.078 8.917,0.284 C8.734,0.371 8.570,0.490 8.422,0.640 C8.266,0.814 8.244,0.909 8.357,0.924 C8.878,0.996 9.246,1.166 9.463,1.435 L9.541,1.577 C9.602,1.680 9.663,1.862 9.724,2.123 C9.784,2.384 9.823,2.673 9.841,2.990 C9.884,3.567 9.884,4.062 9.841,4.473 C9.797,4.884 9.756,5.205 9.717,5.434 C9.678,5.664 9.619,5.850 9.541,5.992 C9.463,6.134 9.411,6.221 9.385,6.253 C9.359,6.285 9.337,6.304 9.320,6.312 C9.207,6.352 9.090,6.372 8.969,6.372 C8.847,6.372 8.700,6.316 8.526,6.206 C8.353,6.095 8.173,5.942 7.986,5.749 C7.799,5.555 7.589,5.284 7.355,4.936 C7.121,4.587 6.878,4.176 6.626,3.702 L6.418,3.357 C6.288,3.136 6.110,2.813 5.884,2.390 C5.659,1.967 5.459,1.557 5.286,1.162 C5.216,0.996 5.112,0.869 4.973,0.782 L4.908,0.746 C4.865,0.715 4.795,0.681 4.700,0.646 C4.604,0.610 4.505,0.584 4.401,0.568 L0.834,0.592 C0.470,0.592 0.223,0.667 0.093,0.818 L0.041,0.889 C0.014,0.928 0.001,0.991 0.001,1.078 C0.001,1.166 0.027,1.272 0.079,1.399 C0.600,2.515 1.166,3.590 1.778,4.627 C2.389,5.663 2.921,6.498 3.372,7.130 C3.823,7.763 4.283,8.361 4.752,8.923 C5.220,9.484 5.531,9.844 5.682,10.003 C5.834,10.161 5.953,10.280 6.040,10.358 L6.366,10.643 C6.574,10.833 6.880,11.061 7.283,11.326 C7.687,11.591 8.134,11.852 8.624,12.109 C9.114,12.366 9.684,12.576 10.335,12.738 C10.986,12.900 11.619,12.966 12.235,12.934 L13.732,12.934 C14.036,12.910 14.266,12.823 14.422,12.673 L14.474,12.613 C14.509,12.566 14.541,12.493 14.571,12.394 C14.602,12.295 14.617,12.186 14.617,12.068 C14.608,11.728 14.636,11.421 14.701,11.148 C14.766,10.875 14.840,10.670 14.923,10.531 C15.005,10.392 15.099,10.276 15.202,10.181 C15.307,10.086 15.381,10.029 15.424,10.009 C15.467,9.989 15.502,9.976 15.528,9.968 C15.736,9.904 15.981,9.965 16.263,10.152 C16.546,10.337 16.810,10.567 17.057,10.839 C17.305,11.113 17.602,11.420 17.949,11.760 C18.296,12.100 18.600,12.353 18.860,12.519 L19.120,12.661 C19.294,12.756 19.519,12.843 19.797,12.923 C20.074,13.002 20.317,13.021 20.526,12.982 L23.858,12.934 C24.187,12.934 24.443,12.885 24.625,12.786 C24.808,12.687 24.916,12.578 24.951,12.460 C24.986,12.341 24.987,12.207 24.957,12.056 C24.927,11.906 24.896,11.801 24.866,11.742 Z"/>
                                            </svg>
                                        </a>

                                        <a class="socials__item asterica_link" href="https://www.facebook.com/astericaW/">

                                            <svg class="socials__icon socials__fb" viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M9.7,6.9H6.7v-2C6.9,3.1,10,3.4,10,3.4l0-0.1l0,0v-3h0v0h0c-0.1,0-6.1-1.4-7.3,3.1c0,0,0,0,0,0c0,0,0,0,0,0 C2.5,3.9,2.5,6.5,2.5,6.9H0v3.5h2.7v9.5h3.9v-9.5h3L10,6.9L9.7,6.9z" />
                                            </svg>

                                        </a>

                                        <a class="socials__item asterica_link" target="_blank" href="https://www.behance.net/stooder">

                                            <svg class="socials__icon socials__be" viewBox="0 0 22 13" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.873,1.839 L14.359,1.839 L14.359,0.539 L19.873,0.539 L19.873,1.839 L19.873,1.839 ZM10.688,7.171 C11.044,7.695 11.222,8.330 11.222,9.076 C11.222,9.847 11.021,10.539 10.614,11.150 C10.354,11.555 10.032,11.896 9.645,12.171 C9.209,12.489 8.693,12.707 8.100,12.824 C7.504,12.940 6.860,13.000 6.166,13.000 L-0.000,13.000 L-0.000,-0.000 L6.613,-0.000 C8.279,0.025 9.461,0.484 10.159,1.384 C10.578,1.936 10.785,2.599 10.785,3.369 C10.785,4.164 10.575,4.800 10.152,5.284 C9.917,5.554 9.570,5.801 9.110,6.023 C9.806,6.265 10.335,6.646 10.688,7.171 ZM3.158,5.124 L6.055,5.124 C6.651,5.124 7.132,5.017 7.503,4.802 C7.873,4.588 8.058,4.207 8.058,3.659 C8.058,3.055 7.813,2.654 7.322,2.461 C6.901,2.326 6.361,2.257 5.706,2.257 L3.158,2.257 L3.158,5.124 ZM8.337,8.890 C8.337,8.214 8.046,7.748 7.466,7.497 C7.141,7.355 6.684,7.282 6.097,7.277 L3.158,7.277 L3.158,10.741 L6.051,10.741 C6.646,10.741 7.106,10.667 7.438,10.513 C8.037,10.230 8.337,9.691 8.337,8.890 ZM21.919,6.775 C21.985,7.200 22.015,7.817 22.003,8.624 L14.862,8.624 C14.901,9.560 15.242,10.214 15.887,10.589 C16.276,10.824 16.748,10.938 17.301,10.938 C17.883,10.938 18.358,10.798 18.724,10.511 C18.923,10.359 19.099,10.143 19.250,9.872 L21.868,9.872 C21.799,10.425 21.484,10.985 20.918,11.556 C20.040,12.461 18.810,12.915 17.229,12.915 C15.924,12.915 14.773,12.532 13.774,11.769 C12.779,11.003 12.279,9.761 12.279,8.038 C12.279,6.423 12.728,5.187 13.628,4.326 C14.532,3.464 15.699,3.035 17.137,3.035 C17.989,3.035 18.758,3.179 19.443,3.470 C20.127,3.761 20.691,4.219 21.136,4.849 C21.539,5.404 21.798,6.045 21.919,6.775 ZM19.342,7.018 C19.294,6.370 19.067,5.881 18.657,5.546 C18.251,5.211 17.743,5.042 17.137,5.042 C16.478,5.042 15.969,5.222 15.607,5.576 C15.243,5.929 15.016,6.410 14.923,7.018 L19.342,7.018 L19.342,7.018 Z"/>
                                            </svg>

                                        </a>

                                    </span>

                                </div>

                            </div>

                        </section>

                    </div>


                </div>
                <div class="root-scrollable" :style="{backgroundImage: `url(${bg})`}"></div>
            </div>
            <div ref="accepter" class="accept_form_text">СПАСИБО ЗА ЗАЯВКУ, МЫ УЖЕ НАЧАЛИ ЕЁ ОБРАБАТЫВАТЬ. СКОРО ПЕРЕЗВОНИМ!</div>
        </main>
</template>

<script>
    import vgii from '@/assets/img/company/reviews/vgii.png'
    import beloris from '@/assets/img/company/reviews/beloris.jpg'
    import sinail from '@/assets/img/company/reviews/sinail.jpg'
    import vgiiLogo from '@/assets/img/company/reviews/1vgii.jpg'
    import belorisLogo from '@/assets/img/portfolio/project/1Beloris.jpg'
    import sinailLogo from '@/assets/img/portfolio/project/1SiNail.jpg'
    import bg from '@/assets/img/company/bg.jpg';
    import squirt from '@/assets/img/test/squirt.png';
    import squirtMask from '@/assets/img/test/squirt_mask.png';
    import mapMask from '@/assets/img/test/map_mask.png';
    import {companyScrollAnimations, companyScrollParallax, parallaxScroll} from "@/assets/js/company";
    import {LineEffect} from "@/assets/js/lineEffect";
    import {decryptLetters} from "@/assets/js/animateFunctions";
    import {previewSlider} from "@/assets/js/previewSlider";
    import TextBox from "../../components/TextBox";
    import Team from "../../components/company/Team";
    import Ad from "../../components/company/AdGroup";
    import axios from 'axios';
    import {staticTranslate} from "../../assets/js/animateFunctions";

    export default {
      head () {
        return {
           title: 'О компании',
           meta:[
              { hid: 'description', name: 'description', content: 'О web студии ASTERICA' }
           ]
         }
       },
        components: {TextBox, Team, Ad},
        data: () => ({
            errors: [],
            emailValidator: null,
            playLastSection: false,
            form: {
              types: [],
              budget: '',
              task: '',
              files: [],
              info: {
                  name: '',
                  email: '',
                  phone: '',
                  company: ''
              }
            },
            canvasId: 'canvasBgLine',
            canvasId0: 'canvasBgLine0',
            locale: {
                ru: {
                    intro: {
                        title: {
                            line1: 'СОЗДАЕМ ГРАМОТНЫЕ',
                            line2: 'DIGITAL - РЕШЕНИЯ',
                            line3: 'ДЛЯ БИЗНЕСА'
                        },
                        caption1: {
                            line1: 'В рейтинге SEO компаний',
                            line2: 'Центрального Чернозема'
                        },
                        caption2: {
                            line1: 'В рейтинге веб - студий',
                            line2: 'Центрального Чернозема'
                        },
                        caption3: {
                            line1: 'Финалисты интернет ',
                            line2: '- премии РИФ ВОРОНЕЖ 2017'
                        },
                        caption4: {
                            line1: 'Бизнес - партнер',
                            line2: ' 1С Битрикс'
                        },
                        caption5: {
                            line1: 'Сертифицированное ',
                            line2: ' агентство Яндекс.Директ'
                        },
                        caption6: {
                            line1: 'Сертифицированное ',
                            line2: ' агентство Google.AdWords'
                        }
                    },
                    list: {
                        section1: {
                            title: 'Команда мечты',
                            team: [
                                {
                                    name: 'Максим Фонов',
                                    state: '— Основатель'
                                },{
                                    name: 'Александр Усталов',
                                    state: '— Креативный директор'
                                },{
                                    name: 'Александр Насонов',
                                    state: '— Frontend разработчик'
                                },{
                                    name: 'Валентина Гурина',
                                    state: '— Контент-менеджер'
                                },{
                                    name: 'Никита Чепайкин',
                                    state: '— Дизайнер'
                                },{
                                    name: 'Васильев Илья',
                                    state: '— Frontend разработчик'
                                },{
                                    name: 'Даце Арамина',
                                    state: '— Дизайнер'
                                }
                            ],
                            job: {
                                line1: 'Ищем талантливых, крутых ребят, а также стажеров в команду!',
                                line2: 'Пишите на Job@asterica.ru'
                            }
                        },
                        section2: {
                            title: 'Что умеем',
                            tech: {
                                title: 'Технологии:',
                                line1: '1С «Предприятие, Управление Торговлей», «МойСклад», «АтолОнлайн», «Сбербанк»,',
                                line2: '«Яндекс.Касса», «Criteo», «Яндекс,Маркет/GoogleMerchant»',
                            },
                            meth: {
                                title: 'Методологии разработки:',
                                line1: 'Waterfall, SCRUM, KANBAN'
                            },
                            codebase: {
                                title: 'Стек технологий:',
                                line1: 'React \\ Redux, 1С Bitrix, Symfony \\ Laravel, Git, MySQL, Gulp, Webpack, WebGl, UX/UI, Motion дизайн,',
                                line2: 'Adobe, 3D графика, Figma, Brand дизайн'
                            }
                        },
                        section3: {
                            title: 'Отзывы'
                        },
                        section4: {
                            title: 'Оставить заявку',
                            line1: 'Оставьте заявку , чтобы мы могли с вами связаться, либо',
                            line2: 'звоните по данному телефону: +7 (473) 300 39 27',
                            form: {
                                title: 'Обсудить проект',
                                box1: 'Имя',
                                box2: 'Email',
                                box3: 'Телефон',
                                submit: 'Отправить',
                                inputErrName: 'Требуется указать имя',
                                inputErrMail: 'Требуется указать email',
                                inputErrPhone: 'Требуется указать телефон',
                                errorsLine: 'Пожалуйста исправьте указанные ошибки:',
                            },
                            contacts: {
                                phone: 'Наш телефон',
                                email: 'Наш Email'
                            }
                        }
                    }
                },
                en: {

                    intro: {
                        title: {
                            line1: 'WE CREATE COMPETENT',
                            line2: 'DIGITAL - SOLUTIONS',
                            line3: 'FOR BUSINESS'
                        },
                        caption1: {
                            line1: 'In the ranking of SEO companies',
                            line2: 'Central Russia'
                        },
                        caption2: {
                            line1: 'In the ranking of web studies',
                            line2: 'Central Russia'
                        },
                        caption3: {
                            line1: 'Finalists of ',
                            line2: '- RIF VRN 2017'
                        },
                        caption4: {
                            line1: ' Business partner',
                            line2: ' 1С Битрикс'
                        },
                        caption5: {
                            line1: 'Certified ',
                            line2: ' agency Яндекс.Директ'
                        },
                        caption6: {
                            line1: 'Certified ',
                            line2: ' agency Google.AdWords'
                        }
                    },
                    list: {
                        section1: {
                            title: 'Dream team',
                            team: [
                                {
                                    name: 'Maxim Fonov',
                                    state: '— Founder'
                                },{
                                    name: 'Alexander Ustalov',
                                    state: '— Creative director'
                                },{
                                    name: 'Alexander Nasonov',
                                    state: '— Frontend developer'
                                },{
                                    name: 'Valentina Gurina',
                                    state: '— Content manager'
                                },{
                                    name: 'Nikita Chepaykin',
                                    state: '— Designer'
                                },{
                                    name: 'Vasilev Ilya',
                                    state: '— Frontend developer'
                                },{
                                    name: 'Dace Aramina',
                                    state: '— Designer'
                                }
                            ],
                            job: {
                                line1: 'We are searching talanted, cool guys, and trainees!',
                                line2: 'Write us Job@asterica.ru'
                            }
                        },
                        section2: {
                            title: 'Our skills',
                            tech: {
                                title: 'Web Integration:',
                                line1: '1С «Predpriyatie, Upravlenie Torgovley», «Moysklad», «AtolOnline», «Sberbank»,',
                                line2: '«Yandex.Kassa», «Criteo», «Yandex,Market/GoogleMerchant»',
                            },
                            meth: {
                                title: 'Development methodologies:',
                                line1: 'Waterfall, SCRUM, KANBAN'
                            },
                            codebase: {
                                title: 'Technology stack:',
                                line1: 'React \\ Redux, 1С Bitrix, Symfony \\ Laravel, Git, MySQL, Gulp, Webpack, WebGl, UX/UI, Motion design,',
                                line2: 'Adobe, 3d graphics , Figma, Brand design'
                            }
                        },
                        section3: {
                            title: 'Reviews'
                        },
                        section4: {
                            title: 'Submit your application',
                            line1: 'submit your application and we will call to you, or',
                            line2: 'call to us: +7 (473) 300 39 27',
                            form: {
                                title: 'Discuss the project',
                                box1: 'Name',
                                box2: 'Email',
                                box3: 'Phone',
                                submit: 'Submit',
                                inputErrName: 'Name is required',
                                inputErrMail: 'Email is required',
                                inputErrPhone: 'Phone number is required',
                                errorsLine: 'Please fix specified errors:',
                            },
                            contacts: {
                                phone: 'Phone',
                                email: 'Email'
                            }
                        }
                    }
                }
            },
            bg,
            reviews: [
                {
                    id: 1,
                    photo: beloris,
                    logo: belorisLogo,
                    ru: {
                        text:  'Интернет-магазин косметики «Beloris» выражает особую благодарность веб-студии «Asterica» за редизайн сайта с многофункциональным и понятным в использовании интерфейсом, стильным дизайном. Пользователи легко и интуитивно могут выполнять все необходимые действия для совершения покупки. Оформление сайта легкое, воздушное и удобно для восприятия целевой аудиторией.' +
                            'Благодаря профессионализму и слаженной работе команды, в поставленные сроки удалось провести интеграцию с 1С всей товарной базы, разработать параметрический поиск и полностью переработать структуру каталога.' +
                            'Мы также признательны веб-студии «Asterica» за качественную работу по продвижению нашего сайта. Специалисты подключили контекстную рекламу по более чем 40 тысячам объявлений, полностью взяли SEO продвижение на себя. В итоге только за первый квартал на сайте увеличилась посещаемость в 23%, а конверсия сайта возросла на 14%.' +
                            'Мы ценим ответственность и взаимопонимание с вашей стороны. Качество работы и оперативный отклик на пожелания заказчика, позволяют нам быть уверенными в надёжном сотрудничестве с вами на долгие годы.',
                        name: 'Юлия Хлюпкина',
                        position: 'Маркетолог',
                        btn: 'развернуть'
                    },
                    en: {
                        text: 'The online cosmetics store Beloris is especially grateful to the Asterica web studio for the site redesign with a multi-functional and user-friendly interface. Users can intuitively perform all the necessary actions to make a purchase. The design is light and convenient for perception by the target audience.' +
                            'Thanks to the professionalism and well-coordinated work of the team. It was possible to integrate the base with 1C, develop a parametric search and completely rework the structure.' +
                            'We are also grateful to the web studio Asterica for the good work in promoting our website. Experts have connected contextual advertising on more than 40 thousand ads, fully took SEO promotion. As a result, in the first quarter, traffic on the site increased by 23%, and site conversion increased by 14%.' +
                            'We appreciate the responsibility and mutual understanding.',
                        name: 'Julia Khlyupkina',
                        position: 'Marketing specialist',
                        btn: 'show more'
                    }

                },{
                    id: 2,
                    photo: sinail,
                    logo: sinailLogo,
                    ru: {
                        text: 'Работаем с компанией “Asterica” с января 2018 года, за несколько месяцев ребята сделали полный редизайн сайта Sinail.ru и взяли полностью на себя техническую поддержку сайта после запуска.\n' +
                            'Ребята молодцы, отлично знают свое дело, компетентные специалисты, на все задачи реагируют оперативно. Привели наш сайт в порядок. Очень нравится момент индивидуального подхода - все наши "хотелки" грамотно анализируют и предлагают наиболее удобные варианты, дабы избежать лишних трат нашего бюджета и времени. \n' +
                            'Отдельная благодарность project-менеджеру Герману за терпение и понимание:).\n' +
                            'С уважением, отдел маркетинга магазина «Sinail».\n',
                        name: 'Татьяна Мацаева',
                        position: 'Маркетолог',
                        btn: 'развернуть'
                    },
                    en: {
                        text: 'We have been working with this company since January 2018. Well done guys, competent specialists, respond to all tasks promptly. I really like the moment of an individual approach. Our Wishlist had been competently analyzed. Then they offered the most convenient options in order to avoid extra expenses for the budget and time. Special thanks to the manager Herman Lyshkov for patience and understanding.',
                        name: 'Tatjana Matsaeva',
                        position: 'Marketing specialist',
                        btn: 'show more'
                    }
                },{
                    id: 3,
                    photo: vgii,
                    logo: vgiiLogo,
                    ru: {
                        text: 'Наше сотрудничество с данной компанией началось в 2014 году. Ребята создали для нашего института ресурс, на котором удалось разместить огромный массив данных: различные регламенты, инструкции, тысячи информационных таблиц, документов, файлов. Структурировать и сделать все это легкодоступным пользователю – не простая задача.\n' +
                            'За 4 года сотрудничества были реализованы все наши задачи по сайту, в том числе:\n' +
                            '-в сжатые сроки провели синхронизацию с виртуальной обучающей средой Moodle, \n' +
                            '-провели интеграцию со сторонним программным обеспечением , который позволяет теперь обновлять данные (таблицы, информацию, файлы, документы) на сайте, не копаясь в административной панели.\n' +
                            'С удовольствием продолжаем совместно работать над развитием проекта. От лица всего института говорю огромное спасибо, удачи, и успешного развития студии “Asterica”.',
                        name: 'Скрынникова Ольга',
                        position: 'Ректор ВГИИ',
                        btn: 'развернуть'
                    },
                    en: {
                        text: 'Our cooperation with this company started in 2014. Guys made a web resource for our university, on which it was possible to place a huge data array: various regulations, guides, thousands of informative tables, documents and files. It is not an easy task to structure all information and make it user friendly. In 4 years of cooperation, all of our website tasks have been implemented, in count: synchronization with the Moodle virtual learning environment; -integration with third-party software, that allows to update data (tables, information, files, documents) on the website, without digging into the administrator panel. It’s our pleasure to continue working on our project development. Large gratitude and from all our university and best wishes for successful Asterica project development.',
                        name: 'Skrinnikova Olga',
                        position: 'Rector of VGII',
                        btn: 'show more'
                    }
                },
            ]
        }),
        computed: {
            ch(){
                return this.$store.state.LineEffectBg.getCanvasRect().height
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
                        Array.from(title).forEach((el, i) => {
                            decryptLetters(el, 300)
                        });
                        Array.from(static_translate).forEach(el => {
                            staticTranslate(el)
                        });
                            this.addMoreLessBtn()
                    }, 50)
                }
            }
        },
        methods: {
          chechForm(){
            document.querySelector('.contact-data__email .form__input').addEventListener('input', (e) => {
             this.emailValidator = validateEmail(e.target.value)
             function validateEmail(email) {
                 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                 return re.test(String(email).toLowerCase());
              }
            });
             document.querySelector('.phone_validate .input').addEventListener('input', function (e) {
               var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
               e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
             });
          },
            submitForm(){
            this.errors = [];
              if (!this.form.info.name) {
                this.errors.push(this.locale[this.lang].list.section4.form.inputErrName);
              }
              if (!this.form.info.phone) {
                this.errors.push(this.locale[this.lang].list.section4.form.inputErrPhone);
              }
              if (this.emailValidator==false) {
                this.errors.push(this.locale[this.lang].list.section4.form.inputErrMail);
              }
              if (this.form.info.name && this.emailValidator==true && this.form.info.phone) {
                var tl = new TimelineMax()
                    tl.fromTo(this.$refs.accepter,0.55,{y:40, opacity: 0, visibility: 'hidden'},{y:0,opacity: 1, visibility: 'visible'})
                    tl.to(this.$refs.accepter,0.35,{y:-40,opacity: 0},2.5)
                    tl.set(this.$refs.accepter,{visibility: 'hidden'})
                let fd = new FormData();
                fd.append('types', JSON.stringify(this.form.types) || 'не заполнено');
                fd.append('file', undefined);
                fd.append('budget', this.form.budget || 'не заполнено');
                fd.append('task', this.form.task || 'не заполнено');
                fd.append('name', this.form.info.name || 'не заполнено');
                fd.append('email', this.form.info.email || 'не заполнено');
                fd.append('phone', this.form.info.phone || 'не заполнено');
                fd.append('company', this.form.info.company || 'не заполнено');
                  this.form.info.name = ''
                  this.form.info.email = ''
                  this.form.info.phone = ''

                axios.post('/api/mail', fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
              }
            },
            addMoreLessBtn(){
                  var $self = this
                  var elGroup = this.$refs.sliced
                  elGroup.forEach(function(el) {
                     $self.splitBigText(el)
                 });
            },
            splitBigText(el){
              var btn = this.$refs.moreBtn
              if(el.textContent.length>350){
                  var newText = el.textContent.slice(0,350)
                  el.textContent = newText + '... '
              }
            },
            showMore(e){
              var $self = this
              let btn = e.target
              let text = e.target.previousElementSibling
              let newText = text.getAttribute('data-text')
                if(btn.textContent=='развернуть'){
                       text.textContent = newText
                       btn.textContent = 'свернуть'
                } else if(btn.textContent=='свернуть'){
                       $self.splitBigText(text)
                       btn.textContent = 'развернуть'
                } else if(btn.textContent=='show more'){
                       text.textContent = newText
                       btn.textContent = 'show less'
                } else if(btn.textContent=='show less'){
                       $self.splitBigText(text)
                       btn.textContent = 'show more'
                }
            },
            makeSpyHole: function (spot, lazyStep, fastStep, diffToFastStep, image_container, texture, log = 0) {
                let containerStyle = getComputedStyle(image_container);
                let spotRect, rawPlacementCoefficient, placementCoefficientAbs, linetg, allowPaint, placementCoefficient, speed, distortionVal;

                return () => {
                    spotRect = spot.getBoundingClientRect();

                    rawPlacementCoefficient = (spotRect.top - parseInt(containerStyle.paddingTop, 10))/spotRect.height;
                    placementCoefficientAbs = Math.abs(rawPlacementCoefficient);
                    // console.log(placementCoefficientAbs, spot);
                    if (placementCoefficientAbs <= 1.2) {
                        if (this.$store.state.LineEffectBg.mat.uniforms.mask.value != texture.data) {
                            this.$store.state.LineEffectBg.setUniformValues({
                                mask: texture.data,
                                maskHeightCorrector: texture.heightCorrector,
                                maskWidthCorrector: texture.widthCorrector,
                                maskSpotX: texture.spotX,
                                maskSpotY: texture.spotY
                            });
                        }

                        if (placementCoefficientAbs <= 1) {
                            if (placementCoefficientAbs <= 0.7) {
                                linetg = 0.95;
                            } else {
                                linetg = 0.0;
                            }
                            allowPaint = 1 - placementCoefficientAbs;
                        } else {
                            linetg = allowPaint = 0.0;
                        }

                    } else {
                        linetg = allowPaint = 0.0;
                    }






                    if (allowPaint == this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value || placementCoefficientAbs >= 2.0 || this.$store.state.LineEffectBg.mat.uniforms.mask.value != texture.data) {
                        return;
                    }
                    if (log) {
                        console.log(placementCoefficientAbs);
                    }

                    placementCoefficient = (this.ch - spotRect.top  - spotRect.height)/this.ch;
                    this.$store.state.LineEffectBg.setUniformValues({
                        moveY: placementCoefficient
                    });

                    distortionVal = this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value;
                    if (linetg > distortionVal)  {
                        speed = lazyStep;

                        // if (linetg > distortionVal + diffToFastStep) {
                        //     speed = fastStep;
                        // }

                        if (linetg < distortionVal+speed) {
                            this.$store.state.LineEffectBg.setUniformValues({
                                distortionSize: linetg
                            });
                            // this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value = linetg;
                        } else {
                            this.$store.state.LineEffectBg.setUniformValues({
                                distortionSize: this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value + speed
                            });
                            // this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value+=speed;
                        }
                    } else if (linetg < distortionVal ) {
                        speed = lazyStep;

                        // if (linetg < distortionVal - diffToFastStep) {
                        //     speed = fastStep;
                        // }

                        if (linetg > distortionVal-speed) {
                            this.$store.state.LineEffectBg.setUniformValues({
                                distortionSize: linetg
                            });
                            // this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value = linetg;
                        } else {
                            this.$store.state.LineEffectBg.setUniformValues({
                                distortionSize: this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value - speed
                            });
                            // this.$store.state.LineEffectBg.mat.uniforms.distortionSize.value-=speed;
                        }
                    }
                }
            },
            initTrack: function() {

                let image_spot = document.querySelector('.technology-stack__images');
                let image_spot2 = document.querySelector('.request-form__paint');
                let image_container = document.querySelector('.technology-stack');
                let image_container2 = document.querySelector('.request-form');

                let techTexture = {
                    data: this.$store.state.LineEffectBg.loadImage(squirtMask),
                    widthCorrector: this.$store.state.LineEffectBg.getCorrectWidth('.technology-stack__image-1'),
                    heightCorrector: this.$store.state.LineEffectBg.getCorrectHeight('.technology-stack__image-1'),
                    spotX: this.$store.state.LineEffectBg.calculateXposition('.technology-stack__image-1'),
                    spotY: this.$store.state.LineEffectBg.calculateYposition('.technology-stack__image-1')
                };

                let brifTexture = {
                    data: this.$store.state.LineEffectBg.loadImage(mapMask),
                    widthCorrector: this.$store.state.LineEffectBg.getCorrectWidth('.request-form__paint'),
                    heightCorrector: this.$store.state.LineEffectBg.getCorrectHeight('.request-form__paint'),
                    spotX: this.$store.state.LineEffectBg.calculateXposition('.request-form__paint'),
                    spotY: this.$store.state.LineEffectBg.calculateYposition('.request-form__paint')
                };
                this.track = null;
                let spy1 = this.makeSpyHole(image_spot, 0.007, 0.040, 0.3, image_container, techTexture, 1);
                let spy2 = this.makeSpyHole(image_spot2, 0.020, 0.140, 0.3, image_container2, brifTexture);
                let track = () => {
                    spy1();
                    spy2();
                    this.track = requestAnimationFrame(track);
                };


                track();
            },
            animateShow() {
                Array.from(document.querySelectorAll('.company-first__title span')).forEach((el, i) => {
                    setTimeout(() => {
                        decryptLetters(el, 800);
                    }, i * 100);

                    // setTimeout(() => {
                    //     companyScrollParallax();
                    // }, 2000);
                });
                this.$refs.headCont.classList.add('animate');
                var tl = new TimelineMax({delay: .45})
                    tl.to('.ad_item',0.25,{opacity: 1,  ease: Sine.easeInOut})
                    tl.staggerFromTo('.ad_icon_img',0.75,{y:40, opacity: 0},{y:0, opacity: 1,  ease: Sine.easeInOut},0.15)
                    tl.staggerFromTo('.ad_icon_title',0.75,{x:40, opacity: 0},{x:0, opacity: 1,  ease: Sine.easeInOut},0.15,0)
                    tl.staggerFromTo('.ad_desc',0.75,{ opacity: 0},{opacity: 1,  ease: Sine.easeInOut},0.15)
                    tl.staggerFromTo('.ad_icon_bg',0.75,{ opacity: 0},{opacity: 1,  ease: Sine.easeInOut},0.15,0.5)
                    tl.staggerTo('.svg_mask_ad',0.75,{x:'180%', ease: Sine.easeInOut},0.15,0.5)
                    tl.staggerTo('.svg_mask_ad2',0.75,{x:'190%', ease: Sine.easeInOut},0.15,0.5)
                    tl.staggerTo('.svg_mask_ad3',0.75,{x:'150%', ease: Sine.easeInOut},0.15,0.5)
            }

        },
        beforeRouteLeave(to, from, next) {

            this.$store.commit('prepareToNavigation');
            this.animations.unbindEvents();
            this.animations = null;
            this.slider.unbindEvents();
            this.slider = null;
            setTimeout(()=>{

                next();
            },1000);
        },
        beforeDestroy(){
            // this.animations.unbindEvents();
            // cancelAnimationFrame(this.track);
            // this.$store.state.LineEffectBg.stopAnimate();
            // this.$store.commit('unsetLineEffect');
        },
        fetch({store}){
            store.commit('setCurrentPage', store.state.PAGES.COMPANY);
            store.commit('APPSTATE_ACTIVE_SLIDE', 1);
        },
        mounted() {
            if(process.browser){
               this.chechForm()
             }
            this.addMoreLessBtn()
            this.slider = new previewSlider();
            this.animations = new companyScrollAnimations(this);

            this.scroll = new parallaxScroll({
                section: document.querySelector('.technology-stack'),
                element: document.querySelector('.technology-stack__image-2'),
                direction: 'y',
                from: 200,
                to: 0
            });

            // document.querySelector('.company-first').classList.add('optimize-animations');
            //
            //
            // let section = document.querySelector('.company-first');
            //
            // this.$store.commit('setLineEffect' , new LineEffect({
            //     parent: document.querySelector('.root-scrollable'),
            //     bg,
            //     squirtMask,
            //     squirt
            // }));
            //
            //
            // section.classList.add('animate');
            // // this.$store.SeparateMenu.renderSceneOnce();
            //

            //
            // setTimeout(() => {
            //     section.classList.remove('optimize-animations');
            // }, 6000);
            //
            // let scrollable = document.querySelector('.scrollable-content');
            //
            // let stylesLoaded = 0;
            //
            // let styleLoadHandler = (e) => {
            //     stylesLoaded++;
            //     e.target.removeEventListener('load', styleLoadHandler);
            //     console.log('tick', stylesLoaded);
            //     if (stylesLoaded >= 2) {
            //         this.initTrack();
            //     }
            // };
            //
            // document.querySelector('.technology-stack__image-1').addEventListener('load',  styleLoadHandler);
            // document.querySelector('.request-form__paint').addEventListener('load',  styleLoadHandler);
            //
            //
            // this.$store.state.LineEffectBg.animate();
            //
            if (this.$store.state.preloader) {
                this.$store.commit('increacePercentage', 70);
            }
            setTimeout(()=>{
                this.$store.commit('completeNavigation');
            }, 500)
        }
    }
</script>

<style  lang="sass">
@import "../../assets/sass/sections/all.sass"
@import "../../assets/sass/sections/section5.sass"
@import "../../assets/sass/form"
@import "../../assets/sass/company/company.sass"
@import "../../assets/sass/company/company_animations.sass"
@import "../../assets/sass/company/slider.sass"
@import "../../assets/sass/company/team.sass"
.company-job
   opacity: 0
.more_less_btn
   color: #00d2ff
   z-index: 1
   display: inline
.more_less_btn_act
   top: 97%
.scrollable-content::-webkit-scrollbar
   display: none
.scrollable-content
   overflow: -moz-scrollbars-none
   -ms-overflow-style: none
   scrollbar-width: none
@media (max-width: 550px)
   .advantages
      display: flex
      flex-wrap: wrap
      align-items: center
      justify-content: center
      margin-top: 15%
   .company-first .container
      padding-top: 10%
   figure.advantage
      padding: 2%
   .team_face_component
      width: 50%
      padding-bottom: 10%
   .reviews-slider
      justify-content: center
      align-items: center
   .reviews__slider.reviews-slider
      flex-direction: column
   .reviews-slider__images-wrapper
      width: 100%
      display: flex
      justify-content: center
      align-items: center
   .reviews-slider__image
      display: flex
      width: 80%
      height: calc(400px * 1.222453222453222)
   .reviews-slider__photo-item
      width: 100%
      height: 100%
   .reviews-slider__info
      width: 80%
      display: flex
      justify-content: center
      flex-direction: column
      align-items: center
   .reviews-slider__text
      width: 100%
      display: flex
      justify-content: flex-start
      align-items: center
   .reviews-slider__person
      width: 80%
   .company-form .button
     display: flex
     justify-content: center
     align-items: center
</style>
