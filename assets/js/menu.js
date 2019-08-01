'use strict';
import * as anime from 'animejs'

import { removeWavesAnimations } from './animateFunctions'

export function Menu (page, outerContext) {
    console.log('build');
    this.page = page;
    this.store = outerContext.$store;
    this.state = outerContext.$store.state;

    this.elements = {
        button: document.querySelector('.js-open-menu'),
        buttonText: document.querySelector('.open-menu__text'),
        buttonOpenIcon: document.querySelector('.open-menu-icon'),
        buttonCloseIcon: document.querySelector('.close-menu-icon'),

        list: document.querySelector('.menu__list'),
        listItems: document.querySelectorAll('.menu__list-item'),
        listItemsSvg: document.querySelectorAll('.menu__svg-word'),
        links: Array.from(document.querySelectorAll('.menu__item-link')),

        section: document.querySelector('.menu'),
        letters: document.querySelector('.menu-letters'),
        soc: document.querySelector('.footer__socials'),


        waves: document.querySelectorAll('.menu-images__wave'),
        images: Array.from(document.querySelectorAll('.menu-images__image-hidden')),
        image: document.querySelector('.menu-images__image'),

        // Элементы находящиеся в футере

        contacts: document.querySelector('.menu__contacts'),
        footerLines: document.querySelectorAll('.menu__contacts .text-with-bg__line'),
        footerLinesBack: document.querySelectorAll('.menu__contacts .text-with-bg__back'),
        footerLinesFront: document.querySelectorAll('.menu__contacts .text-with-bg__front'),
        footerSocials: document.querySelectorAll('.menu__socials .socials__item '),

        // Что надо скрыть при открытии меню.
        navigation: document.querySelector('.section-nav'),
        language: document.querySelector('.language')
    };

    this.bindedCallerHandler = this.buttonClickHandler.bind(this);
    this.elements.button.addEventListener('click', this.bindedCallerHandler);

    this.bindedKeyupHandler = this.keyupHandler.bind(this);
    this.bindedWheelHandler = this.wheelHandler.bind(this);
    this.bindedLinkMouseenterHandler = this.linkMouseenterHandler.bind(this);
}


Menu.prototype.unbindMenuCaller = function () {
    this.elements.button.removeEventListener('click', this.bindedCallerHandler);
}

/**
 * Инициализация событий.
 */

Menu.prototype.initEvents = function () {

    document.body.addEventListener('keyup', this.bindedKeyupHandler);
    document.body.addEventListener('wheel', this.bindedWheelHandler);
    this.elements.links.forEach(el => {
        el.addEventListener('mouseenter', this.bindedLinkMouseenterHandler);
    });
}

/**
 * Удаление прослушивателей событий.
 */

Menu.prototype.destroyEvents = function () {
    document.body.removeEventListener('keyup', this.bindedKeyupHandler);
    document.body.removeEventListener('wheel', this.bindedWheelHandler);
    this.elements.links.forEach(el => {
        el.removeEventListener('mouseenter', this.bindedLinkMouseenterHandler);
    });
}

/**
 * Вставка нужной картинки при ховере на пункт меню.
 */

Menu.prototype.linkMouseenterHandler = function (e) {
    let id = e.target.dataset.id;

    this.elements.image.src = this.elements.images[id].src;
}

/**
 * Закрытие на ESC.
 */

Menu.prototype.keyupHandler = function (e) {
    if (e.keyCode === 27) this.hide();
}

/**
 * Закрытие меню при скролле мышкой.
 */

Menu.prototype.wheelHandler = function () {
    this.hide();
}

/**
 * Установка состояний открытия меню.
 */

Menu.prototype.enableMenu = function () {
    this.store.commit('appStateMutate', {
        menuIsOpened: true
    });

    let bg = document.querySelector('.menu');
    bg.classList.add('active');
    this.setContactsPosition();
    this.elements.letters.style.opacity =
        CSS.supports('mix-blend-mode: multiply') ? 1 : 0.1;

    if (this.state.CURRENT_PAGE === this.state.PAGES.MAIN) {
        this.elements.language.classList.add('hidden');
        document.querySelector('.page-number').classList.add('hidden');
        this.elements.navigation.classList.add('hidden');
    }
}

