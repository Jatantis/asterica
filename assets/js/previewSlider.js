import * as anime from 'animejs'

export function previewSlider () {

    let photos = document.querySelectorAll('.reviews-slider__photo-item');

    let photosTrack = photos[0].parentElement;

    let logotypes = document.querySelectorAll('.reviews-slider__logo-item');

    let logotypesTrack = logotypes[0].parentElement;

    let descriptions = document.querySelectorAll('.reviews-slider__text-item');

    let descriptionsTrack = descriptions[0].parentElement;

    let persons = document.querySelectorAll('.reviews-slider__person-item');

    let personsTrack = persons[0].parentElement;

    let slidesLength = photos.length;

    let tracks = [photosTrack, logotypesTrack, descriptionsTrack, personsTrack];

    let prevButton = document.querySelector('.js-reviews-prev');

    let nextButton = document.querySelector('.js-reviews-next');

    let currentSlideNode = document.querySelector('.reviews-slider__current');

    let isBusy = false;

    let activeSlide = 1;

    prevButton.addEventListener('click', prevButtonHandler);

    nextButton.addEventListener('click', nextButtonHandler);

    window.addEventListener("resize", setSizes, false);

    this.unbindEvents = () => {
        prevButton.removeEventListener('click', prevButtonHandler);
        nextButton.removeEventListener('click', nextButtonHandler);
        window.removeEventListener("resize", setSizes, false);
    }


   function setNoAligofrenSize(){
     var elem = document.querySelectorAll('.reviews-slider__text-item')
     var parentEl = document.querySelector('.reviews-slider__text-track')
     var elFrame = document.querySelector('.reviews-slider__text')

         elem.forEach(el => {
             let parentWidth = parseInt(getComputedStyle(elFrame).width, 10);
             el.style.width = parentWidth + 'px';
         });
         parentEl.style.width = parseInt(getComputedStyle(elFrame).width, 10)*slidesLength + 'px'
         parentEl.style.transform = 'translateX(-'+ parseInt(getComputedStyle(elFrame).width, 10)*(activeSlide-1) +'px)';
   }

    /**
     * Устанавливает значения для треков слайдера.
     */
    function setSizes () {
      setNoAligofrenSize()
        tracks.forEach(el => {
            let parent = el.parentElement;
            let children = el.childNodes;
            let parentWidth = parseInt(getComputedStyle(parent).width, 10);
            el.style.width = parentWidth * slidesLength + 'px';
            setElementsSize(children, parentWidth)
        });
    }

    function setElementsSize (nodeList, parentWidth) {
        let elements = Array.from(nodeList);

        elements.forEach(el => {
            if (el.nodeType === Node.ELEMENT_NODE) {
                el.style.width = `${parentWidth}px`;
            }
        })
    }

    /**
     * Срабатывает при нажатии стрелочки "влево".
     */

    function prevButtonHandler () {
      setSizes ()
        if (isBusy || activeSlide === 1) return;

        isBusy = true;

        currentSlideNode.innerText = activeSlide < 10 ? `0${--activeSlide}` : --activeSlide;

        animate(photosTrack, 0, 550, 0);
        animate(logotypesTrack, 0, 550, 0);
        animate(descriptionsTrack, 0, 550, 0);
        animate(personsTrack, 0, 550, 0)
            .then(() => {
                isBusy = false;
            });
    }

    /**
     * Срабатывает при нажатии стрелочки "вправо".
     */

    function nextButtonHandler () {
      setSizes ()
        if (isBusy || activeSlide === slidesLength) return;

        isBusy = true;

        currentSlideNode.innerText = activeSlide < 10 ? `0${++activeSlide}` : ++activeSlide;

        animate(photosTrack, 1, 550, 0);
        animate(logotypesTrack, 1, 550, 0);
        animate(descriptionsTrack, 1, 550, 0);
        animate(personsTrack, 1, 550, 0)
            .then(() => {
                isBusy = false;
            });
    }

    /**
     *
     * @param {element} element Анимируемый трек
     * @param {number} direction 1 - вперёд, 0 - назад
     * @param {number} duration Длительность анимации
     * @param {number} delay Задержка анимации
     */

    function animate (element, direction, duration, delay) {
        return new Promise (resolve => {
            let value = parseInt(getComputedStyle(element.parentElement).width, 10);

            value = direction === 1 ? `-=${value}` : `+=${value}`;

            anime({
                targets: element,
                translateX: value,
                easing: 'easeOutSine',
                elasticity: 200,
                duration,
                delay,
                complete: resolve
            })
        })
    }

    setSizes();
}
