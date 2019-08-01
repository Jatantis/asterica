import * as THREE from 'three'
import * as anime from 'animejs'
export function SeparateMenuEffect (opts) {
    var _ = this;

    this.vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

    var fragment = `
        varying vec2 vUv;

        // Для бг
        uniform sampler2D menuBg;

        // Координаты дырок (выезжаем)
        uniform float menuSpotX;
        uniform float menuSpotY;


        //Корректоры для анимаций дырочек
        uniform float menuSpotWidthCorrectorDelta;
        uniform float menuSpotHeightCorrectorDelta;

        // Корректоры для дырочек :^)
        uniform float menuSpotWidthCorrector;
        uniform float menuSpotHeightCorrector;

        // Текстуры дырочек o3o
        uniform sampler2D section5Map;

        float getAlpha(vec2 uv,
            sampler2D texture,
            float spotX,
            float spotY,
            float widthCorrector,
            float heightCorrector,
            float widthCorrectorDelta,
            float heightCorrectorDelta
        ) {
            return texture2D(texture, vec2(
                widthCorrector * (uv.x - spotX - widthCorrectorDelta),
                heightCorrector * (uv.y - spotY - heightCorrectorDelta)
            )).r;
        }

        vec4 getRealTexel(vec2 uv,
            sampler2D global_texture,
            vec2 distortedPosition,

            sampler2D texture,
            float spotX,
            float spotY,
            float widthCorrector,
            float heightCorrector,
            float widthCorrectorDelta,
            float heightCorrectorDelta,

            //s_ - префикс параметров малой текстуры
            sampler2D s_texture,
            float s_spotX,
            float s_spotY,
            float s_widthCorrector,
            float s_heightCorrector,
            float s_widthCorrectorDelta,
            float s_heightCorrectorDelta
        ) {
            float alpha = getAlpha(uv, texture, spotX, spotY, widthCorrector, heightCorrector, widthCorrectorDelta, heightCorrectorDelta);
            float s_alpha = getAlpha(uv, s_texture, s_spotX, s_spotY, s_widthCorrector, s_heightCorrector, s_widthCorrectorDelta, s_heightCorrectorDelta);


            if ((1.0 - max(alpha, s_alpha)) < 0.2) {
                return vec4(0.0, 0.0, 0.0, 0.0);
            } else {
                return texture2D(global_texture, distortedPosition) * (1.0 - max(alpha, s_alpha));
            }

        }

         vec4 getRealTexel(vec2 uv,
            sampler2D global_texture,
            vec2 distortedPosition,

            sampler2D texture,
            float spotX,
            float spotY,
            float widthCorrector,
            float heightCorrector,
            float widthCorrectorDelta,
            float heightCorrectorDelta
        ) {
            float alpha = getAlpha(uv, texture, spotX, spotY, widthCorrector, heightCorrector, widthCorrectorDelta, heightCorrectorDelta);


            if ((1.0 - alpha) < 0.01 ) {
                return vec4(0.0, 0.0, 0.0, 0.0);
            } else {
                return texture2D(global_texture, distortedPosition) * (1.0 - alpha);
            }

        }

        void main() {

            // Для бг

            vec2 uv = vUv;

            gl_FragColor = getRealTexel(uv, menuBg, uv,

                section5Map,
                menuSpotX,
                menuSpotY,
                menuSpotWidthCorrector,
                menuSpotHeightCorrector,
                menuSpotWidthCorrectorDelta,
                menuSpotHeightCorrectorDelta
            );
        }
    `;


    let parent = opts.parent;
    this.intensity = '2';

    let scene = new THREE.Scene();

    let camera = new THREE.OrthographicCamera(
        parent.offsetWidth / -2,
        parent.offsetWidth / 2,
        parent.offsetHeight / 2,
        parent.offsetHeight / -2,
        1,
        1000
    );

    camera.position.z = 1;

    let renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true
    });

    renderer.domElement.classList.add('separate-page__menu');
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color(0xffffff), 0.0);
    renderer.setClearAlpha(0.0);

    renderer.setSize(parent.offsetWidth, parent.offsetHeight);
    parent.appendChild(renderer.domElement);

    _.loader = new THREE.TextureLoader();
    _.loader.crossOrigin = "";

    let menuBg = _.loader.load(opts.menuBg);
    let section5Map = _.loader.load(opts.section5Map);
    menuBg.magFilter = section5Map.magFilter = THREE.LinearFilter;
    menuBg.minFilter = section5Map.minFilter = THREE.LinearFilter;

    menuBg.anisotropy = section5Map.anisotropy = renderer.capabilities.getMaxAnisotropy();

    let canvas = {
        width: parseInt(getComputedStyle(renderer.domElement).width, 10),
        height: parseInt(getComputedStyle(renderer.domElement).height, 10)
    };

    let elementsCache = {
        dom: {},
        computedStyle: {},
        boundingClientRect: {}
    };

    let _document = document;

    this.animateQueue = [];

    let widthCorrector = {
        menuSpot: getCorrectWidth('.menu-images__spot'),
        delta: {
            menuSpot: 0
        }
    };

    let heightCorrector = {
        menuSpot: getCorrectHeight('.menu-images__spot'),
        delta: {
            menuSpot: 0
        }

    };

    let shrink = {
        menuSpot: 1000.0
    };


    function getCorrectWidth (string) {
        if (!elementsCache['dom'][string]) {
            elementsCache['dom'][string] = _document.querySelector(string);
        }
        if (!elementsCache['computedStyle'][string]) {
            elementsCache['computedStyle'][string] = getComputedStyle(elementsCache['dom'][string]);
        }
        return canvas.width / parseInt(elementsCache['computedStyle'][string].width, 10);
    }

    function getCorrectHeight (string) {
        if (!elementsCache['dom'][string]) {
            elementsCache['dom'][string] = _document.querySelector(string);
        }
        if (!elementsCache['computedStyle'][string]) {
            elementsCache['computedStyle'][string] = getComputedStyle(elementsCache['dom'][string]);
        }
        return canvas.height / parseInt(elementsCache['computedStyle'][string].height, 10);
    }

    this.widthCoef = 1.0 / _document.body.offsetWidth;
    this.heightCoef = 1.0 / _document.body.offsetHeight;

    this.calculateXposition = function (elem) {
        if (!elementsCache['dom'][elem]) {
            elementsCache['dom'][elem] = _document.querySelector(elem);
        }

        if (!elementsCache['computedStyle'][elem]) {
            elementsCache['computedStyle'][elem] = getComputedStyle(elementsCache['dom'][elem]);
        }

        if(!elementsCache['boundingClientRect'][elem]) {
            elementsCache['boundingClientRect'][elem] = elementsCache['dom'][elem].getBoundingClientRect();
        }

        return  (elementsCache['boundingClientRect'][elem].left) * this.widthCoef;
    }

    this.calculateYposition = function (elem) {
        if (!elementsCache['dom'][elem]) {
            elementsCache['dom'][elem] = _document.querySelector(elem);
        }

        if (!elementsCache['computedStyle'][elem]) {
            elementsCache['computedStyle'][elem] = getComputedStyle(elementsCache['dom'][elem]);
        }

        if(!elementsCache['boundingClientRect'][elem]) {
            elementsCache['boundingClientRect'][elem] = elementsCache['dom'][elem].getBoundingClientRect();
        }

        return elementsCache['boundingClientRect'][elem].top * this.heightCoef
    }
    console.log(this.calculateXposition('.menu-images__spot'), this.calculateYposition('.menu-images__spot'));
    _.mat = new THREE.ShaderMaterial({
        uniforms: {
            menuBg: {value: menuBg},

            section5Map: {
                value: section5Map
            },

            menuSpotX: {
                value: this.calculateXposition('.menu-images__spot')
            },
            menuSpotY: {
                value: this.calculateYposition('.menu-images__spot')
            },

            menuSpotWidthCorrector: {
                value: widthCorrector.menuSpot
            },
            menuSpotHeightCorrector: {
                value: heightCorrector.menuSpot
            },

            menuSpotWidthCorrectorDelta: {
                value: widthCorrector.delta.menuSpot
            },
            menuSpotHeightCorrectorDelta: {
                value: heightCorrector.delta.menuSpot
            },
        },

        vertexShader: _.vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0
    });


    let geometry = new THREE.PlaneBufferGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        1
    );


    _.object = new THREE.Mesh(geometry, _.mat);

    scene.add(_.object);

    this.unifiedAnimateSpot = function(target_query, target_name, direction, timeDelay, downscaling, cw = 2.0, ch = 2.0, duration = 1100) {
        let targetDomElement = _document.querySelector(target_query);



        let tempVariables;
        if (direction == 'increase') {
            tempVariables = {
                width: parseInt(getComputedStyle(targetDomElement).width, 10),
                height: parseInt(getComputedStyle(targetDomElement).height, 10),
                widthCorrector: shrink[target_name],
                heightCorrector: shrink[target_name]
            };
        } else {
            tempVariables = {
                width: parseInt(getComputedStyle(targetDomElement).width, 10),
                height: parseInt(getComputedStyle(targetDomElement).height, 10),
                widthCorrector: this.mat.uniforms[target_name + 'WidthCorrector'].value,
                heightCorrector: this.mat.uniforms[target_name + 'HeightCorrector'].value
            };
        }



        let target = {
            increase: {
                widthScale: widthCorrector[target_name],
                heightScale: heightCorrector[target_name]
            },
            decrease: {
                widthScale: downscaling,
                heightScale: downscaling,
            }
        };

        _.animateQueue.push(true);
        let obj = {
            targets: tempVariables,
            duration,
            widthCorrector:  target[direction].widthScale,
            heightCorrector: target[direction].heightScale,
            offset: timeDelay,
            // elasticity: 2000,
            update () {
                _.mat.uniforms[target_name + 'WidthCorrector'].value = tempVariables.widthCorrector;
                _.mat.uniforms[target_name + 'HeightCorrector'].value = tempVariables.heightCorrector;
                _.mat.uniforms[target_name + 'WidthCorrectorDelta'].value = (tempVariables.width - canvas.width / tempVariables.widthCorrector) / cw * _.widthCoef;
                _.mat.uniforms[target_name + 'HeightCorrectorDelta'].value = (tempVariables.height - canvas.height / tempVariables.heightCorrector) / ch * _.heightCoef;
                // console.log(cw * _.widthCoef);
                // console.log(_.mat.uniforms[target_name + 'WidthCorrectorDelta'].value)
            },
            complete() {
                _.stopAnimate();
            }
        };
        // obj.easing = 'linear';
        if (direction == 'increase') {
            obj.easing = [0,1.002,0,1.0055];
        } else {
            obj.easing = [1,.01,1,.01];
        }



        anime.timeline().add(obj);

    }

    this.renderSceneOnce = function () {

        let target_names = ['menuSpot'];
        // if (sectionId === 5) {
        //     target_names = ['menuSpot'];
        // }

        for( let target_name of target_names) {
            _.mat.uniforms[target_name + 'WidthCorrector'].value = 1000.0;
            _.mat.uniforms[target_name + 'HeightCorrector'].value = 1000.0;
        }

        renderer.render(scene, camera);

    }

    this.animateHoles = function (action) {
        _.animate();

        if (action == 'show') {
            this.unifiedAnimateSpot('.menu-images__spot', 'menuSpot', 'increase', 0, 1000.0);
        } else {
            this.unifiedAnimateSpot('.menu-images__spot', 'menuSpot', 'decrease', 0, 1000.0, 2.0, 2.0, 800);
        }
    }



    this.animate = function () {
        // console.log('tick');
        renderer.render(scene, camera);
        _.rAF = requestAnimationFrame(_.animate);
    }

    this.stopAnimate = function () {
        _.animateQueue.pop();
        if (!_.animateQueue.length) {
            cancelAnimationFrame(_.rAF);
        }
    }
}