/**
 * Отключение состояний открытого меню.
 */

Menu.prototype.disableMenu = function () {
    this.store.commit('appStateMutate', {
        menuIsOpened: false
    });
    let bg = document.querySelector('.menu');
    bg.classList.remove('active');
    this.elements.letters.removeAttribute('style');

    if (this.state.CURRENT_PAGE === this.state.PAGES.MAIN) {
        this.elements.language.classList.remove('hidden');
        document.querySelector('.page-number').classList.remove('hidden');
        this.elements.navigation.classList.remove('hidden');
    }
}

/**
 * Выравнивание контактов вменю по левому краю пунктов.
 */

Menu.prototype.setContactsPosition = function () {
    this.elements.contacts.style.left = `${this.elements.list.offsetLeft}px`;
}

/**
 * Оброботчик события нажатия на кнопку.
 */

Menu.prototype.buttonClickHandler = function () {
    if (!this.state.appState.animationIsActive) {

        if (!this.state.appState.menuIsOpened) {
            this.setButtonOpened();
            this.open();
            return;
        }

        this.hide();
    }
}

/**
 * Установка состояния кнопки при открытом меню.
 */

Menu.prototype.setButtonOpened = function () {
    this.elements.buttonText.innerText = 'Закрыть';
    this.elements.buttonOpenIcon.classList.add('open-menu-icon_translated');

    setTimeout(() => {
        this.elements.buttonOpenIcon.classList.add('open-menu-icon_hidden');
        this.elements.buttonCloseIcon.classList.add('close-menu-icon_opened');
    }, 80);
}

/**
 * Установка состояния кнопки при закрытом меню.
 */

Menu.prototype.setButtonClosed = function () {
    this.elements.buttonText.innerText = 'Меню';

    this.elements.buttonOpenIcon.classList.remove('open-menu-icon_hidden');
    this.elements.buttonCloseIcon.classList.remove('close-menu-icon_opened');

    setTimeout(() => {
        this.elements.buttonOpenIcon.classList.remove('open-menu-icon_translated');
    }, 80);
}

/**
 * Появление меню с анимациями.
 */

Menu.prototype.open = function () {
    // Если не на главной странице.
    if (this.state.CURRENT_PAGE !== this.state.PAGES.MAIN) {
        this.initEvents();

        this.store.commit('appStateMutate', {
            animationIsActive: true
        });

        this.swipeMenuFromRight()
            .then(() => {
                this.enableMenu();
                if (document.querySelector('.section-static-promo .container') != null) {
                    document.querySelector('.section-static-promo .container').style.display = "none";
                }
                if(document.querySelector('.scrollable-container')  != null) {
                    document.querySelector('.scrollable-container').style.display = "none";
                }
                this.state.SeparateMenu.animateHoles('show');
                console.log('click');
                // this.store.imageEffect.animateHoles(5, 'show');
                this.showItemsWithAnimation()
                    .then(() => {
                        console.log('complete');
                        this.store.commit('appStateMutate', {
                            animationIsActive: false
                        });
                    });
            });
    } else {
        this.initEvents();

        this.store.commit('appStateMutate', {
            animationIsActive: true
        });

        if (this.state.section2SpotInstance) {
            this.state.section2SpotInstance.destroy();
        } else if (this.state.section3SpotInstance) {
            this.state.section3SpotInstance.destroy();
        }

        if (this.state.appState.activeSlide === 0) {
            this.swipeFromRightBackground()
                .then(() => {
                    this.enableMenu();
                    this.state.imageEffect.animateHoles(5, 'show');
                    this.showItemsWithAnimation()
                        .then(() => {
                            this.store.commit('appStateMutate', {
                                animationIsActive: false
                            });
                        });

                });
        } else {
            let id = this.state.appState.activeSlide + 1;

            this.state.imageEffect.animateToNext(this.state.appState.activeSlide, 5, 600);

            this.state.sectionScroll.hideSectionWithSlideup(id)
                .then(() => {
                    this.enableMenu();
                    this.showItemsWithAnimation()
                        .then(() => {
                            this.store.commit('appStateMutate', {
                                animationIsActive: false
                            });
                        });
                });
        }
    }
}

