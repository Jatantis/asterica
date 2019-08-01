/**
 * Параллакс эффект для элементов.
 *
 * @param {element} section Секция
 * @param {element} section Элемент
 */

import * as anime from 'animejs'
import {decryptLetters, onLabelTextTransitionEnd, showSocials, showTextWithBg} from "./animateFunctions";
import {Parallax} from "./parallax";


export function parallaxScroll(options) {

    let opts = {
        section: options.section,
        element: options.element,
        direction: options.direction, // X или Y,
        from: options.from, // Начальное значение
        to: options.to // Конечно значение
    };
    let rAf = null;
    let sectionOffsetTop = opts.section.getBoundingClientRect().top + window.pageYOffset;

    let sectionHeight = parseInt(getComputedStyle(opts.section).height, 10);

    let scrollTopWithScreenHeight = window.pageYOffset + document.documentElement.clientHeight;

    // Прогресс скролла относительно элемента.

    let innerScroll = scrollTopWithScreenHeight - sectionOffsetTop;

    // Прогресс скролла относительно элемента в процентах.

    let scrollProgress = Math.round(100 / (sectionHeight / innerScroll));

    let onePercent = (opts.from - opts.to) / 100;

    if (onePercent < 0) {
        onePercent = -onePercent;
    }

    let parallaxValue;

    function scrollHandler () {
        scrollTopWithScreenHeight = window.pageYOffset + document.documentElement.clientHeight;

        if (scrollTopWithScreenHeight > sectionOffsetTop && scrollTopWithScreenHeight < sectionOffsetTop + sectionHeight) {
            innerScroll = scrollTopWithScreenHeight - sectionOffsetTop;

            scrollProgress = Math.round(100 / (sectionHeight / innerScroll));

            if (opts.from > opts.to) {
                parallaxValue = opts.from - scrollProgress * onePercent;
            } else {
                parallaxValue = opts.from + scrollProgress * onePercent;
            }
            requestAnimationFrame(animate);
        }

    }



    function animate () {
        if (opts.direction === 'y') {
            opts.element.style.transform = `translateY(${parallaxValue}px)`;
        } else if (opts.direction === 'x') {
            opts.element.style.transform = `translateX(${parallaxValue}px)`;
        }
    }
        window.addEventListener('touch', scrollHandler);

}

/**
 * Параллакс эффект, который срабатывает для первой секции
 * при скролле.
 */

export function companyScrollParallax () {
    let sectionHeight = document.documentElement.clientHeight;

    let scrollTop = window.pageYOffset;

    let progress = 0;

    let elementsArray = [];

    // Запихиваем все элементы коллекции в массив,
    // чтобы потом не обращаться к DOM напрямую.

    Array.from(document.querySelectorAll('.js-company-parallax-scroll')).forEach(el => {
        elementsArray.push({
            el,
            modY: parseInt(el.dataset.parallaxScrollYMod, 10)
        })
    });

    // Переменная для дебаунса функции при скролле.

    let scrollTimeout = null;

    // Подготовка элементов для параллакса.

    elementsArray.forEach(el => {
        el.el.style.transitionDelay = 'initial';
        el.el.style.transform = 'translateY(0px)';
        el.el.style.transitionDuration = '300ms';
        el.el.style.transitionTimingFunction = 'ease-out';
    });

    function animate () {
        elementsArray.forEach(el => {
            if (progress === 0) {
                el.el.style.transform = `translateY(-${progress}px)`;
            } else {
                el.el.style.transform = `translateY(-${progress + el.modY * 4}px)`;
            }
        });
    }

    let debounce = 30;

    // Срабатывает каждый раз при прокрутке, но внутренности
    // работают только раз в debounce мс.

    function scrollHandler () {
        if (scrollTimeout) return;

        scrollTop = window.pageYOffset;

        if (scrollTop > sectionHeight) return;

        setTimeout(() => {
            progress = Math.round(100 / (sectionHeight / scrollTop));

            requestAnimationFrame(animate);

            scrollTimeout = null;
        }, debounce);
    }

    window.addEventListener('scroll', scrollHandler);
}

/**
 * Функция, которая при скролле запускает
 * анимацию появления для текущей секции.
 */



