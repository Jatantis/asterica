function mainPage () {
    if (document.body.classList.contains('main-page')) {
        window.addEventListener('load', function () {
            sectionScroll = new SectionScroll();

            sectionScroll.initFirstSlide();

            morphWave();

            PortfolioSlider();

            var backgrounds = [];

            Array.from(document.querySelectorAll('.backgrounds img')).forEach(function (el) {
                backgrounds.push(el.getAttribute('src'));
            });
            imageEffect = new ImageEffect({
                parent: document.querySelector('.backgrounds'),
                image0: backgrounds[0],
                image1: backgrounds[1],
                image2: backgrounds[2],
                image3: backgrounds[3],
                image4: backgrounds[4],
                menuBg: backgrounds[5],
                displacementImage: '/img/sections/displacement.png',
                section2Spot: '/img/sections/section2/spot.jpg',
                section2SmallSpot: '/img/sections/section2/spot_small.jpg',
                section3Spot: '/img/sections/section3/spot.jpg',
                section3SmallSpot: '/img/sections/section3/spot_small.jpg',
                section5Map: '/img/sections/section5/map.jpg'
            });



            zoomEffect = new ZoomEffect({
                parent: document.querySelector('.section-1__video-canvas')
            });


            new Menu(PAGES.MAIN);


            window.addEventListener('resize', onWindowResize);
        })
    }
}

function onWindowResize () {
    var bgCanvas = document.querySelector('.webgl-backgrounds');

    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
}
