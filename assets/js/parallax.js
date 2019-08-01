/**
 * Наш параллаксик :^)
 * 
 * @param {element} section Секция, в которой находятся параллакс элементы
 * @param {boolean} onBodyHover Если true, то прослушивателем события будет body, иначе section
 */
export function Parallax (section, onBodyHover) {
    this.o = {
        // Контейнер
        s: section,
        // Элементы
        els: section.querySelectorAll('.js-parallax-element'),
        // Ширина секции
        sw: onBodyHover ? window.innerWidth : parseInt(getComputedStyle(section).width),
        // Высота секции
        sh: onBodyHover ? window.innerHeight : parseInt(getComputedStyle(section).height),
        // Положение курсора Y
        sy: null,
        // Положение курсора X
        sx: null,
        // Множитель по X
        factorX: null,
        // Множитель по Y
        factorY: null
    }

    // requestAnimationFrame id
    this.rqAnF;

    // Прослушиватель события
    this.hoverTarget = onBodyHover ? document.body : this.o.s;

    // Названия data-атрибутов
    this.D = {
        MOVE_X: 'parallaxMoveX',
        MOVE_Y: 'parallaxMoveY',
        ROTATE_X: 'parallaxRotateX',
        ROTATE_Y: 'parallaxRotateY',
        INVERT: 'parallaxInvert',
        /**
        * @todo Сделать invert для каждого значения отдельно, если не указан parallaxInvert
        */
        INVERT_MOVE_X: 'parallaxInvertMoveX',
        INVERT_MOVE_Y: 'parallaxInvertMoveY',
        INVERT_ROTATE_X: 'parallaxInvertRotateX',
        INVERT_ROTATE_Y: 'parallaxInvertRotateY',
    }

    this.bindedMousemoveHandler = this.mousemoveHandler.bind(this);

    this.hoverTarget.addEventListener('mousemove', this.bindedMousemoveHandler);
}

Parallax.prototype.getCoords = function (e) {
    this.o.sy = e.clientY;
    this.o.sx = e.clientX;

    this.o.factorX = this.o.sx / this.o.sw - 0.5;
    this.o.factorY = this.o.sy / this.o.sh - 0.5;
}

Parallax.prototype.perspective = function () {
    return 'perspective(3000px)';
}

Parallax.prototype.moveX = function (el, invert) {
    return 'translateX(' + this.o.factorX * el.dataset[this.D.MOVE_X] * invert + 'px) ';
}

Parallax.prototype.moveY = function (el, invert) {
    return 'translateY(' + this.o.factorY * el.dataset[this.D.MOVE_Y] * invert + 'px) ';
}

Parallax.prototype.rotateX = function (el, invert) {
    return 'rotateX(' + this.o.factorY * el.dataset[this.D.ROTATE_X] * invert + 'deg) ';
}

Parallax.prototype.rotateY = function (el, invert) {
    return 'rotateY(' + this.o.factorX * el.dataset[this.D.ROTATE_Y] * invert + 'deg) ';
}

Parallax.prototype.move = function () {

    for (let i = 0; i < this.o.els.length; i++) {
        let el = this.o.els[i];

        let elementCSSValue = '';

        let invert = 1;

        if (el.dataset[this.D.INVERT] == 1) {
            invert = -1;
        }

        elementCSSValue += this.perspective();

        if (el.dataset[this.D.MOVE_X]) {
            elementCSSValue += this.moveX(el, invert);
        }

        if (el.dataset[this.D.MOVE_Y]) {
            elementCSSValue += this.moveY(el, invert);
        }

        if (el.dataset[this.D.ROTATE_X]) {
            elementCSSValue += this.rotateX(el, invert);
        }

        if (el.dataset[this.D.ROTATE_Y]) {
            elementCSSValue += this.rotateY(el, invert);
        }

        function animate () {
            el.style.transform = elementCSSValue;
        }

        this.rqAnF = requestAnimationFrame(animate);
    }
}

Parallax.prototype.animate = function (el, value) {
    el.style.transform = value;
}

Parallax.prototype.mousemoveHandler = function (e) {
    this.getCoords(e);
    this.move();
};

Parallax.prototype.destroy = function () {
    cancelAnimationFrame(this.rqAnF);
    for (let i = 0; i < this.o.els.length; i++) {
        this.o.els[i].removeAttribute('style');
    }
    this.hoverTarget.removeEventListener('mousemove', this.bindedMousemoveHandler);
    for (const key in this.D) {
        delete this.D[key];
    }
    for (const key in this.o) {
        delete this.o[key];
    }
}