/**
 * Скрытие меню с анимациями.
 */

Menu.prototype.hide = function () {
    this.setButtonClosed();

    if (this.state.CURRENT_PAGE !== this.state.PAGES.MAIN) {
        this.destroyEvents();

        this.store.commit('appStateMutate', {
            animationIsActive: true
        });
        this.state.SeparateMenu.animateHoles('hide');
        this.hideItemsWithAnimation()
            .then(() => {
                this.disableMenu();
                if (document.querySelector('.section-static-promo .container')) {
                    document.querySelector('.section-static-promo .container').style.display = "block";
                }
                if(document.querySelector('.scrollable-container')) {
                    document.querySelector('.scrollable-container').style.display = "block";
                }
                // this.state.imageEffect.animateHoles(5, 'hide');
                this.swipeMenuToRight()
                    .then(() => {
                        this.store.commit('appStateMutate', {
                            animationIsActive: false
                        });
                    });
            });
    } else {
        if (!this.state.appState.animationIsActive) {
            this.destroyEvents();

            this.store.commit('appStateMutate', {
                animationIsActive: true
            });

            if (this.state.appState.activeSlide === 0) {
                this.state.imageEffect.animateHoles(5, 'hide');
                this.hideItemsWithAnimation()
                    .then(() => {
                        this.disableMenu();
                        this.state.zoomEffect.animateShowLogo();
                        this.swipeToRightBackground()
                            .then(() => {
                                this.store.commit('appStateMutate', {
                                    animationIsActive: false
                                });
                            });

                    });
            } else {
                let id = this.state.appState.activeSlide + 1;

                this.state.imageEffect.animateToNext(5, this.state.appState.activeSlide, 600);

                this.hideItemsWithAnimation()
                    .then(() => {
                        this.disableMenu();
                        this.state.sectionScroll.showSectionWithSlidedown(id)
                            .then(() => {
                                this.store.commit('appStateMutate', {
                                    animationIsActive: false
                                });
                            });
                    });
            }
        }
    }
}

/**
 * Меню выезжает справа.
 *
 * @async
 * @returns {promise}
 */

Menu.prototype.swipeMenuFromRight = function () {
    let bg = document.querySelector('.menu');
    console.log(bg)
    return new Promise(resolve => {
        anime({
            targets: bg,
            translateX: ['100%', '0%'],
            duration: 800,
            elasticity: 0,
            easing: [0.790, 0.010, 0.655, 0.990],
            before(){
                bg.classList.add('active');
            },
            complete: resolve
        });
    });
}

/**
 * Меню выезжает вправо.
 *
 * @async
 * @returns {promise}
 */

Menu.prototype.swipeMenuToRight = function () {
    let bg = document.querySelector('.menu');
    return new Promise(resolve => {
        anime({
            targets: bg,
            translateX: ['0%', '100%'],
            duration: 800,
            elasticity: 0,
            easing: [0.790, 0.010, 0.655, 0.990],
            before(){
                bg.classList.add('active');
            },
            complete: resolve
        });
    });
}

/**
 * Меню выезжает справа. Функция для открытия
 * на главной странице на первом слайде.
 *
 * @async
 * @returns {promise}
 */

