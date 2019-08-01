import * as anime from 'animejs'

/**
 * Эффект шифровки строки.
 * Обычно используется при анимации ухода.
 *
 * @param {element} element Нужный элемент (у него обязательно должен быть data-text)
 * @param {*} duration Длительность анимации
 */

export function encryptLetters(domElement, duration) {

    let chars = ['ᛡ', '•', '°'];

    let arrayFromString = domElement.dataset.text.split('');

    let newArray = [...arrayFromString];

    let crypted = [];

    let string = [];

    let promise = new Promise(resolve => {
        for (let i = 1; i <= arrayFromString.length; i++) {
            setTimeout(function () {
                crypted.push(i);
                for (let count = 0; count < crypted.length; count++) {
                    string.push(chars[anime.random(0, chars.length - 1)]);
                }
                newArray.splice(newArray.length - i, newArray.length, ...string);
                domElement.innerHTML = newArray.join('');
                string = [];
                if (crypted.length === newArray.length) resolve();
            }, duration / arrayFromString.length * i);
        }
    });

    promise.then(result => {
        let tmp = newArray;
        for (let i = 0; i < arrayFromString.length; i++) {
            setTimeout(() => {
                newArray.pop();
                domElement.innerHTML = newArray.join('');
            }, duration / arrayFromString.length * i);
        }
        setTimeout(()=>{
            domElement.style.opacity = 0;
            domElement.innerHTML = tmp.join('');
        }, duration+30)
    });
}

/**
 * Эффект дешифровки строки.
 * Обычно используется при анимации прихода.
 *
 * @param {*} element
 * @param {*} duration
 */

export function decryptLetters(domElement, duration) {
    let chars = ['ᛡ', '•', '°'];
    let arrayFromString = domElement.dataset.text.split('');

    let newArray = [];

    arrayFromString.forEach(function (el, index, array) {
        newArray.push(chars[anime.random(0, chars.length - 1)]);
    });

    domElement.innerHTML = newArray.join('');

    newArray = [];

    domElement.style.opacity = 1;
    arrayFromString.forEach(function (el, index, array) {
        setTimeout(function () {
            newArray[index] = el;
            for (let i = index + 1; i < arrayFromString.length; i++) {
                newArray[i] = chars[anime.random(0, chars.length - 1)];
            }
            domElement.innerHTML = newArray.join('');
        }, duration / array.length * index);
    });


}

export function staticTranslate(domElement) {
    domElement.innerHTML = domElement.dataset.text;
}

/**
 * Анимирует появление элементов из дырочек :^)
 *
 * @param {string} containerElement Элемент, из центра которого будут вылетать картинки.
 */

