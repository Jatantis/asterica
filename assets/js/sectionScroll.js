import {animateItemsFromSpot, decryptLetters, encryptLetters, hideTextWithBg, showTextWithBg, removeWavesAnimations, onLabelTextTransitionEnd} from "./animateFunctions";
import * as anime from 'animejs'
import { Parallax } from "./parallax";

export function SectionScroll(outerContext) {
    this.testName = outerContext.$store.state.CURRENT_PAGE;
    let _ = this;

    let store = outerContext.$store;
    let state = outerContext.$store.state;
    // Положения волны в зависимости от слайда.




    let waveSteps = {
        1: 120,
        2: 90,
        3: 60,
        4: 40,
        5: 10
    }

    _.state = {
        prevWavePosition: 120,
        wavePosition: 120
    }

    // Элементы страницы, с которыми в основном идёт работа.

    _.helpers = {
        navigation: {
            prev: document.querySelector('.js-to-prev-section'),
            next: document.querySelector('.js-to-next-section'),
        },
        section1: {
            section: document.querySelector('.section-1'),
            title: document.querySelectorAll('.section-1__text-line'),
            parallax: null,
        },
        section2: {
            section: document.querySelector('.section-2'),
            title: document.querySelector('.section-2__title span'),
            waves: document.querySelector('.section-2__waves'),
            parallax: null,
            spotItemsTimer: null,
        },
        section3: {
            section: document.querySelector('.section-3'),
            title: document.querySelector('.section-3__title span'),
            waves: document.querySelector('.section-3__waves'),
            parallax: null,
            spotItemsTimer: null,
        },
        section4: {
            section: document.querySelector('.section-4'),
            title: document.querySelector('.portfolio-slider__title span'),
        },
        section5: {
            section: document.querySelector('.section-5'),
            title: document.querySelector('.section-5__title'),
        },
    }

    _.elements = {
        wrapper: document.querySelector('.scroll-sections'),
        sections: document.querySelectorAll('.section'),
        anchors: document.querySelectorAll('.section-nav__item'),
    }

    /**
     * Берёт айдишник новой секции, ищет по нему
     * значение которое нужно для анимации волны.
     *
     * Анимировал так, потому что Firefox и Edge
     * не хотят работать с атрибутом style для path.
     *
     * @async
     * @param {number} id Айдишник новой секции.
     */
    _.animateWave = function (id) {
        let cid = id + 1;

        _.state.prevWavePosition = _.state.wavePosition;
        let waveNode = document.querySelector('.js-wave-path');

        anime({
            targets: _.state,
            wavePosition: waveSteps[cid],
            duration: 800,
            easing: 'easeOutSine',
            update: function () {
                waveNode.setAttribute('transform', 'translate(0, ' + _.state.wavePosition + ')')
            }
        });
    }

    /**
     * Изменяет номер текущего слайда в навигации,
     * а так же его цвет.
     *
     * @param {number} id
     */
    _.changeNavNumber = function (id) {
        let cid = id + 1;
        let nav = document.querySelectorAll('.page-number__number');
        let classString = 'page-number__number page-number__number-colored page-number__number_';

        nav.forEach(element => {
            element.innerHTML = '0' + cid;
            if (element.classList.contains('page-number__number-colored')) {
                element.setAttribute('class', classString + cid)
            }
        });
    }

    /**
     * Блокирует нажатие на стрелку если секция
     * первая или последняя.
     *
     * @param {number} id Айди новой секции
     */
    _.changeButtonDisable = function (id) {
        if ((id + 1) === _.elements.sections.length) {
            _.helpers.navigation.next.setAttribute('disabled', '');
            _.helpers.navigation.prev.removeAttribute('disabled');
        } else if (id === 0) {
            _.helpers.navigation.prev.setAttribute('disabled', '');
            _.helpers.navigation.next.removeAttribute('disabled');
        } else {
            _.helpers.navigation.prev.removeAttribute('disabled');
            _.helpers.navigation.next.removeAttribute('disabled');
        }
    }

    /**
     * Записывает новую активную секцию в локальное состояние.
     * Добавляет класс active активной секции и навигации.
     *
     * @param {number} id Идентификатор новой активной секции
     */
    _.setActiveElements = function (id) {
        store.commit('appStateMutate', {
            activeSlide: id
        });

        _.changeButtonDisable(id);

        _.elements.anchors.forEach(el => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
                return;
            }
        });
        _.elements.anchors[id].classList.add('active');

        _.elements.sections.forEach(el => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
                return;
            }
        });
        _.elements.sections[id].classList.add('active');
    }

    /**
     * Анимирует с текущей секции на указанную.
     *
     * @param {id} id Id новой секции.
     */
    _.scrollToSection = function (id) {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        if (!appState.animationIsActive) {
            store.commit('appStateMutate', {
                animationIsActive: true
            });
            _.animate(appState.activeSlide, id, _.state);
        }
    }

    /**
     * Анимирует с текущей секции на следующую.
     */
    _.showNextSection = function () {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        if ((appState.activeSlide + 1) !== _.elements.sections.length) {
            store.commit('appStateMutate', {
                animationIsActive: true
            });
            _.animate(appState.activeSlide, appState.activeSlide + 1, _.state);
        }
    }

    /**
     * Анимирует с текущей секции на предыдущую.
     */
    _.showPrevSection = function () {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        if (appState.activeSlide !== 0) {
            store.commit('appStateMutate', {
                animationIsActive: true
            });
            _.animate(appState.activeSlide, appState.activeSlide - 1, _.state);
        }
    }

    /**
     * Прослушка событий скролла.
     * Нужна для кастомного скролла.
     *
     * @param {object} e Event
     */

    _.wheelHandler = function (e) {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        if (!appState.menuIsOpened) {
            if (!appState.animationIsActive) {
                if (e.deltaY > 0) {
                    _.showNextSection();
                } else {
                    _.showPrevSection();
                }
            }
        }
    }

    /**
     * Прослушка событий при нажатии на клавиатуру.
     * Нужна для перелистывания сайта по стрелочкам,
     * а так же при нажатии на цифры.
     *
     * @param {object} e Event
     */
    _.keyUpHandler = function (e) {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        if (!appState.menuIsOpened) {
            if (!appState.animationIsActive) {
                let key = e.keyCode;
                let numbersKeyCodes = [49, 50, 51, 52, 53];
                let numpadKeyCodes = [97, 98, 99, 100, 101];

                if (key == 40) {
                    _.showNextSection();
                } else if (key == 38) {
                    _.showPrevSection();
                } else if (key >= 49 && key <= 53) {
                    _.scrollToSection(numbersKeyCodes.findIndex(function (el) {
                        if (el === key) return true;
                    }));
                } else if (key >= 97 && key <= 101) {
                    _.scrollToSection(numpadKeyCodes.findIndex(function (el) {
                        if (el === key) return true;
                    }));
                }
            }
        }
    }

    /**
     * Трансформация из текущего бг в следующий.
     *
     * @async
     * @param {number} current Текущий слайд
     * @param {number} next Следующий слайд
     * @param {number} duration Длительность перехода между бг
     */
    _.bgTransition = function (current, next, duration) {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        setTimeout(() => {
            if (current < next) {
                imageEffect.animateToNext(current, next, duration);
            } else {
                imageEffect.animateToPrev(current, next, duration);
            }
        }, 20);
    }

    /**
     * Вызывает функцию для анимирования ухода с текущей секции
     * и передаёт функцию, которая запускается после окончания анимации.
     *
     * @async
     * @param {number} current id текущей секции
     * @param {number} next id следующей секции
     */
    _.animate = function (current, next) {
        if (current === next) return;
        _.changeNavNumber(next);
        _.animateWave(next);
        _.leaveFunctionsArray[current](_.comeFunctionsArray[next], current, next);
    }

    /**
     * Показывает секцию с эффектом slidedown.
     *
     * @async
     * @param {number} id ID нужной секции
     * @returns {promise}
     */
    _.showSectionWithSlidedown = function (id) {
        return new Promise(resolve => {
            anime({
                targets: '.section-' + id,
                translateY: ['-50%', '0%'],
                opacity: [0, 1],
                elasticity: 0,
                easing: 'easeOutSine',
                duration: 600,
                complete: resolve
            });
        });
    }

    /**
     * Прячет секцию с эффектом slideup.
     *
     * @async
     * @param {number} id ID нужной секции
     * @returns {promise}
     */
    _.hideSectionWithSlideup = function (id) {
        return new Promise(resolve => {
            anime({
                targets: '.section-' + id,
                translateY: ['0%', '-50%'],
                opacity: [1, 0],
                elasticity: 0,
                easing: 'easeOutSine',
                duration: 600,
                complete: resolve
            });
        });
    }

    /**
     * Функция для перехода с первого слайда на любой другой.
     *
     * @async
     * @param {number} current ID текущей секции.
     * @param {object} section Секция, которую нужно анимировать.
     * @param {function} callback Функция запуска анимации для текущей секции.
     */
    _.transitionFromFirstSlide = function (next, section, callback) {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        let id = next + 1;
        let timeline = anime.timeline();
        let targets = [section, document.querySelector('.webgl-backgrounds')];

        imageEffect.mat.uniforms.animationRoute.value = 1;
        imageEffect.mat.uniforms.currentTextureStart.value = next;
        imageEffect.mat.uniforms.currentTextureEnd.value = next;
        imageEffect.renderSceneOnce(next);

        section.classList.add('section-' + id + '-optimize');

        Array.from(_.helpers.section1.title).forEach((el, i) => {
            setTimeout(() => {
                encryptLetters(el, 400);
            }, i * 100);
        });
        zoomEffect.animateHideLogo();
        timeline
            .add({
                targets: '.section-1 .text-with-bg__front',
                scaleX: [0, 1],
                duration: 400,
                easing: 'easeOutSine',
                offset: 0
            })
            .add({
                targets: '.section-1 .text-with-bg__line',
                scaleX: [1, 0],
                duration: 400,
                easing: 'easeOutSine',
                offset: 400
            });

        anime({
            targets: targets,
            translateY: ['100%', '0%'],
            duration: 1000,
            elasticity: 0,
            easing: [0.790, 0.010, 0.655, 0.990],
            offset: 0,
            begin () {
                section.classList.add('from-first');

                setTimeout(() => {
                    callback();
                }, 500);
            },
            complete () {
                section.removeAttribute('style');
                section.classList.remove('from-first');
                _.helpers.section1.section.classList.remove('section-1-optimize')
                _.setActiveElements(next);

                imageEffect.animateHoles(next, 'show');
            }
        });
    }

    /**
     * Анимирует уход с текущей секции на первую.
     *
     * @async
     * @param {element} section Текущая секция.
     * @param {function} callback Функция анимации ухода с текущей секции.
     * @param {number} duration Длительность анимации ухода с текущей секции.
     */
    _.transitionToFirstSlide = function (section, current, callback, duration) {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        let timeline = anime.timeline();
        let timeline2 = anime.timeline();
        let targets = [section, document.querySelector('.webgl-backgrounds')];

        _.helpers.section1.section.classList.add('active');

        callback();

        imageEffect.animateHoles(current, 'hide');

        setTimeout(() => {
            Array.from(_.helpers.section1.title).forEach((el, i) => {
                setTimeout(() => {
                    decryptLetters(el, 800);
                }, i * 200);
            });
            zoomEffect.animateShowLogo();

            timeline
                .add({
                    targets: targets,
                    translateY: ['0', '100%'],
                    duration: 1000,
                    elasticity: 0,
                    easing: [0.790, 0.010, 0.655, 0.990],
                    begin () {
                        setTimeout(() => {

                            timeline2
                                .add({
                                    targets: '.section-1 .text-with-bg__line',
                                    scaleX: [0, 1],
                                    duration: 400,
                                    easing: 'easeOutSine',
                                    elasticity: 0
                                })
                                .add({
                                    targets: '.section-1 .text-with-bg__front',
                                    scaleX: [1, 0],
                                    duration: 400,
                                    easing: 'easeOutSine',
                                    elasticity: 0,
                                    complete () {
                                        store.commit('appStateMutate', {
                                            animationIsActive: false
                                        });
                                    }
                                })
                        }, duration);
                    },
                    complete () {
                        setTimeout(() => {
                            section.removeAttribute('style');

                            imageEffect.mat.uniforms.currentTextureStart.value = 1;
                            imageEffect.mat.uniforms.currentTextureEnd.value = 4;
                            imageEffect.mat.uniforms.animationRoute.value = 1;
                            imageEffect.renderSceneOnce();
                        }, 100);
                    }
                });
        }, duration / 2);
    }

    /**
     * Функция для анимации первого слайда.
     * Запускается при полной загрузке всех ресурсов.
     */

    _.initFirstSlide = function () {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;

        store.commit('appStateMutate', {
            animationIsActive: true
        });

        let video = document.querySelector('.section-1__video');

        // video.play();

        let timeline = anime.timeline();

        Array.from(_.helpers.section1.title).forEach((el, i) => {
            setTimeout(() => {
                decryptLetters(el, 600);
            }, i * 200);
        });
        zoomEffect.animateShowLogo();
        timeline
            .add({
                targets: '.section-1__text-line',
                duration: 400,
                translateX: [80, 0],
                easing: 'easeOutSine',
                elasticity: 0,
                delay (el, i) {
                    return i * 150
                },
                complete () {
                    showTextWithBg('.section-1')
                        .then(() => {

                            store.commit('appStateMutate', {
                                animationIsActive: false
                            });

                        });
                }
            });

    }

    _.toFirstSlide = function () {
    }

    _.fromFirstSlide = function (onComplete, current, next) {
        onComplete(current, next);
    }

    /**
     * Анимация появления элементов на втором слайде.
     *
     * @async
     */

    _.toSecondSlide = function (prev, current) {
        let {
            appState,
            imageEffect,
            zoomEffect
        } = state;
        let timeline = anime.timeline();

        //console.log("SLIDE");
        if (prev === 0) {
            //_.transitionFromFirstSlide(current, _.helpers.section2.section, animate);
        } else {
            //animate();
        }

        function animate() {
            decryptLetters(_.helpers.section2.title, 800);

            timeline
                .add({
                    targets: '.section-2__zeus',
                    opacity: [0, 1],
                    translateY: [100, 0],
                    offset: 700,
                    easing: 'easeOutSine',
                    duration: 600,
                    elasticity: 0,
                    complete () {
                        anime({
                            targets: '.section-2__zeus',
                            translateY: 40,
                            duration: 1800,
                            easing: 'easeInOutSine',
                            elasticity: 0,
                            loop: true,
                            direction: 'alternate'
                        });

                        _.helpers.section2.waves.classList.add('waves-animation');
                    },
                    begin () {
                        setTimeout(() => {
                            showTextWithBg('.section-2')
                                .then(() => {
                                    store.commit('appStateMutate', {
                                        animationIsActive: false
                                    });

                                    _.helpers.section2.parallax = new Parallax(
                                        _.helpers.section2.section
                                    );

                                    _.helpers.section2.spotItemsTimer = new animateItemsFromSpot('.section-2__spot');

                                    store.commit('section2SpotInstance', _.helpers.section2.spotItemsTimer);
                                });
                        }, 400);
                    }
                })
                .add({
                    targets: '.section-2-small-spot__line',
                    scale: [0, 1],
                    rotate: [-45, -45],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 0
                })
                .add({
                    targets: '.section-2 .section-line-form',
                    opacity: [0, 1],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 1200
                })
        }
    }

    /**
     * Анимация скрытия элементов на втором слайде.
     *
     * @async
     */

    _.fromSecondSlide = function (onComplete, current, next) {
        let nextId = next + 1;
        let currentId = current + 1;
        let timeline = anime.timeline();

        _.helpers.section2.waves.classList.add('waves-hide');

        if (next === 0) {
            _.transitionToFirstSlide(_.helpers.section2.section, current, animate, 1000)
        } else {
            _.bgTransition(current, next, 1000);
            animate();
        }

        _.helpers.section2.spotItemsTimer.destroy();
        _.helpers.section2.spotItemsTimer = undefined;

        function animate() {
            timeline
                .add({
                    targets: '.section-2__zeus',
                    translateY: '-100',
                    opacity: [1, 0],
                    easing: 'easeOutSine',
                    duration: 400,
                    elasticity: 0,
                    offset: 0
                })
                .add({
                    targets: '.section-2-small-spot__line',
                    scale: [1, 0],
                    rotate: [-45, -45],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 400
                })
                .add({
                    targets: '.section-2 .section-line-form',
                    opacity: [1, 0],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 400,
                    begin () {
                        encryptLetters(_.helpers.section2.title, 400);

                        hideTextWithBg('.section-2').then(() => {
                            document.querySelector('.section-' + currentId)
                                .classList.remove('section-' + currentId + '-optimize');

                            setTimeout(() => {
                                _.setActiveElements(next);
                                onComplete(current, next);
                                anime.remove('.section-2__zeus');
                            }, 150);

                            _.helpers.section2.parallax.destroy();

                            removeWavesAnimations.call(document.querySelector('.section-2__waves'));
                        });

                        setTimeout(() => {
                            document.querySelector('.section-' + nextId)
                                .classList.add('section-' + nextId + '-optimize');
                        }, 300);
                    }
                });
        }
    }

    /**
     * Анимация появления элементов на третьем слайде.
     *
     * @async
     */

    _.toThirdSlide = function (prev, current) {
        let timeline = anime.timeline();

        if (prev === 0) {
            _.transitionFromFirstSlide(current, document.querySelector('.section-3'), animate);
        } else {
            animate();
        }

        function animate() {
            _.helpers.section3.waves.classList.add('waves-animation');

            decryptLetters(_.helpers.section3.title, 800);

            timeline
                .add({
                    targets: '.section-3__hands',
                    opacity: [0, 1],
                    translateY: [100, 0],
                    offset: 700,
                    easing: 'easeOutSine',
                    duration: 600,
                    elasticity: 0,
                })
                .add({
                    targets: '.section-3-small-spot__line',
                    scale: [0, 1],
                    rotate: [-45, -45],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 0
                })
                .add({
                    targets: '.section-3 .section-line-form',
                    opacity: [0, 1],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 600
                })
                .add({
                    targets: '.section-3__subtitle',
                    opacity: [0, 1],
                    duration: 600,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 800,
                    begin () {
                        setTimeout(() => {
                            showTextWithBg('.section-3')
                                .then(() => {
                                    store.commit('appStateMutate', {
                                        animationIsActive: false
                                    });


                                    _.helpers.section3.parallax = new Parallax(
                                        _.helpers.section3.section
                                    );

                                    _.helpers.section3.spotItemsTimer = new animateItemsFromSpot('.section-3__spot');

                                    store.commit('section3SpotInstance', _.helpers.section3.spotItemsTimer);
                                });
                        }, 200);
                    }
                })
        }
    }

    /**
     * Анимация скрытия элементов на третьем слайде.
     *
     * @async
     */

    _.fromThirdSlide = function (onComplete, current, next) {
        let nextId = next + 1;
        let currentId = current + 1;
        let timeline = anime.timeline();

        _.helpers.section3.parallax.destroy();
        _.helpers.section3.spotItemsTimer.destroy();
        _.helpers.section3.spotItemsTimer = undefined;

        _.helpers.section3.waves.classList.add('waves-hide');

        if (next === 0) {
            _.transitionToFirstSlide(_.helpers.section3.section, current, animate, 1150);
        } else {
            _.bgTransition(current, next, 1150);
            animate();
        }

        function animate() {
            timeline
                .add({
                    targets: '.section-3__hands',
                    translateY: '-100',
                    opacity: [1, 0],
                    easing: 'easeOutSine',
                    duration: 400,
                    elasticity: 0,
                    offset: 0
                })
                .add({
                    targets: '.section-3-small-spot__line',
                    scale: [1, 0],
                    rotate: [-45, -45],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 0
                })
                .add({
                    targets: '.section-3 .section-line-form',
                    opacity: [1, 0],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 400,
                    begin () {
                        encryptLetters(_.helpers.section3.title, 400);

                        hideTextWithBg('.section-3').then(() => {

                            setTimeout(() => {
                                document.querySelector('.section-' + currentId)
                                    .classList
                                    .remove('section-' + currentId + '-optimize');

                                _.setActiveElements(next);
                                onComplete(current, next);
                                removeWavesAnimations
                                    .call(document.querySelector('.section-3__waves'));
                            }, 150);

                        });

                        setTimeout(() => {
                            document.querySelector('.section-' + nextId)
                                .classList.add('section-' + nextId + '-optimize');
                        }, 700);
                    }
                })
                .add({
                    targets: '.section-3__subtitle',
                    opacity: [1, 0],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 600
                });
        }
    }

    /**
     * Анимация появления элементов на четвёртом слайде.
     *
     * @async
     */

    _.toFourthSlide = function (prev, current) {
        let timeline = anime.timeline();

        if (prev === 0) {
            _.transitionFromFirstSlide(current, _.helpers.section4.section, animate);
        } else {
            animate();
        }

        function animate() {
            decryptLetters(_.helpers.section4.title, 800);

            timeline
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
                    complete () {
                        store.commit('appStateMutate', {
                            animationIsActive: false
                        });
                    }
                });
        }
    }

    /**
     * Анимация скрытия элементов на четвёртом слайде.
     *
     * @async
     */

    _.fromFourthSlide = function (onComplete, current, next) {
        let nextId = next + 1;
        let currentId = current + 1;
        let timeline = anime.timeline();

        if (next === 0) {
            _.transitionToFirstSlide(_.helpers.section4.section, current, animate, 2200);
        } else {
            _.bgTransition(current, next, 2200);
            animate();
        }

        function animate() {
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
                    offset: 600,
                    begin () {
                        setTimeout(() => {
                            encryptLetters(_.helpers.section4.title, 600);
                        }, 200);
                    }
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
                    offset: 1400,
                    begin () {
                        setTimeout(() => {
                            document.querySelector('.section-' + nextId)
                                .classList.add('section-' + nextId + '-optimize');
                        }, 400);
                    },
                    complete () {
                        document.querySelector('.section-' + currentId)
                            .classList.remove('section-' + currentId + '-optimize');

                        _.setActiveElements(next);
                        onComplete(current, next);
                    }
                });
        }
    }

    /**
     * Анимация появления элементов на пятом слайде.
     *
     * @async
     */

    _.toFifthSlide = function (prev, current) {
        let timeline = anime.timeline();

        Array.from(document.querySelectorAll('.section-5 .form__label-text'))
            .forEach(el => {
                el.addEventListener('transitionend', onLabelTextTransitionEnd);
            });

        if (prev === 0) {
            _.transitionFromFirstSlide(current, document.querySelector('.section-5'), animate);
        } else {
            animate();
        }

        function animate() {
            decryptLetters(_.helpers.section5.title, 800);

            timeline
                .add({
                    targets: '.section-5 .section-line-form',
                    opacity: [0, 1],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 0,
                    begin () {
                        showTextWithBg('.section-5__desc');
                    }
                })
                .add({
                    targets: '.section-5 .form__title',
                    opacity: [0, 1],
                    duration: 400,
                    easing: 'easeOutSine',
                    offset: 600,
                    elasticity: 0,
                    begin () {
                        setTimeout(() => {
                            document.querySelector('.section-5__form').classList.add('animate');
                        }, 200);
                    }
                })
                .add({
                    targets: '.section-5 .button',
                    opacity: [0, 1],
                    duration: 400,
                    easing: 'easeOutSine',
                    elasticity: 0,
                    offset: 2200,
                    begin () {
                        setTimeout(() => {
                            showTextWithBg('.section-5 .contacts')
                                .then(() => {
                                    store.commit('appStateMutate', {
                                        animationIsActive: false
                                    });
                                });
                        }, 400);
                    }
                })
                .add({
                    targets: '.socials__item',
                    scale: [0, 1],
                    rotate: [-45, 0],
                    duration: 400,
                    easing: 'easeOutQuint',
                    offset: 2800,
                    elasticity: 1000,
                    delay (target, i) {
                        return i * 100;
                    }
                });
        }
    }

    /**
     * Анимация скрытия элементов на пятом слайде.
     *
     * @async
     */

    _.fromFifthSlide = function (onComplete, current, next) {
        let nextId = next + 1;
        let currentId = current + 1;
        let timeline = anime.timeline();

        Array.from(document.querySelectorAll('.section-5 .form__label-text'))
            .forEach(el => {
                el.removeEventListener('transitionend', onLabelTextTransitionEnd);
            });

        if (next === 0) {
            _.transitionToFirstSlide(_.helpers.section5.section, current, animate, 1700)
        } else {
            _.bgTransition(current, next, 1700);
            animate();
        }

        function animate() {
            timeline
                .add({
                    targets: '.socials__item',
                    scale: [1, 0],
                    rotate: [0, -45],
                    duration: 400,
                    easing: 'easeOutQuint',
                    offset: 0,
                    elasticity: 1000,
                    begin () {
                        hideTextWithBg('.section-5 .contacts');
                    },
                    delay: function (el, i) {
                        return i * 100;
                    }
                })
                .add({
                    targets: '.section-5 .button',
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeOutSine',
                    elasticity: 0,
                    offset: 300,
                    begin () {
                        document.querySelector('.section-5__form').classList.remove('animate');

                        Array.from(document.querySelectorAll('.section-5 .form__label-text'))
                            .forEach(el => {
                                el.classList.remove('transition-end');
                            });
                    }
                })
                .add({
                    targets: '.section-5 .form__title',
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeOutSine',
                    offset: 600,
                    elasticity: 0,
                    begin () {
                        setTimeout(() => {
                            encryptLetters(_.helpers.section5.title, 400);

                            hideTextWithBg('.section-5__desc')
                                .then(() => {
                                    document.querySelector('.section-' + currentId)
                                        .classList.remove('section-' + currentId + '-optimize');

                                    _.setActiveElements(next);
                                    onComplete(current, next);
                                });

                            setTimeout(() => {
                                document.querySelector('.section-' + nextId)
                                    .classList.add('section-' + nextId + '-optimize');
                            }, 400);
                        }, 350);
                    }
                })
                .add({
                    targets: '.section-5 .section-line-form',
                    opacity: [1, 0],
                    duration: 400,
                    elasticity: 0,
                    easing: 'easeOutSine',
                    offset: 1200
                });
        }
    }

    _.bindedEventList = {
        wheel: _.wheelHandler.bind(_),
        keyUp: _.keyUpHandler.bind(_),
        navShowPrev: _.showPrevSection,
        navShowNext: _.showNextSection,
        navClick: function (e) {
            _.scrollToSection(e.currentTarget.dataset.id - 1);
            e.preventDefault(e.currentTarget);
        }
    };


    // Массив с функциями для анимации ухода с текущего слайда.

    _.leaveFunctionsArray = [_.fromFirstSlide, _.fromSecondSlide, _.fromThirdSlide, _.fromFourthSlide, _.fromFifthSlide];

    // Массив с функциями для анимации прихода на новый слайд.

    _.comeFunctionsArray = [_.toFirstSlide, _.toSecondSlide, _.toThirdSlide, _.toFourthSlide, _.toFifthSlide];

    // Событие при скролле.

    document.body.addEventListener('wheel', _.bindedEventList.wheel);

    // Событие при отпускании клавиши.

    document.body.addEventListener('keyup', _.bindedEventList.keyUp);

    // Клик на стрелочку.

    _.helpers.navigation.prev.addEventListener('click', _.bindedEventList.navShowPrev);

    // Клик на стрелочку.

    _.helpers.navigation.next.addEventListener('click', _.bindedEventList.navShowNext);

    // Клик на навигацию.

    _.elements.anchors.forEach(element => {
        element.addEventListener('click', _.bindedEventList.navClick);
    });

    _.unbindEvents = function() {

        document.body.removeEventListener('wheel', _.bindedEventList.wheel);

        document.body.removeEventListener('keyup', _.bindedEventList.keyUp);

        _.helpers.navigation.prev.removeEventListener('click', _.bindedEventList.navShowPrev);

        _.helpers.navigation.next.removeEventListener('click', _.bindedEventList.navShowNext);

        _.elements.anchors.forEach(element => {
            element.removeEventListener('click', _.bindedEventList.navClick);
        });
    }
}