Menu.prototype.swipeFromRightBackground = function () {
    let bg = document.querySelector('.webgl-backgrounds');
    return new Promise(resolve => {

        this.state.imageEffect.mat.uniforms.currentTextureStart.value = 5;
        this.state.imageEffect.mat.uniforms.currentTextureEnd.value = 5;
        this.state.imageEffect.renderSceneOnce(5);
        this.state.zoomEffect.animateHideLogo();
        anime({
            targets: bg,
            translateX: ['100%', '0%'],
            duration: 800,
            elasticity: 0,
            easing: [0.790, 0.010, 0.655, 0.990],
            complete: resolve
        });
    });
}

/**
 * Меню выезжает вправо. Функция для закрытия
 * на главной странице на первом слайде.
 *
 * @async
 * @returns {promise}
 */

Menu.prototype.swipeToRightBackground = function () {
    let bg = document.querySelector('.webgl-backgrounds');
    return new Promise(resolve => {
        anime({
            targets: bg,
            translateX: ['0%', '100%'],
            duration: 800,
            elasticity: 0,
            easing: [0.790, 0.010, 0.655, 0.990],
            complete: resolve
        })
    });
}

/**
 * Анимация появление элементов меню.
 *
 * @async
 * @returns {promise}
 */

Menu.prototype.showItemsWithAnimation = function () {

    return new Promise(resolve => {
        let timeline = anime.timeline();
        let _this = this;
        timeline
            .add({
                targets: _this.elements.listItemsSvg,
                strokeDashoffset: [1000, 0],
                duration: 2000,
                easing: 'linear',
                delay (el, i) {
                    return i * 50;
                }
            })
            .add({
                targets: _this.elements.image,
                opacity: [0, 1],
                translateY: [150, 0],
                duration: 500,
                elasticity: 0,
                easing: 'easeOutSine',
                offset: 400,
                complete () {
                    document.querySelector('.menu-images__waves')
                        .classList.add('waves-animation');
                }
            })
            .add({
                targets: this.elements.footerLines,
                scaleX: [0, 1],
                duration: 400,
                easing: 'easeOutSine',
                elasticity: 0,
                offset: 600
            })
            .add({
                targets: this.elements.footerLinesFront,
                scaleX: [1, 0],
                duration: 400,
                easing: 'easeOutSine',
                elasticity: 0,
                offset: 1000
            })
            .add({
                targets: this.elements.footerSocials,
                scale: [0, 1],
                rotate: [-45, 0],
                duration: 400,
                easing: 'easeOutQuint',
                elasticity: 1000,
                offset: 1000,
                delay (el, i) {
                    return i * 100
                },
                complete: resolve
            })
    });
}

/**
 * Анимация скрытия элементов меню.
 *
 * @async
 * @returns {promise}
 */

Menu.prototype.hideItemsWithAnimation = function () {
    return new Promise(resolve => {
        let timeline = anime.timeline();
        let listItemsSvg = Array.from(this.elements.listItemsSvg).reverse();
        let _this = this;

        document.querySelector('.menu-images__waves')
            .classList.add('waves-hide');

        timeline
            .add({
                targets: listItemsSvg,
                strokeDashoffset: [0, 1000],
                duration: 800,
                easing: 'linear',
                offset: 0
            })
            .add({
                targets: _this.elements.image,
                opacity: [1, 0],
                translateY: [0, 150],
                duration: 500,
                elasticity: 0,
                easing: 'easeOutSine',
                offset: 200
            })
            .add({
                targets: this.elements.footerLinesFront,
                scaleX: [0, 1],
                duration: 400,
                easing: 'easeOutSine',
                elasticity: 0,
                offset: 0
            })
            .add({
                targets: this.elements.footerLines,
                scaleX: [1, 0],
                duration: 400,
                easing: 'easeOutSine',
                elasticity: 0,
                offset: 400,
                complete () {
                    removeWavesAnimations.call(document.querySelector('.menu-images__waves'));
                    resolve();
                }
            })
            .add({
                targets: this.elements.footerSocials,
                scale: [1, 0],
                rotate: [0, -45],
                duration: 400,
                easing: 'easeOutQuint',
                elasticity: 1000,
                offset: 0
            });
    });
}