export function animateItemsFromSpot(containerElement) {

    // Вылетающие картинки.
    let images = Array.from(document.querySelectorAll('.spot-item'));

    // Логическое значение для определения разрешённости анимации.
    let animatable = true;

    // Направление полёта (1 - вверх, 2 - вправо, 3 - вниз, 4 - влево).
    let mainProperty;

    // Значение сдвига.
    let mainPropertyValue;

    // Дополнительное направление.
    let extraProperty;

    // Значение сдвига доп направления.
    let extraPropertyValue;

    // Угол наклона.
    let rotateValue;

    function init() {
        let container = document.querySelector(containerElement);

        let containerW = parseInt(getComputedStyle(container).width, 10);

        let containerH = parseInt(getComputedStyle(container).height, 10);

        let containerOffset = container.getBoundingClientRect();

        // Выравнивание картиночек относительно элемента, из которого они будут вылетать.
        images.forEach(el => {
            el.style.transform = 'translate3d(0,0,0) scale(0)';

            el.style.top = (containerOffset.top + (containerH / 2)
                - (parseInt(getComputedStyle(el).height, 10) / 2)) + 'px';

            el.style.left = (containerOffset.left + (containerW / 2))
                - (parseInt(getComputedStyle(el).height, 10) / 2) + 'px';
        });
    }

    init();

    let timer = setTimeout(function animateItem() {

        // Псевдолучайное число для определения направления.
        let randomNumber = anime.random(0, images.length - 1);

        // Анимируемый элемент.
        let item = images.splice(randomNumber, 1)[0];

        // Оффсет элемента относительно окна браузера.
        let itemOffset = item.getBoundingClientRect();
        let x,y;
        let ani_cont = {
            X: 0,
            Y: 0,
            rotate: 0,
            scale: 0
        }
        // Определение направления.
        switch (anime.random(1, 4)) {
            // Элемент улетает вверх.
            case 1:
                y = -(itemOffset.bottom + 300);
                x = anime.random(-500, 500);
                rotateValue = anime.random(-90, -180);
                break;
            // Элемент улетает вправо.
            case 2:
                x = screen.width - itemOffset.left + 300;
                y = anime.random(-500, 500);
                rotateValue = anime.random(90, 180);
                break;
            // Элемент улетает вниз.
            case 3:
                y = itemOffset.top + 300;
                x = anime.random(-500, 500);
                rotateValue = anime.random(90, 180);
                break;
            // Элемент улетает влево.
            case 4:
                x = -(itemOffset.left + 300);
                y = anime.random(-500, 500);
                rotateValue = anime.random(-90, -180);
                break;
        }

        // Длительность анимации
        let duration = anime.random(1250, 1750);

        // Анимация полёта.
        let animation = anime({
            targets: ani_cont,
            X: x,
            Y: y,
            scale: {
                value: [0, 0.5],
                delay: 0,
                duration: 400,
                easing: 'easeInSine',
                elasticity: 0
            },
            rotate: rotateValue,
            easing: 'easeOutSine',
            duration,
            update() {
                item.style.transform = `translate3d(${ani_cont.X}px,${ani_cont.Y}px,0) scale(${ani_cont.scale})`;
            }
        });

        // По окончании анимации.
        animation.finished.then(() => {
            if (animatable) {
                item.style.transform = 'translate3d(0,0,0) scale(0)';

                images.push(item);

                timer = setTimeout(animateItem, anime.random(100, 1000));
            }
        });
    }, 400);

    // Удаление анимации.
    this.destroy = function () {
        animatable = images = rotateValue = undefined;
        clearTimeout(timer);
    }
}

// Удаление анимаций с волн при уходе с их слайда.

export function removeWavesAnimations () {
    this.classList.remove('waves-animation');
    this.classList.remove('waves-hide');
}

/**
 * Функция для анимации появления строк с черными линиями.
 *
 * @param {string} parent Родительский селектор
 *
 * @async
 * @returns {promise}
 */
export function showTextWithBg (parent) {
    let timeline = anime.timeline();
    return new Promise (resolve => {
        timeline
            .add({
                targets: `${parent} .text-with-bg__line`,
                scaleX: [0, 1],
                duration: 400,
                elasticity: 0,
                easing: 'easeOutSine'
            })
            .add({
                targets: `${parent} .text-with-bg__front`,
                scaleX: [1, 0],
                duration: 400,
                elasticity: 0,
                easing: 'easeOutSine'
            })
            .add({
                targets: `${parent} .text-with-bg__back`,
                scaleY: [0, 1],
                duration: 400,
                elasticity: 0,
                easing: 'easeOutSine',
                complete: resolve
            });
    });
}

/**
 *
 * @param {string} parent Родительский селектор
 *
 * @async
 * @returns
 */

export function hideTextWithBg (parent) {
    let timeline = anime.timeline();

    return new Promise (resolve => {
        timeline
            .add({
                targets: `${parent} .text-with-bg__front`,
                scaleX: [0, 1],
                duration: 400,
                elasticity: 0,
                easing: 'easeOutSine',
            })
            .add({
                targets: `${parent} .text-with-bg__line`,
                scaleX: [1, 0],
                duration: 400,
                elasticity: 0,
                easing: 'easeOutSine',
                complete: resolve
            });
    });
}

export function showSocials (parent) {
    anime({
        targets: `${parent} .socials__item`,
        scale: [0, 1],
        rotate: [-45, 0],
        duration: 400,
        easing: 'easeOutQuint',
        elasticity: 1000,
        delay: function (target, i) {
            return i * 100;
        }
    });
}