export function companyScrollAnimations (outerContext) {

    let store = outerContext.$store,
        state = outerContext.$store.state;

    /**
     * Секции
     */
    let stack = document.querySelector('.technology-stack');

    let reviews = document.querySelector('.reviews');

    let form = document.querySelector('.request-form');

    let container = document.querySelector('.scrollable-content');

    /**
     * Массив секций.
     * animateFunction - функция анимации для текущей секции.
     */

    let array = [{
        element: stack,
        animateFunction: stackAnimation,
        offsetTop: stack.getBoundingClientRect().top + container.scrollTop,
        height: parseInt(getComputedStyle(stack).height, 10)
    }, {
        element: reviews,
        animateFunction: reviewsAnimation,
        offsetTop: reviews.getBoundingClientRect().top + container.scrollTop,
        height: parseInt(getComputedStyle(reviews).height, 10)
    }, {
        element: form,
        animateFunction: formAnimation,
        offsetTop: form.getBoundingClientRect().top + container.scrollTop,
        height: parseInt(getComputedStyle(form).height, 10)
    }];

    let scrollTop;

    let scrollTimeout = null;



    /**
     * Запускается каждый раз при скролле.
     * Выполняется с дебаунсом.
     * Если секция скоро будет на экране,
     * то запустить функцию анимации для текущей секции и удалить эту
     * секцию из массива.
     */

    function scrollHandler () {
        if (scrollTimeout) return;

        if (array.length === 0) {
            container.removeEventListener('scroll', scrollHandler);
        }

        scrollTimeout = setTimeout(() => {
            scrollTop = container.scrollTop + document.documentElement.clientHeight*1.8;

            for (let i = 0; i < array.length;) {
                const el = array[i];

                if (el.offsetTop <= scrollTop && el.offsetTop + el.height >= container.scrollTop) {
                    el.animateFunction.call(el.element);
                    array.splice(i, 1);
                } else {
                    i++;
                }
            }
            scrollTimeout = null;
        }, 30);
    }

    container.addEventListener('scroll', scrollHandler);
    let contentTransitor = new transitor(container);

    function transitor (root) {

        let target = root;
        let movableContainer = root.parentElement;
        let swapAllowed = false;
        let bg = target.querySelector('.root-scrollable');

        function toContentTransition (target) {
            anime({
                targets: target,
                translateY: ['100vh', 0],
                easing: 'easeOutQuint',
                elasticity: 0,
                duration: 1500,
                begin() {
                    store.commit('appStateMutate', {
                        animationIsActive: true,
                        activeSlide: 2
                    });
                },
                complete() {
                    store.commit('appStateMutate', {
                        animationIsActive: false
                    });
                    document.querySelector('.section-static-promo .container').style.display = "none";
                    if (bg) {
                        bg.classList.add("root-scrollable_fixed");
                    }
                    if (teamAnimation) {
                        teamAnimation();
                        teamAnimation = null;
                    }

                }
            })
        }

        function fromContentTransition (target) {
            anime({
                targets: target,
                translateY: [0, '100vh'],
                easing: 'easeOutQuint',
                elasticity: 0,
                duration: 1500,
                begin() {
                    document.querySelector('.section-static-promo .container').style.display = "block";
                    if (bg) {
                        bg.classList.remove("root-scrollable_fixed");
                    }
                    store.commit('appStateMutate', {
                        animationIsActive: true,
                        activeSlide: 1
                    });
                    swapAllowed = false;
                },
                complete() {
                    store.commit('appStateMutate', {
                        animationIsActive: false
                    });

                }
            })
        }

        let sectionSwapTT = createTimeoutTrap(() => {
            swapAllowed = true;
        }, 100);

        let wheelTT = createTimeoutTrap((e)=>{

            if (!state.appState.navLocked) {
                if (e.deltaY > 0) {
                    if (state.appState.activeSlide === 1) {
                        target.scrollTop = 0;
                        toContentTransition(movableContainer);
                    }
                } else {
                    if (state.appState.activeSlide === 2 && target.scrollTop == 0) {
                        if (swapAllowed) {
                            fromContentTransition(movableContainer);
                        } else {
                            sectionSwapTT();
                        }
                    }
                }
            }
        }, 30);

        document.body.addEventListener('wheel', wheelTT);







         var firstTimeTouch
            function touchStartEvent(e){
                firstTimeTouch = e.touches[0].clientY;
            }

            function touchMoveEvent(e){
              var moved = e.changedTouches[0].clientY;


              if (!state.appState.navLocked) {
                  if (firstTimeTouch > moved+5 ) {
                      if (state.appState.activeSlide === 1) {
                          target.scrollTop = 0;
                          toContentTransition(movableContainer);
                      }
                  } else {
                      if (state.appState.activeSlide === 2 && target.scrollTop == 0) {
                          if (swapAllowed) {
                              fromContentTransition(movableContainer);
                          } else {
                              sectionSwapTT();
                          }
                      }
                  }
              }

            }

        window.addEventListener('touchstart', touchStartEvent);
        window.addEventListener('touchend', touchMoveEvent);


        this.destroy = function () {
            document.body.removeEventListener('wheel', wheelTT);
            window.removeEventListener('touchstart', touchStartEvent);
            window.removeEventListener('touchend', touchMoveEvent);
        }
    }

    /**
     * Анимация появления для секции "Команда"
     */

    function teamAnimation () {
        decryptLetters(document.querySelector('.team__title'), 800);
        let timeline = anime.timeline();
        setTimeout(() => {
          timeline
            .add({
                targets: '.team_face, .team_bg_lines',
                scale: [0, 1],
                duration: 400,
                easing: 'easeOutSine',
                elasticity: 250,
                offset: 0
            })
            .add({
                targets: '.homo-sapiens__info .text-with-bg__line',
                scaleX: [0, 1],
                duration: 400,
                easing: 'easeOutSine',
                elasticity: 0,
                offset: 400
            })
            .add({
                targets: '.text-with-bg__front',
                scaleX: [1, 0],
                duration: 400,
                easing: 'easeOutSine',
                elasticity: 0,
                offset: 800
            })
            .add({
                targets: '.company-job',
                opacity: [0, 1],
                duration: 600,
                easing: 'easeOutSine',
                elasticity: 0,
                offset: 1200
            })
        })
    }

    /**
     * Анимация появления для секции "Что умеем"
     */

    function stackAnimation () {
        let parallax;

        this.classList.add('optimize-animations');

        setTimeout(() => {
            decryptLetters(
                document.querySelector('.technology-stack .title_huge'),
                800
            );

            setTimeout(() => {
                anime({
                    targets: '.technology-stack__subtitle',
                    opacity: [0, 1],
                    duration: 600,
                    elasticity: 0,
                    easing: 'easeOutSine',
                });
                setTimeout(() => {
                    showTextWithBg('.technology-stack')
                        .then(() => {
                            this.classList.remove('optimize-animations');

                            parallax = new Parallax(
                                document.querySelector('.technology-stack'),
                                true
                            );
                        });
                }, 200);
            }, 800);
        }, 200);
    }

    /**
     * Анимация появления для секции "Отзывы"
     */

    function reviewsAnimation () {
        this.classList.add('optimize-animations');

        let self = this;

        let timeline = anime.timeline();

        setTimeout(() => {
            decryptLetters(document.querySelector('.reviews .title_huge'), 800);

            setTimeout(() => {
                timeline
                    .add({
                        targets: '.reviews-slider__image',
                        scaleX: [0, 1],
                        duration: 400,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 0
                    })
                    .add({
                        targets: '.reviews-slider__image-bg',
                        scaleX: [1, 0],
                        duration: 400,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 400
                    })
                    .add({
                        targets: '.reviews-slider__logo',
                        scaleX: [0, 1],
                        duration: 400,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 100
                    })
                    .add({
                        targets: '.reviews-slider__logo-bg',
                        scaleX: [1, 0],
                        duration: 400,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 500
                    })
                    .add({
                        targets: '.reviews-slider__quotes',
                        opacity: [0, 1],
                        translateY: [200, 0],
                        duration: 600,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 0,
                        complete () {
                            parallaxScroll({
                                section: document.querySelector('.reviews-slider__images-wrapper'),
                                element: document.querySelector('.reviews-slider__logo'),
                                direction: 'y',
                                from: 200,
                                to: 0
                            });

                            parallaxScroll({
                                section: document.querySelector('.reviews-slider__info'),
                                element: document.querySelector('.reviews-slider__quotes'),
                                direction: 'x',
                                from: 150,
                                to: 0
                            });
                        }
                    })
                    .add({
                        targets: '.reviews-slider__text',
                        opacity: [0, 1],
                        translateY: [200, 0],
                        duration: 800,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 0
                    })
                    .add({
                        targets: '.reviews-slider__person',
                        opacity: [0, 1],
                        translateY: [200, 0],
                        duration: 1000,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 0
                    })
                    .add({
                        targets: '.reviews-slider__action',
                        opacity: [0, 1],
                        translateY: [200, 0],
                        duration: 1200,
                        easing: 'easeOutSine',
                        elasticity: 0,
                        offset: 0,
                        complete () {
                            self.classList.remove('optimize-animations');
                        }
                    })
            }, 800);
        }, 200);
    }

    /**
     * Анимация появления для секции "Оставить заявку"
     */

    function formAnimation () {
        Array.from(document.querySelectorAll('.company-form .form__label-text'))
            .forEach(el => {
                el.addEventListener('transitionend', onLabelTextTransitionEnd);
            });
        setTimeout(() => {
            decryptLetters(document.querySelector('.request-form .title_huge'), 800);

            setTimeout(() => {
                showTextWithBg('.request-form__desc');

                // Анимация формы посредством CSS
                setTimeout(() => {
                    this.classList.add('animate');
                }, 800);

                setTimeout(() => {
                    showTextWithBg('.request-form .contacts');
                    showSocials('.request-form .contacts');

                }, 500);
            }, 800);
               document.querySelector('.request-form').classList.add('animate');
        }, 200);
    }

    this.unbindEvents = function() {
        container.removeEventListener('scroll', scrollHandler);
        contentTransitor.destroy();
        Array.from(document.querySelectorAll('.company-form .form__label-text'))
            .forEach(el => {
                el.removeEventListener('transitionend', onLabelTextTransitionEnd);
            });
    }
}


export function createTimeoutTrap(callback, delay, unite = null) {

    if (unite === null) {
        let tid = null;
        return (...args) => {
            if (tid) return;
            tid = setTimeout(()=>{
                callback(...args);
                tid = null;
            },delay);
        }
    } else {
        return (...args) => {
            if (unite.value) return;
            unite.value = setTimeout(()=>{
                callback(...args);
                unite.value = null;
            },delay);
        }
    }

}
