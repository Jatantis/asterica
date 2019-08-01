import * as THREE from 'three'
import * as anime from 'animejs'
import v from './../../assets/video/bg1920.mp4';

import AstericaImg from './../img/sections/section1/asterica.png'

export function ZoomEffect(opts) {
    var _ = this;

    construct(opts);

    async function construct(opts) {
        var vertex = `
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
                if (showLogo) {
                    vec4 zoom = texture2D(zoomTexture,vec2(
                        (uv.x - xOffset) * widthCorrector,
                        (uv.y - yOffset) * heightCorrector
                    ));
                    if (zoom.r > 0.01) {
                        int flag = 0;
                        vec4 buffer = texture2D(bufferTexture, vec2(
                            uv.x,
                            uv.y
                        ));

                        gl_FragColor = vec4(vec3(buffer.r, buffer.g, buffer.b), alpha);
                    } else {
                        gl_FragColor = texture2D(video, uv) * (1.0-zoom.r);
                    }
                } else {
                    gl_FragColor = texture2D(video, uv);
                }
            }
        `;


        _.widthCoef = 1.0 / document.body.offsetWidth;
        _.heightCoef = 1.0 / document.body.offsetHeight;
        _.intensity = '2';

        let parent = opts.parent;






        let scene = new THREE.Scene();

        let camera = new THREE.OrthographicCamera(
            parent.offsetWidth / -2,
            parent.offsetWidth / 2,
            parent.offsetHeight / 2,
            parent.offsetHeight / -2,
            1,
            1000
        );



        let camera2 = new THREE.OrthographicCamera(
            parent.offsetWidth / -2,
            parent.offsetWidth / 2,
            parent.offsetHeight / 2,
            parent.offsetHeight / -2,
            1,
            2000
        );



        camera.position.z = 1;

        let renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true
        });


        renderer.domElement.classList.add('webgl-zoom');
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(new THREE.Color(0x000000), 0.0);
        renderer.setClearAlpha(0.0);

        renderer.setSize(parent.offsetWidth, parent.offsetHeight);
        parent.appendChild(renderer.domElement);

        let geometry = new THREE.PlaneGeometry(
            parent.offsetWidth,
            parent.offsetHeight,
            1

        );

        // Video
        // var video = document.querySelector('.section-1__video');
        let video;
        await setupVideo(v).then(videoData=> {
            video = videoData;
        });
        let texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;

        let zoomTexture = new THREE.TextureLoader().load(AstericaImg);


        zoomTexture.magFilter = THREE.LinearFilter;
        zoomTexture.minFilter = THREE.LinearFilter;
        zoomTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        let bufferScene = new THREE.Scene();
        // Создаем текстуру, в которой будет храниться результат рендера
        var bufferTexture = new THREE.WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter}
        );


        let blueMaterial = new THREE.MeshBasicMaterial({map:texture});
        let plane = new THREE.PlaneBufferGeometry( parent.offsetWidth, parent.offsetHeight );
        let planeObject = new THREE.Mesh(plane,blueMaterial);
        planeObject.position.z = -20;
        bufferScene.add(planeObject);//We add it to the bufferScene instead of the normal scene!


        // Material
        let material = new THREE.ShaderMaterial({
            uniforms: {
                video: { value: texture },
                zoomTexture: {value: zoomTexture },
                bufferTexture: {value: bufferTexture.texture},
                widthCoef: {value: _.widthCoef},
                heightCoef: {value: _.heightCoef},
                widthCorrector: {value: getCorrectWidth('.section-1__logo') },
                heightCorrector: {value: getCorrectHeight('.section-1__logo')},
                xOffset: {value: _.calculateXposition('.section-1__logo')},
                yOffset: {value: _.calculateYposition('.section-1__logo')},
                showLogo: {value: true},
                alpha: {value: 1.0}
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: false,
            opacity: 1.0,
        });

        let videoTexture = new THREE.Mesh(geometry, material);
        scene.add(videoTexture);
        _.material = material;
        _.scene = scene;
        _.camera = camera;
        _.camera2 = camera2;
        _.renderer = renderer;
        _.bufferTexture = bufferTexture;
        _.bufferScene = bufferScene;

        _.animate = function () {
           renderer.render(bufferScene, camera2, bufferTexture);
           renderer.render(scene, camera);
            _.rAF = requestAnimationFrame(_.animate);

        }

        _.animate();
        setTimeout(()=>{
            _.animateShowLogo();
        }, 500);
    }

    // var material = new THREE.MeshBasicMaterial({
    //     map: texture,
    //     color: 0xffffff
    // });

    function getCorrectWidth (string) {
        return parent.offsetWidth / parseInt(getComputedStyle(document.querySelector(string)).width, 10);
    }

    function getCorrectHeight (string) {
        return parent.offsetHeight / parseInt(getComputedStyle(document.querySelector(string)).height, 10);
    }

    this.calculateXposition = function (elem) {
        return document.querySelector(elem).getBoundingClientRect().left * this.widthCoef;
    };

    this.calculateYposition = function (elem) {
        let element = document.querySelector(elem);
        return (document.body.offsetHeight - parseInt(getComputedStyle(element).height, 10) - element.getBoundingClientRect().top) * this.heightCoef;
    };

    this.showLogo = () => {
        _.material.uniforms.showLogo.value = true;
    };

    this.hideLogo = () => {
        _.material.uniforms.showLogo.value = false;
    };

    this.animateShowLogo = () => {
        console.log(1);
        let obj = {
            zoom: _.camera2.zoom,
            alpha: _.material.uniforms.alpha.value
        };

        anime({
            targets: obj,
            zoom: 1.3,
            alpha: 0.95,
            easing: 'easeInCirc',
            elasticity: 0,
            duration: 1000,
            update() {
                _.camera2.zoom = obj.zoom;
                _.camera2.updateProjectionMatrix();
                _.material.uniforms.alpha.value = obj.alpha;
            },
        })
    }

    this.animateHideLogo = () => {
        let obj = {
            zoom: _.camera2.zoom,
            alpha: _.material.uniforms.alpha.value
        };

        anime({
            targets: obj,
            zoom: 1.0,
            alpha: 1.0,
            easing: 'linear',
            elasticity: 0,
            duration: 1000,
            update() {
                _.camera2.zoom = obj.zoom;
                _.camera2.updateProjectionMatrix();
                _.material.uniforms.alpha.value = obj.alpha;
            },
        })
    }




    this.stopAnimate = function () {
        cancelAnimationFrame(_.rAF);
    }

    // video.play();



}

function setupVideo(url) {
    return new Promise( resolve => {
        const video = document.createElement('video');

        var playing = false;
        var timeupdate = false;

        video.autoplay = true;
        video.muted = true;
        video.loop = true;

        // Waiting for these 2 events ensures
        // there is data in the video

        video.addEventListener('playing', function() {
            playing = true;
            checkReady();
        }, true);

        video.addEventListener('timeupdate', function() {
            timeupdate = true;
            checkReady();
        }, true);

        video.src = url;
        video.play();

        function checkReady() {
            if (playing && timeupdate) {
                resolve(video);
            }
        }
    })

}