/**
 * Запускается, когда анимация появления у формы проигрывается.
 *
 * @param {event} e
 */

export function onLabelTextTransitionEnd (e) {
    if (e.propertyName === 'opacity') {
        this.classList.add('transition-end');
    }
}

/**
 * Анимирует волну на главной (номер текущего слайда).
 */

export function morphWave () {
    anime({
        targets: '.page-number .js-wave-path',
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
        duration: 13000,
        easing: 'linear',
        elasticity: 1000,
        delay: 0,
        loop: true
    });
}

export function removeWave() {
    anime.remove('.page-number .js-wave-path');
}

export function PortfolioSlider(nameArray, context) {
    let y;
    let currentSlide = 1;

    let slidesLength = document.querySelectorAll('.portfolio-preview').length;

    let tracks = Array.from(document.querySelectorAll(
        '.portfolio-preview-track, .portfolio-bg-track, .portfolio-image-track'
    ));

    let titleType = document.querySelector('.portfolio-slider__type');
    let titleName = document.querySelector('.portfolio-slider__name');

    let previewWidth =
        parseInt(getComputedStyle(document.querySelector('.portfolio-slider__preview')).width, 10);

    let bgHeight =
        parseInt(getComputedStyle(document.querySelector('.portfolio-slider__bg')).height, 10);

    let imageHeight =
        parseInt(getComputedStyle(document.querySelector('.portfolio-slider__top-images')).height, 10);

    let photoWidth = parseInt(getComputedStyle(document.querySelector('.portfolio-preview')).width, 10);

    let currentSlideNumber = document.querySelector('.js-current-slide');

    let isBusy = false;

    let prevButton = document.querySelector('.js-prev-case');

    let nextButton = document.querySelector('.js-next-case');

    // Устанавливаем длину трека превью

    document.querySelector('.portfolio-preview-track')
        .style.width = slidesLength * previewWidth + 'px';

    // Устанавливаем длину трека бг

    document.querySelector('.portfolio-bg-track')
        .style.height = slidesLength * bgHeight + 'px';

    // Устанавливаем длину трека картинок

    document.querySelector('.portfolio-image-track')
        .style.height = slidesLength * imageHeight + 'px';

    this.translate = function() {
        titleType.innerHTML = nameArray[currentSlide-1][context.lang].title;
        titleName.innerHTML = nameArray[currentSlide-1][context.lang].name;
    };

    function prevButtonHandler() {
        if (!isBusy) {
            if (currentSlide !== 1) {
                currentSlide--;
                currentSlideNumber.innerText = currentSlide >= 10 ? currentSlide : '0' + currentSlide;

                animateTrack('.portfolio-preview-track', previewWidth, 'X', 'right');
                animateTrack('.portfolio-bg-track', bgHeight, 'Y', 'bottom');
                animateTrack('.portfolio-image-track', imageHeight, 'Y', 'top');
;

                titleType.innerHTML = nameArray[currentSlide-1][context.lang].title;
                titleName.innerHTML = nameArray[currentSlide-1][context.lang].name;

                if (nextButton.attributes.disabled) {
                    nextButton.removeAttribute('disabled');
                }

                if (currentSlide === 1) {
                    this.setAttribute('disabled', '');
                } else {
                    this.removeAttribute('disabled');
                }
            }
        }
    }

    function nextButtonHandler() {
        if (!isBusy) {
            if (currentSlide !== slidesLength) {
                currentSlide++;
                currentSlideNumber.innerText = currentSlide >= 10 ? currentSlide : '0' + currentSlide;

                animateTrack('.portfolio-preview-track', previewWidth, 'X', 'left');
                animateTrack('.portfolio-bg-track', bgHeight, 'Y', 'top');
                animateTrack('.portfolio-image-track', imageHeight, 'Y', 'bottom');

                titleType.innerHTML = nameArray[currentSlide-1][context.lang].title;
                titleName.innerHTML = nameArray[currentSlide-1][context.lang].name;

                if (prevButton.attributes.disabled) {
                    prevButton.removeAttribute('disabled');
                }

                if (currentSlide === slidesLength) {
                    this.setAttribute('disabled', '');
                } else {
                    this.removeAttribute('disabled');
                }
            }
        }
    }

    // Оптимизация трансформаций

    document.querySelector('.scroll-sections').addEventListener('change', function (e) {
        if (e.detail.active + 1 === 4) {
            tracks.forEach(function (el) {
                el.classList.add('will-transform');
            });
        } else {
            if (tracks[0].classList.contains('will-transform')) {
                tracks.forEach(function (el) {
                    el.classList.remove('will-transform');
                });
            }
        }
    });

    /**
     * Анимирует трэк с элементами.
     * @param {string} target Селектор трэка.
     * @param {number} sizeValue Значение размерности элемента в треке.
     * @param {string} property Анимируемое свойство.
     * @param {string} direction Направлении анимации top/right/bottom/left.
     */

     function getNewSize(){
       previewWidth = parseInt(getComputedStyle(document.querySelector('.portfolio-slider__preview')).width, 10);
       bgHeight = parseInt(getComputedStyle(document.querySelector('.portfolio-slider__bg')).height, 10);
       imageHeight = parseInt(getComputedStyle(document.querySelector('.portfolio-slider__top-images')).height, 10);
                document.querySelector('.portfolio-preview-track')
                    .style.width = slidesLength * previewWidth;
                document.querySelector('.portfolio-bg-track')
                    .style.height = slidesLength * bgHeight + 'px';
                document.querySelector('.portfolio-image-track')
                    .style.height = slidesLength * imageHeight + 'px';
              // Normalize
                  document.querySelector('.scroll-sections').addEventListener('change', function (e) {
                      if (e.detail.active + 1 === 4) {
                          tracks.forEach(function (el) {
                              el.classList.add('will-transform');
                          });
                      } else {
                          if (tracks[0].classList.contains('will-transform')) {
                              tracks.forEach(function (el) {
                                  el.classList.remove('will-transform');
                              });
                          }
                      }
                  });
                 function calcPhotoWidth(callback){
                   document.querySelectorAll('.portfolio-preview').forEach(function(el){
                     el.style.width =  previewWidth +'px';
                   })
                   callback()
                }
                function pushTrackTranslate(){
                  let initMath = previewWidth * (currentSlide-1)
                  return document.querySelector('.portfolio-preview-track').style.transform = 'translateX(-'+initMath +'px)';
                }
        calcPhotoWidth(pushTrackTranslate)
   }

    function translateAfterDesctroy(){
      setTimeout(function(){
        currentSlide = 1;
        titleType.innerHTML = nameArray[currentSlide-1][context.lang].title;
        titleName.innerHTML = nameArray[currentSlide-1][context.lang].name;
        currentSlideNumber.innerText = '0' + currentSlide;
        document.querySelector('.portfolio-preview-track').style.transform = 'translateX( 0px)';
        document.querySelector('.portfolio-bg-track').style.transform = 'translateY( 0px)';
        document.querySelector('.portfolio-image-track').style.transform = 'translateY( 0px)';
      },800)
    }


    function animateTrack(target, sizeValue, property, direction) {

        let translateX;

        let translateY;

        if (property === 'Y') {
            translateY = direction === 'top' ? '-=' + sizeValue : '+=' + sizeValue;
            translateX = 0;
        }

        if (property === 'X') {
            translateY = 0;
            translateX = direction === 'left' ? '-=' + sizeValue : '+=' + sizeValue;
        }

        anime({
            targets: target,
            translateX: translateX,
            translateY: translateY,
            easing: 'easeInOutQuad',
            elasticity: 0,
            duration: 600,
            begin: function () {
                isBusy = true;
            },
            complete: function () {
                isBusy = false;
            }
        });
    }

    window.addEventListener("resize",getNewSize , false)
    prevButton.addEventListener('click', prevButtonHandler);
    nextButton.addEventListener('click', nextButtonHandler);

    this.destroy = function() {
        translateAfterDesctroy()
        window.removeEventListener('resize', getNewSize);
        prevButton.removeEventListener('click', prevButtonHandler);
        nextButton.removeEventListener('click', nextButtonHandler);
    }

}
