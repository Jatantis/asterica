import * as THREE from 'three'
import * as anime from 'animejs'

import AstericaImg from './../img/sections/section1/asterica.png'

export function ZoomEffect(opts, enviroment) {
    var _ = this;

    this.checkpointValue = 30 / 5;
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
        varying vec2 vUv;
        uniform sampler2D video;
        uniform sampler2D zoomTexture;
        uniform sampler2D bufferTexture;

        uniform float widthCoef;
        uniform float heightCoef;
        uniform float widthCorrector;
        uniform float heightCorrector;
        uniform float xOffset;
        uniform float yOffset;
        uniform float alpha;
        uniform bool showLogo;

        void main() {
            vec2 uv = vUv;
            // if (showLogo) {
                vec4 zoom = texture2D(zoomTexture,vec2(
                    (uv.x - xOffset) * widthCorrector,
                    (uv.y - yOffset) * heightCorrector
                ));
                if (zoom.r > 0.01) {
                    vec4 buffer = texture2D(bufferTexture, uv);

                    gl_FragColor = vec4(buffer.rgb, alpha);
                } else {
                    gl_FragColor = texture2D(video, uv);
                }
            // } else {
            //     gl_FragColor = texture2D(video, uv);
            // }
        }
    `;


    this.widthCoef = 1.0 / document.body.offsetWidth;
    this.heightCoef = 1.0 / document.body.offsetHeight;


    var parent = opts.parent;
    this.intensity = '2';

    function getCorrectWidth (string) {
        return parent.offsetWidth / parseInt(getComputedStyle(document.querySelector(string)).width, 10);
    }

    function getCorrectHeight (string) {
        return parent.offsetHeight / parseInt(getComputedStyle(document.querySelector(string)).height, 10);
    }

    this.calculateXposition = function (elem) {
        return document.querySelector(elem).getBoundingClientRect().left * this.widthCoef;
    }
    this.calculateYposition = function (elem) {
        let element = document.querySelector(elem);
        return (document.body.offsetHeight - parseInt(getComputedStyle(element).height, 10) - element.getBoundingClientRect().top) * this.heightCoef;
    }

    // this.animateLogo = () => {
    //     anime({
    //         targets
    //     })
    // };

    var scene = new THREE.Scene();

    var camera = new THREE.OrthographicCamera(
        parent.offsetWidth / -2,
        parent.offsetWidth / 2,
        parent.offsetHeight / 2,
        parent.offsetHeight / -2,
        1,
        1000
    );

    var camera2 = new THREE.OrthographicCamera(
        parent.offsetWidth / -2,
        parent.offsetWidth / 2,
        parent.offsetHeight / 2,
        parent.offsetHeight / -2,
        1,
        2000
    );

    camera2.zoom = 1.0;
    camera2.updateProjectionMatrix();

    camera.position.z = 1;

    var renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true
    });

    renderer.domElement.classList.add('webgl-zoom');
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color(0x000000), 0.0);
    renderer.setClearAlpha(0.0);

    renderer.setSize(parent.offsetWidth, parent.offsetHeight);
    parent.appendChild(renderer.domElement);

    var geometry = new THREE.PlaneGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        1

    );

    // Video
    var video = document.querySelector('.section__video');
    var texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    var zoomTexture = new THREE.TextureLoader().load(AstericaImg);


    zoomTexture.magFilter = THREE.LinearFilter;
    zoomTexture.minFilter = THREE.LinearFilter;
    zoomTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    var bufferScene = new THREE.Scene();
    // Создаем текстуру, в которой будет храниться результат рендера
    var bufferTexture = new THREE.WebGLRenderTarget(
        window.innerWidth,
        window.innerHeight,
        { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );

    var blueMaterial = new THREE.MeshBasicMaterial({map:texture});
    var plane = new THREE.PlaneBufferGeometry( parent.offsetWidth, parent.offsetHeight );
    var planeObject = new THREE.Mesh(plane,blueMaterial);
    planeObject.position.z = -20;
    bufferScene.add(planeObject);//We add it to the bufferScene instead of the normal scene!

    // Material
    var material = new THREE.ShaderMaterial({
        uniforms: {
            video: { value: texture },
            zoomTexture: {value: zoomTexture },
            bufferTexture: {value: bufferTexture.texture},
            widthCoef: {value: this.widthCoef},
            heightCoef: {value: this.heightCoef},
            widthCorrector: {value: getCorrectWidth('.section-1__logo') },
            heightCorrector: {value: getCorrectHeight('.section-1__logo')},
            xOffset: {value: this.calculateXposition('.section-1__logo')},
            yOffset: {value: this.calculateYposition('.section-1__logo')},
            showLogo: {value: true},
            alpha: {value: 1.0}
        },
        vertexShader: _.vertex,
        fragmentShader: fragment,
        transparent: false,
        opacity: 1.0,
    });



    // var material = new THREE.MeshBasicMaterial({
    //     map: texture,
    //     color: 0xffffff
    // });

    var videoTexture = new THREE.Mesh(geometry, material);

    this.showLogo = () => {
        material.uniforms.showLogo.value = true;
    };

    this.hideLogo = () => {
        material.uniforms.showLogo.value = false;
    };

    this.animateShowLogo = () => {
        let obj = {
            zoom: camera2.zoom,
            alpha: material.uniforms.alpha.value
        };

        anime({
            targets: obj,
            zoom: 1.3,
            alpha: 0.95,
            easing: 'easeInCirc',
            elasticity: 0,
            duration: 1000,
            update() {
                camera2.zoom = obj.zoom;
                camera2.updateProjectionMatrix();
                material.uniforms.alpha.value = obj.alpha;
            },
        })
    }

    this.animateHideLogo = () => {
        let obj = {
            zoom: camera2.zoom,
            alpha: material.uniforms.alpha.value
        };

        anime({
            targets: obj,
            zoom: 1.0,
            alpha: 1.0,
            easing: 'linear',
            elasticity: 0,
            duration: 1000,
            update() {
                camera2.zoom = obj.zoom;
                camera2.updateProjectionMatrix();
                material.uniforms.alpha.value = obj.alpha;
            },
        })
    }

    scene.add(videoTexture);

    this.rAF = null;

    this.protectedAnimate = function () {
        renderer.render(bufferScene, camera2, bufferTexture);
        renderer.render(scene, camera);
        _.rAF = requestAnimationFrame(_.protectedAnimate);
    };

    this.animate = function () {
        if (!_.rAF) {
            _.protectedAnimate();
        }
    };

    this.store.commit('increacePercentage', 10);

    this.stopAnimate = function () {
        cancelAnimationFrame(_.rAF);
        _.rAF = null;
    };
    this.resize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            camera2.aspect = window.innerWidth / window.innerHeight;
            camera2.updateProjectionMatrix();
            this.widthCoef = 1.0 / document.body.offsetWidth;
            this.heightCoef = 1.0 / document.body.offsetHeight;
            material.uniforms.widthCoef.value = this.widthCoef;
            material.uniforms.heightCoef.value = this.heightCoef;
            material.uniforms.widthCorrector.value = getCorrectWidth('.section-1__logo');
            material.uniforms.heightCorrector.value = getCorrectHeight('.section-1__logo');
            material.uniforms.xOffset.value = this.calculateXposition('.section-1__logo');
            material.uniforms.yOffset.value = this.calculateYposition('.section-1__logo');
            renderer.setSize( window.innerWidth, window.innerHeight );
    };

    this.setMobileWidth = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera2.aspect = window.innerWidth / window.innerHeight;
      camera2.updateProjectionMatrix();
      this.widthCoef = 1.7 / document.body.offsetWidth;
      this.heightCoef = 1.0 / document.body.offsetHeight;
      material.uniforms.widthCoef.value = this.widthCoef;
      material.uniforms.heightCoef.value = this.heightCoef;
      material.uniforms.widthCorrector.value = getCorrectWidth('.section-1__logo');
      material.uniforms.heightCorrector.value = getCorrectHeight('.section-1__logo');
      material.uniforms.xOffset.value = document.querySelector('.section-1__logo');
      material.uniforms.yOffset.value = this.calculateYposition('.section-1__logo');
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setPixelRatio(window.devicePixelRatio);
    }

    // video.play();
    this.animate();
    this.store.commit('increacePercentage', 10);



}
