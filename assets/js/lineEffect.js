import * as THREE from 'three'

export function LineEffect (opts) {
    var _ = this;
    this.direction = 'show';
    this.opts = opts;

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
        uniform sampler2D bg;
        uniform sampler2D mask;
        // uniform sampler2D squirt;

        uniform float maskHeightCorrector;
        uniform float maskWidthCorrector;
        uniform float maskSpotX;
        uniform float maskSpotY;
        uniform float distortionSize;
        uniform float moveY;

        // Координаты дырок (выезжаем)
        // uniform float menuSpotX;
        // uniform float menuSpotY;
        //
        //
        // //Корректоры для анимаций дырочек
        // uniform float menuSpotWidthCorrectorDelta;
        // uniform float menuSpotHeightCorrectorDelta;
        //
        // // Корректоры для дырочек :^)
        // uniform float menuSpotWidthCorrector;
        // uniform float menuSpotHeightCorrector;
        //
        // // Текстуры дырочек o3o
        // uniform sampler2D section5Map;

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

            float a = texture2D(mask, vec2((uv.x - maskSpotX )*maskWidthCorrector, (uv.y - moveY)*maskHeightCorrector)).r;

            if ((1.0 - a) < distortionSize ) {
                if ((1.0 - a) > distortionSize-0.001 ) {
                    gl_FragColor = mix(texture2D(bg, uv), vec4(0.0,0.0,0.0,0.0), 0.4);
                } else {
                    gl_FragColor = vec4(0.0,0.0,0.0,0.0);
                }

            } else {
                if ((1.0 - a) < distortionSize+0.001 ) {
                    gl_FragColor = mix(texture2D(bg, uv), vec4(0.0,0.0,0.0,0.0), 0.4);
                } else {
                    gl_FragColor = texture2D(bg, uv);
                }

            }

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

    renderer.domElement.classList.add('background-test');
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color(0xffffff), 0.0);
    renderer.setClearAlpha(0.0);

    renderer.setSize(parent.offsetWidth, parent.offsetHeight);
    parent.appendChild(renderer.domElement);
    console.log('here');
    _.loader = new THREE.TextureLoader();
    _.loader.crossOrigin = "";


    let canvas = {
        width: parseInt(getComputedStyle(renderer.domElement).width, 10),
        height: parseInt(getComputedStyle(renderer.domElement).height, 10)
    };

    this.loadingWatcher = {
        instance: null,
        count: 0,
        loaded: 0
    };

    this.loadImage = function (image) {
        let imageData = _.loader.load(image);
        imageData.magFilter = imageData.minFilter = THREE.LinearFilter;
        imageData.anisotropy = renderer.capabilities.getMaxAnisotropy();
        if (this.loadingWatcher.instance == null) {
            this.loadingWatcher.instance = setInterval(()=>{

            },300)
        }
        return imageData;
    }

    this.getCanvasRect = function() {
        return canvas;
    }

    let elementsCache = {
        dom: {},
        computedStyle: {},
        boundingClientRect: {}
    };

    let _document = document;

    this.animateQueue = [];

    let widthCorrector = {
        tech1Spot: 0,
        briefSpot: 0,
        delta: {
            menuSpot: 0
        }
    };

    let heightCorrector = {
        tech1Spot: 0,
        briefSpot: 0,
        delta: {
            menuSpot: 0
        }

    };

    this.correctors = {
        width: widthCorrector,
        height: heightCorrector
    };

    //
    // let shrink = {
    //     menuSpot: 1000.0
    // };

    this.setDirection = function(direction) {
        this.direction = direction;
    };

    this.setUniformValues = function(obj) {
        let uni = _.mat.uniforms;
        if (typeof(obj.mask) != "undefined") {
            uni.mask.value = obj.mask;
        }
        if (typeof(obj.maskHeightCorrector) != "undefined") {
            uni.maskHeightCorrector.value = obj.maskHeightCorrector;
        }
        if (typeof(obj.maskWidthCorrector) != "undefined") {
            uni.maskWidthCorrector.value = obj.maskWidthCorrector;
        }
        if (typeof(obj.maskSpotX) != "undefined") {
            uni.maskSpotX.value = obj.maskSpotX;
        }
        if (typeof(obj.maskSpotY) != "undefined") {
            uni.maskSpotY.value = obj.maskSpotY;
        }
        if (typeof(obj.moveY) != "undefined") {
            uni.moveY.value = obj.moveY;
        }
        if (typeof(obj.distortionSize) != "undefined") {
            uni.distortionSize.value = obj.distortionSize;
        }

    }

    this.getCorrectWidth = function (string) {

        if (!elementsCache['dom'][string]) {
            elementsCache['dom'][string] = _document.querySelector(string);
        }
        if (!elementsCache['computedStyle'][string]) {
            elementsCache['computedStyle'][string] = getComputedStyle(elementsCache['dom'][string]);
        }
        return canvas.width / parseInt(elementsCache['computedStyle'][string].width, 10);
    }

    this.getCorrectHeight = function (string) {
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

        if(!elementsCache['boundingClientRect'][elem]) {
            elementsCache['boundingClientRect'][elem] = elementsCache['dom'][elem].getBoundingClientRect();
        }
        return elementsCache['boundingClientRect'][elem].left * this.widthCoef;
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
        return ((_document.body.offsetHeight - parseInt(elementsCache['computedStyle'][elem].height, 10))/2) * this.heightCoef;
    }



    _.mat = new THREE.ShaderMaterial({
        uniforms: {
            bg: {value: _.loadImage(opts.bg)},
            mask: {value: {}},
            // squirt: {value: squirt},
            maskHeightCorrector: {value: heightCorrector.tech1Spot },
            maskWidthCorrector: {value: widthCorrector.tech1Spot },
            maskSpotX: {value: this.calculateXposition('.technology-stack__images')},
            maskSpotY: {value: this.calculateYposition('.technology-stack__images')},
            distortionSize: {value: 0.001},
            moveY: {value: 0.0}

            // section5Map: {
            //     value: section5Map
            // },
            //
            // menuSpotX: {
            //     value: this.calculateXposition('.menu-images__spot')
            // },
            // menuSpotY: {
            //     value: this.calculateYposition('.menu-images__spot')
            // },
            //
            // menuSpotWidthCorrector: {
            //     value: widthCorrector.menuSpot
            // },
            // menuSpotHeightCorrector: {
            //     value: heightCorrector.menuSpot
            // },
            //
            // menuSpotWidthCorrectorDelta: {
            //     value: widthCorrector.delta.menuSpot
            // },
            // menuSpotHeightCorrectorDelta: {
            //     value: heightCorrector.delta.menuSpot
            // },
        },

        vertexShader: _.vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0,
    });

    console.log(_.mat.uniforms);

    let geometry = new THREE.PlaneBufferGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        400,
        400
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

    this.changeAlpha = function(val, ms) {
        _.animate();

        let tempVariables = {
            value: _.mat.uniforms.distortionSize.value
        }

        anime({
            targets: tempVariables,
            value: val,
            duration: ms,
            elasticity: 0,
            easing: 'linear',
            update () {
                _.mat.uniforms.distortionSize.value = tempVariables.value;
            },
            complete() {
                _.stopAnimate();
            }
        })
    }

    this.renderSceneOnce = function () {

        // let target_names = ['menuSpot'];
        // // if (sectionId === 5) {
        // //     target_names = ['menuSpot'];
        // // }
        //
        // for( let target_name of target_names) {
        //     _.mat.uniforms[target_name + 'WidthCorrector'].value = 1000.0;
        //     _.mat.uniforms[target_name + 'HeightCorrector'].value = 1000.0;
        // }

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
        cancelAnimationFrame(_.rAF);
    }

    setTimeout(()=>{
        renderer.render(scene, camera);
    }, 500);
}
