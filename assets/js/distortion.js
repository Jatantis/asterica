import * as THREE from 'three'
import * as anime from 'animejs'

export async function  ImageEffect (opts, enviroment) {
    var _ = this;

    this.checkpointValue = 50 / 5;
    this.store = enviroment.$store;
    this.state = this.store.state;

    this.vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `;

    var fragment = `

        uniform sampler2D texture1;

        varying vec2 vUv;

        // Для бг
        uniform vec2 hack1;



        uniform sampler2D texture2;
        uniform sampler2D texture3;
        uniform sampler2D texture4;
        uniform sampler2D menuBg;
        uniform int currentTextureStart;
        uniform int currentTextureEnd;
        uniform int animationRoute;
        uniform sampler2D disp;

        // Координаты дырок (выезжаем)
        uniform float section2SpotX;
        uniform float section2SpotY;

        uniform float section2SmallSpotX;
        uniform float section2SmallSpotY;

        uniform float section3SpotX;
        uniform float section3SpotY;

        uniform float section3SmallSpotX;
        uniform float section3SmallSpotY;

        uniform float section5MapX;
        uniform float section5MapY;

        uniform float menuSpotX;
        uniform float menuSpotY;

        uniform float dispFactor;
        uniform float effectFactor;

        //Корректоры для анимаций дырочек
        uniform float section2SpotWidthCorrectorDelta;
        uniform float section2SpotHeightCorrectorDelta;

        uniform float section2SmallSpotWidthCorrectorDelta;
        uniform float section2SmallSpotHeightCorrectorDelta;

        uniform float section3SpotWidthCorrectorDelta;
        uniform float section3SpotHeightCorrectorDelta;

        uniform float section3SmallSpotWidthCorrectorDelta;
        uniform float section3SmallSpotHeightCorrectorDelta;

        uniform float section5MapWidthCorrectorDelta;
        uniform float section5MapHeightCorrectorDelta;

        uniform float menuSpotWidthCorrectorDelta;
        uniform float menuSpotHeightCorrectorDelta;

        // Корректоры для дырочек :^)
        uniform float section2SpotWidthCorrector;
        uniform float section2SpotHeightCorrector;

        uniform float section2SmallSpotWidthCorrector;
        uniform float section2SmallSpotHeightCorrector;

        uniform float section3SpotWidthCorrector;
        uniform float section3SpotHeightCorrector;

        uniform float section3SmallSpotWidthCorrector;
        uniform float section3SmallSpotHeightCorrector;

        uniform float section5MapWidthCorrector;
        uniform float section5MapHeightCorrector;

        uniform float menuSpotWidthCorrector;
        uniform float menuSpotHeightCorrector;

        // Текстуры дырочек o3o
        uniform sampler2D section2Spot;
        uniform sampler2D section2SmallSpot;
        uniform sampler2D section3Spot;
        uniform sampler2D section3SmallSpot;
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

         vec4 getRealTexelShort(vec2 uv,
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


            if ((1.0 - alpha) < 0.01) {
                return vec4(0.0, 0.0, 0.0, 0.0);
            } else {
                return texture2D(global_texture, distortedPosition) * (1.0 - alpha);
            }

        }

        void main() {

            // Для бг

            vec2 uv = vUv;

            vec4 disp = texture2D(disp, uv);
            float _dispFactor;
            int _currentTextureStart, _currentTextureEnd;

            if (animationRoute != 1) {
                _currentTextureStart = currentTextureEnd;
                _currentTextureEnd = currentTextureStart;
            } else {
                //_dispFactor = dispFactor;
                _currentTextureStart = currentTextureStart;
                _currentTextureEnd = currentTextureEnd;
            }

            vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r * effectFactor));
            vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r * effectFactor));

            vec4 _upper_texel, _downer_texel;

            if (_currentTextureStart == 0) {

            } else if (_currentTextureStart == 1) {

                _upper_texel = getRealTexel(uv, texture1, distortedPosition,

                    section2Spot,
                    section2SpotX,
                    section2SpotY,
                    section2SpotWidthCorrector,
                    section2SpotHeightCorrector,
                    section2SpotWidthCorrectorDelta,
                    section2SpotHeightCorrectorDelta,

                    section2SmallSpot,
                    section2SmallSpotX,
                    section2SmallSpotY,
                    section2SmallSpotWidthCorrector,
                    section2SmallSpotHeightCorrector,
                    section2SmallSpotWidthCorrectorDelta,
                    section2SmallSpotHeightCorrectorDelta
                );

            } else if (_currentTextureStart == 2) {

                _upper_texel = getRealTexel(uv, texture2, distortedPosition,

                    section3Spot,
                    section3SpotX,
                    section3SpotY,
                    section3SpotWidthCorrector,
                    section3SpotHeightCorrector,
                    section3SpotWidthCorrectorDelta,
                    section3SpotHeightCorrectorDelta,

                    section3SmallSpot,
                    section3SmallSpotX,
                    section3SmallSpotY,
                    section3SmallSpotWidthCorrector,
                    section3SmallSpotHeightCorrector,
                    section3SmallSpotWidthCorrectorDelta,
                    section3SmallSpotHeightCorrectorDelta
                );

            } else if (_currentTextureStart == 3) {
                _upper_texel = texture2D(texture3, distortedPosition);
            } else if (_currentTextureStart == 4) {

                _upper_texel = getRealTexelShort(uv, texture4, distortedPosition,

                    section5Map,
                    section5MapX,
                    section5MapY,
                    section5MapWidthCorrector,
                    section5MapHeightCorrector,
                    section5MapWidthCorrectorDelta,
                    section5MapHeightCorrectorDelta
                );

            } else if (_currentTextureStart == 5) {

                _upper_texel = getRealTexelShort(uv, menuBg, distortedPosition,

                    section2Spot,
                    menuSpotX,
                    menuSpotY,
                    menuSpotWidthCorrector,
                    menuSpotHeightCorrector,
                    menuSpotWidthCorrectorDelta,
                    menuSpotHeightCorrectorDelta
                );
            }

            if (_currentTextureEnd == 0) {
            } else if (_currentTextureEnd == 1) {

                _downer_texel = getRealTexel(uv, texture1, distortedPosition2,

                    section2Spot,
                    section2SpotX,
                    section2SpotY,
                    section2SpotWidthCorrector,
                    section2SpotHeightCorrector,
                    section2SpotWidthCorrectorDelta,
                    section2SpotHeightCorrectorDelta,

                    section2SmallSpot,
                    section2SmallSpotX,
                    section2SmallSpotY,
                    section2SmallSpotWidthCorrector,
                    section2SmallSpotHeightCorrector,
                    section2SmallSpotWidthCorrectorDelta,
                    section2SmallSpotHeightCorrectorDelta
                );

            } else if (_currentTextureEnd == 2) {

                 _downer_texel = getRealTexel(uv, texture2, distortedPosition2,

                    section3Spot,
                    section3SpotX,
                    section3SpotY,
                    section3SpotWidthCorrector,
                    section3SpotHeightCorrector,
                    section3SpotWidthCorrectorDelta,
                    section3SpotHeightCorrectorDelta,

                    section3SmallSpot,
                    section3SmallSpotX,
                    section3SmallSpotY,
                    section3SmallSpotWidthCorrector,
                    section3SmallSpotHeightCorrector,
                    section3SmallSpotWidthCorrectorDelta,
                    section3SmallSpotHeightCorrectorDelta
                );

            } else if (_currentTextureEnd == 3) {
                _downer_texel = texture2D(texture3, distortedPosition2);
            } else if (_currentTextureEnd == 4) {

                _downer_texel = getRealTexelShort(uv, texture4, distortedPosition2,

                    section5Map,
                    section5MapX,
                    section5MapY,
                    section5MapWidthCorrector,
                    section5MapHeightCorrector,
                    section5MapWidthCorrectorDelta,
                    section5MapHeightCorrectorDelta
                );



            } else if (_currentTextureEnd == 5) {

                _downer_texel = getRealTexelShort(uv, menuBg, distortedPosition2,

                    section2Spot,
                    menuSpotX,
                    menuSpotY,
                    menuSpotWidthCorrector,
                    menuSpotHeightCorrector,
                    menuSpotWidthCorrectorDelta,
                    menuSpotHeightCorrectorDelta
                );
            }
            vec4 finalTexture;
            if(_currentTextureEnd == 0) {
                finalTexture = _upper_texel;
            } else {
                finalTexture = mix(_upper_texel, _downer_texel, dispFactor);
            }


            gl_FragColor = finalTexture;
        }
    `;


    let parent = opts.parent;
    let dispImage = opts.displacementImage;
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

    renderer.domElement.classList.add('webgl-backgrounds');
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color(0xffffff), 0.0);
    renderer.setClearAlpha(0.0);

    renderer.setSize(parent.offsetWidth, parent.offsetHeight);
    parent.appendChild(renderer.domElement);

    _.loader = new THREE.TextureLoader();
    _.loader.crossOrigin = "";

    this.loadImage = async function (image) {
        let imageData = _.loader.load(image);
        imageData.magFilter = imageData.minFilter = THREE.LinearFilter;
        imageData.anisotropy = renderer.capabilities.getMaxAnisotropy();
        return {
          imageData: imageData,
          imageUrl: image
        };

        // return imageData;
    }
    let texture0;
    let texture1;
    let texture2;
    let texture3;
    let texture4;
    let menuBg;

    let section2Spot;
    let section2SmallSpot;
    let section3Spot;
    let section3SmallSpot;
    let section5Map;

    let disp;
    let smallSpot;

    await this.loadImage(opts.image1)
        .then((data)=>{
            texture1 = data.imageData;
            this.store.commit('increacePercentage', this.checkpointValue);
            return this.loadImage(opts.image2);
        })
        .then((data)=>{
            texture2 = data.imageData;
            return this.loadImage(opts.image3);
        })
        .then((data)=>{
            texture3 = data.imageData;
            return this.loadImage(opts.image4);
        })
        .then((data)=>{
            texture4 = data.imageData;
            return this.loadImage(opts.menuBg);
        })
        .then((data)=>{
            menuBg = data.imageData;
            this.store.commit('increacePercentage', this.checkpointValue);
            return this.loadImage(opts.section2Spot);
        })
        .then((data)=>{
            section2Spot = data.imageData;
            return this.loadImage(opts.section2SmallSpot);
        })
        .then((data)=>{
            //smallSpot = data.imageData;
            section2SmallSpot = data.imageData;
            return this.loadImage(opts.section3Spot);
        })
        .then((data)=>{
            section3Spot = data.imageData;
            this.store.commit('increacePercentage', this.checkpointValue);
            return this.loadImage(opts.section3SmallSpot);
        })
        .then((data)=>{
            section3SmallSpot = data.imageData;
            return this.loadImage(opts.section5Map);
        })
        .then((data)=>{
            section5Map = data.imageData;
            return this.loadImage(dispImage);
        })
        .then((data)=>{
            disp = data.imageData;
            this.store.commit('increacePercentage', this.checkpointValue);
            disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
        });

        //section2SmallSpot = smallSpot;

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
        section2Spot: 0,//_.getCorrectWidth('.section-2__spot'),
        section2SmallSpot: 0,//_.getCorrectWidth('.section-2-small-spot__icon'),
        section3Spot: 0,//_.getCorrectWidth('.section-3__spot'),
        section3SmallSpot: 0,//_.getCorrectWidth('.section-3-small-spot__icon'),
        section5Map: 0,//_.getCorrectWidth('.section-5__map'),
        menuSpot: 0,//_.getCorrectWidth('.menu-images__spot'),
        delta: {
            section2Spot: 0,
            section2SmallSpot: 0,
            section3Spot: 0,
            section3SmallSpot: 0,
            section5Map: 0,
            menuSpot: 0
        }
    };

    let heightCorrector = {
        section2Spot: 0,//_.getCorrectHeight('.section-2__spot'),
        section2SmallSpot: 0,//_.getCorrectHeight('.section-2-small-spot__icon'),
        section3Spot: 0,//_.getCorrectHeight('.section-3__spot'),
        section3SmallSpot: 0,//_.getCorrectHeight('.section-3-small-spot__icon'),
        section5Map: 0,//_.getCorrectHeight('.section-5__map'),
        menuSpot: 0,//_.getCorrectHeight('.menu-images__spot'),
        delta: {
            section2Spot: 0,
            section2SmallSpot: 0,
            section3Spot: 0,
            section3SmallSpot: 0,
            section5Map: 0,
            menuSpot: 0
        }

    };

    this.fillCorrectors = function(sectionId) {
        let target_names,target_classes;
        if (sectionId === 1) {
            target_names = ['section2Spot', 'section2SmallSpot'];
            target_classes = ['.section-2__spot', '.section-2-small-spot__icon'];
        } else if (sectionId === 2) {
            target_names = ['section3Spot', 'section3SmallSpot'];
            target_classes = ['.section-3__spot', '.section-3-small-spot__icon'];
        } else if (sectionId === 4) {
            target_names = ['section5Map'];
            target_classes = ['.section-5__map'];
        } else if (sectionId === 5) {
            target_names = ['menuSpot'];
            target_classes = ['.menu-images__spot'];
        }
        for(let i in target_names) {
            this.mat.uniforms[target_names[i] + 'HeightCorrector'].value = heightCorrector[target_names[i]] = getCorrectHeight(target_classes[i]);
            this.mat.uniforms[target_names[i] + 'WidthCorrector'].value = widthCorrector[target_names[i]] = getCorrectWidth(target_classes[i]);
        }
    }

    this.fillPositions = function(sectionId) {
        let target_names,target_classes;
        if (sectionId === 1) {
            target_names = ['section2Spot', 'section2SmallSpot'];
            target_classes = ['.section-2__spot', '.section-2-small-spot__icon'];
        } else if (sectionId === 2) {
            target_names = ['section3Spot', 'section3SmallSpot'];
            target_classes = ['.section-3__spot', '.section-3-small-spot__icon'];
        } else if (sectionId === 4) {
            target_names = ['section5Map'];
            target_classes = ['.section-5__map'];
        } else if (sectionId === 5) {
            target_names = ['menuSpot'];
            target_classes = ['.menu-images__spot'];
        }
        for(let i in target_names) {
            this.mat.uniforms[target_names[i] + 'X'].value = this.calculateXposition(target_classes[i]);
            this.mat.uniforms[target_names[i] + 'Y'].value = this.calculateYposition(target_classes[i]);
        }
    }

    let shrink = {
        section2Spot: 150.0,
        section2SmallSpot: 300.0,
        section3Spot: 150.0,
        section3SmallSpot: 300.0,
        section5Map: 150.0,
        menuSpot: 150.0
    };

    function getCorrectWidth(string) {
        // if (!elementsCache['dom'][string]) {
            elementsCache['dom'][string] = _document.querySelector(string);
        // }
        // if (!elementsCache['computedStyle'][string]) {
            elementsCache['computedStyle'][string] = getComputedStyle(elementsCache['dom'][string]);
        // }
        return canvas.width / parseInt(elementsCache['computedStyle'][string].width, 10);
    }

    function getCorrectHeight(string) {
        // if (!elementsCache['dom'][string]) {
            elementsCache['dom'][string] = _document.querySelector(string);
        // }
        // if (!elementsCache['computedStyle'][string]) {
            elementsCache['computedStyle'][string] = getComputedStyle(elementsCache['dom'][string]);
        // }

        return canvas.height / parseInt(elementsCache['computedStyle'][string].height, 10);
    }

    this.widthCoef = 1.0 / _document.body.offsetWidth;
    this.heightCoef = 1.0 / _document.body.offsetHeight;

    this.calculateXposition = function (elem) {
        if (!elementsCache['dom'][elem]) {
            elementsCache['dom'][elem] = _document.querySelector(elem);
        }

        // if(!elementsCache['boundingClientRect'][elem]) {
            elementsCache['boundingClientRect'][elem] = elementsCache['dom'][elem].getBoundingClientRect();
        // }

        return elementsCache['boundingClientRect'][elem].left * this.widthCoef;
    }

    this.calculateYposition = function (elem) {
        if (!elementsCache['dom'][elem]) {
            elementsCache['dom'][elem] = _document.querySelector(elem);
        }

        // if (!elementsCache['computedStyle'][elem]) {
            elementsCache['computedStyle'][elem] = getComputedStyle(elementsCache['dom'][elem]);
        // }

        // if(!elementsCache['boundingClientRect'][elem]) {
            elementsCache['boundingClientRect'][elem] = elementsCache['dom'][elem].getBoundingClientRect();
        // }
        return (canvas.height - elementsCache['boundingClientRect'][elem].bottom) * this.heightCoef;

    }

    _.mat = new THREE.ShaderMaterial({
        uniforms: {
            effectFactor: { value: _.intensity },
            dispFactor: { value: 0.0 },

            texture1: { value: texture1 },

            hack1: { value: 0.0 },

            texture2: { value: texture2 },
            texture3: { value: texture3 },
            texture4: { value: texture4 },
            menuBg: {value: menuBg},


            section2Spot: {
                value: section2Spot
            },
            section2SmallSpot: {
                value: section2SmallSpot
            },
            section3Spot: {
                value: section3Spot
            },
            section3SmallSpot: {
                value: section3SmallSpot
            },
            section5Map: {
                value: section5Map
            },
            menuSpot: {
                value: section2Spot
            },


            currentTextureStart: { value: 1.0 },
            currentTextureEnd: { value: 0.0 },
            animationRoute: { value: 1.0 },
            disp: { value: disp },


            section2SpotX: {
                value: this.calculateXposition('.section-2__spot')
            },
            section2SpotY: {
                value: this.calculateYposition('.section-2__spot')
            },

            section2SmallSpotX: {
                value: this.calculateXposition('.section-2-small-spot__icon')
            },
            section2SmallSpotY: {
                value: this.calculateYposition('.section-2-small-spot__icon')
            },

            section3SpotX: {
                value: this.calculateXposition('.section-3__spot')
            },
            section3SpotY: {
                value: this.calculateYposition('.section-3__spot')
            },

            section3SmallSpotX: {
                value: this.calculateXposition('.section-3-small-spot')
            },
            section3SmallSpotY: {
                value: this.calculateYposition('.section-3-small-spot')
            },

            section5MapX: {
                value: this.calculateXposition('.section-5__map')
            },
            section5MapY: {
                value: this.calculateYposition('.section-5__map')
            },

            // menuSpotX: {
            //     value: this.calculateXposition('.menu-images__spot')
            // },
            // menuSpotY: {
            //     value: this.calculateYposition('.menu-images__spot')
            // },


            section2SpotWidthCorrector: {
                value: widthCorrector.section2Spot
            },
            section2SpotHeightCorrector: {
                value: heightCorrector.section2Spot
            },

            section2SpotWidthCorrectorDelta: {
                value: widthCorrector.delta.section2Spot
            },
            section2SpotHeightCorrectorDelta: {
                value: heightCorrector.delta.section2Spot
            },

            section2SmallSpotWidthCorrector: {
                value: widthCorrector.section2SmallSpot
            },
            section2SmallSpotHeightCorrector: {
                value: heightCorrector.section2SmallSpot
            },

            section2SmallSpotWidthCorrectorDelta: {
                value: widthCorrector.delta.section2SmallSpot
            },
            section2SmallSpotHeightCorrectorDelta: {
                value: heightCorrector.delta.section2SmallSpot
            },

            section3SpotWidthCorrector: {
                value: widthCorrector.section3Spot
            },
            section3SpotHeightCorrector: {
                value: heightCorrector.section3Spot
            },

            section3SpotWidthCorrectorDelta: {
                value: widthCorrector.delta.section3Spot
            },
            section3SpotHeightCorrectorDelta: {
                value: heightCorrector.delta.section3Spot
            },

            section3SmallSpotWidthCorrector: {
                value: widthCorrector.section3SmallSpot
            },
            section3SmallSpotHeightCorrector: {
                value: heightCorrector.section3SmallSpot
            },

            section3SmallSpotWidthCorrectorDelta: {
                value: widthCorrector.delta.section3SmallSpot
            },
            section3SmallSpotHeightCorrectorDelta: {
                value: heightCorrector.delta.section3SmallSpot
            },

            section5MapWidthCorrector: {
                value: widthCorrector.section5Map
            },
            section5MapHeightCorrector: {
                value: heightCorrector.section5Map
            },

            section5MapWidthCorrectorDelta: {
                value: widthCorrector.delta.section5Map
            },
            section5MapHeightCorrectorDelta: {
                value: heightCorrector.delta.section5Map
            },


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
        opacity: 1.0
    });

    let geometry = new THREE.PlaneBufferGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        1
    );

    _.object = new THREE.Mesh(geometry, _.mat);

    this.unifiedAnimateSpot = function(target_query, target_name, direction, timeDelay, downscaling, cw = 2.0, ch = 2.0, duration = 1100) {
        let targetDomElement = _document.querySelector(target_query);



        let tempVariables;
        if (direction == 'increase') {
            tempVariables = {
                width: parseInt(getComputedStyle(targetDomElement).width, 10),
                height: parseInt(getComputedStyle(targetDomElement).height, 10),
                widthCorrector: shrink[target_name],
                heightCorrector: shrink[target_name],
                amplifier: 30
            };
        } else {
            tempVariables = {
                width: parseInt(getComputedStyle(targetDomElement).width, 10),
                height: parseInt(getComputedStyle(targetDomElement).height, 10),
                widthCorrector: this.mat.uniforms[target_name + 'WidthCorrector'].value,
                heightCorrector: this.mat.uniforms[target_name + 'HeightCorrector'].value,
                amplifier: 1
            };
        }



        let target = {
            increase: {
                widthScale: widthCorrector[target_name],
                heightScale: heightCorrector[target_name],
                amplifier: 1,
                amplifyEasing: 'easeOutQuint'
            },
            decrease: {
                widthScale: downscaling,
                heightScale: downscaling,
                amplifier: 30,
                amplifyEasing: 'easeInExpo'

            }
        };

        _.animateQueue.push(true);
        let obj = {
            targets: tempVariables,
            duration,
            widthCorrector:  target[direction].widthScale,
            heightCorrector: target[direction].heightScale,
            offset: timeDelay,
            amplifier: {
                value: target[direction].amplifier,
                duration,
                easing: target[direction].amplifyEasing
            },
            // elasticity: 1000,
            update () {
                let amplifiedWCorrector = tempVariables.widthCorrector*tempVariables.amplifier,
                    amplifiedHCorrector = tempVariables.heightCorrector*tempVariables.amplifier;
                _.mat.uniforms[target_name + 'WidthCorrector'].value = amplifiedWCorrector;
                _.mat.uniforms[target_name + 'HeightCorrector'].value = amplifiedHCorrector;
                _.mat.uniforms[target_name + 'WidthCorrectorDelta'].value = (tempVariables.width - canvas.width / amplifiedWCorrector) / cw * _.widthCoef;
                _.mat.uniforms[target_name + 'HeightCorrectorDelta'].value = (tempVariables.height - canvas.height / amplifiedHCorrector) / ch * _.heightCoef;
            },
            complete() {
                _.stopAnimate();
            }
        };
        // obj.easing = 'linear';
        if (direction == 'increase') {
            obj.easing = [0,1.01,0,1.015];
        } else {
            obj.easing = [1,.01,1,.01];
        }



        anime.timeline().add(obj);

    }

    this.navigateAnimation = function (startpoint, endpoint, base_offset) {

        let offset;
        if (startpoint == null || endpoint == null) {
            offset = base_offset;
        } else {
            offset = base_offset - 500;
        }
        _.animate();
        if (startpoint === 1) {
            this.unifiedAnimateSpot('.section-2__spot', 'section2Spot', 'decrease', 0, 150.0);
            this.unifiedAnimateSpot('.section-2-small-spot', 'section2SmallSpot', 'decrease', 0, 300.0, 2.3, 1.6);
        } else if (startpoint === 2) {
            this.unifiedAnimateSpot('.section-3__spot', 'section3Spot', 'decrease', 0, 150.0);
            this.unifiedAnimateSpot('.section-3-small-spot', 'section3SmallSpot', 'decrease', 0, 300.0, 1.6, 1.8);
        } else if (startpoint === 4) {
            this.unifiedAnimateSpot('.section-5__map', 'section5Map', 'decrease', 0, 150.0);
        } else if (startpoint === 5) {
            this.unifiedAnimateSpot('.menu-images__spot', 'menuSpot', 'decrease', 0, 150.0, 2.0, 2.0, 1500);
        }

        if (endpoint === 1) {
            this.unifiedAnimateSpot('.section-2__spot', 'section2Spot', 'increase', offset, 150.0);
            this.unifiedAnimateSpot('.section-2-small-spot', 'section2SmallSpot', 'increase', offset, 300.0, 2.3, 1.6);
        } else if (endpoint === 2) {
            this.unifiedAnimateSpot('.section-3__spot', 'section3Spot', 'increase', offset, 150.0);
            this.unifiedAnimateSpot('.section-3-small-spot', 'section3SmallSpot', 'increase', offset, 300.0, 1.6, 1.8);
        } else if (endpoint === 4) {
            this.unifiedAnimateSpot('.section-5__map', 'section5Map', 'increase', offset, 150.0);
        } else if (endpoint === 5) {
            this.unifiedAnimateSpot('.menu-images__spot', 'menuSpot', 'increase', offset, 150.0);
        }



    }

    scene.add(_.object);

    this.animateNext = function (start, end, duration) {
        _.animate();
        _.mat.uniforms.currentTextureStart.value = start;
        _.mat.uniforms.currentTextureEnd.value = end;
        // this.navigateAnimation(_.mat.uniforms.currentTextureStart.value, _.mat.uniforms.currentTextureEnd.value, duration);

        _.animateQueue.push(true);
        anime({
            targets: _.mat.uniforms.dispFactor,
            value: _.mat.uniforms.animationRoute.value,
            duration: duration,
            easing: 'easeInOutSine',
            complete: function () {
                _.stopAnimate();
            }
        });
    }

    // this.animateToPrev = function (image1, image2, duration) {
    //     _.animate();
    //     _.mat.uniforms.currentTextureStart.value = image1;
    //     _.mat.uniforms.currentTextureEnd.value = image2;
    //     _.mat.uniforms.dispFactor.value = 1.0;
    //     _.mat.uniforms.animationRoute.value = 0;
    //
    //     this.navigateAnimation(image1, image2, duration);
    //
    //     _.animateQueue.push(true);
    //     anime({
    //         targets: _.mat.uniforms.dispFactor,
    //         value: 0,
    //         duration: duration,
    //         easing: 'easeInOutSine',
    //         complete: function () {
    //             _.stopAnimate();
    //         }
    //     });
    // }

    this.renderSceneOnce = function (sectionId) {

        let target_names = [];
        if (sectionId === 1) {
            target_names = ['section2Spot', 'section2SmallSpot'];
        } else if (sectionId === 2) {
            target_names = ['section3Spot', 'section3SmallSpot'];
        } else if (sectionId === 4) {
            target_names = ['section5Map'];
        } else if (sectionId === 5) {
            target_names = ['menuSpot'];
        }

        for( let target_name of target_names) {
            _.mat.uniforms[target_name + 'WidthCorrector'].value = 1000.0;
            _.mat.uniforms[target_name + 'HeightCorrector'].value = 1000.0;
        }

        renderer.render(scene, camera);

    }

    this.animateHoles = function (sectionId, action) {


        if (action == 'show') {
            this.navigateAnimation(null, sectionId, 0);
        } else {
            this.navigateAnimation(sectionId, null, 0);
        }
    }

    this.resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.updateProjectionMatrix();
        canvas.width = parseInt(getComputedStyle(renderer.domElement).width, 10);
        canvas.height = parseInt(getComputedStyle(renderer.domElement).height, 10);
        this.widthCoef = 1.0 / window.innerWidth;
        this.heightCoef = 1.0 / window.innerHeight;

        this.fillCorrectors(this.state.appState.activeSlide-1);
        this.fillPositions(this.state.appState.activeSlide-1);

        this.renderSceneOnce(this.state.appState.activeSlide);
    };


    this.rAF = null;

    this.protectedAnimate = function () {
        renderer.render(scene, camera);
        _.rAF = requestAnimationFrame(_.protectedAnimate);
    }

    this.animate = function () {
        if (!_.rAF) {
            _.protectedAnimate();
        }
    }

    this.stopAnimate = function () {
        _.animateQueue.pop();
        if (!_.animateQueue.length) {
            cancelAnimationFrame(_.rAF);
            _.rAF = null;
        }
    }

    this.store.commit('increacePercentage', this.checkpointValue);
    return this;
};
