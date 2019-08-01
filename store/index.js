import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        imageEffect: '1.0',
        sectionScroll: null,
        SeparateMenu: null,
        LineEffectBg: null,
        zoomEffect: null,
        menu: null,
        CURRENT_PAGE: null,
        PAGES: {
            MAIN: 'MAIN',
            COMPANY: 'COMPANY',
            CONTACTS: 'CONTACTS',
            PORTFOLIO: 'PORTFOLIO'
        },
        appState: {
            activeSlide: 1,
            language: 'ru',
            animationIsActive: false,
            menuIsOpened: false,
            menuDemount: false,
            menuNavState: null,
            navLocked: false,
            brif: false,
            startDestructionOnRouteLeave: false,
            animationQueue: {
                startDemountCurrentSlide: false,
                nextSlide: null,
                route: 'swipe'
            },
            slides: [
                true,
                false,
                false,
                false,
                false
            ]
        },
        section2SpotInstance: null,
        section3SpotInstance: null,
        preloader: true,
        preloaderPercent: 30,
        videoDomElement: null,
        preloader_n: false,
        preloader_nn: false,
        pageLoaded: false,
    },
    getters: {
        getState: state => state,
        getImageEffect: state => state.imageEffect,
        getPage: state => state.CURRENT_PAGE,
        getMovingType: state=>state.appState.animationQueue.route,
        getActiveSlide: state=>state.appState.activeSlide,
        getNextSlide: state=>state.appState.animationQueue.nextSlide,
        isLockedNav: state=>state.appState.navLocked
    },
    mutations: {
        APPSTATE_ACTIVE_SLIDE(state, id) {
            state.appState.activeSlide = id;
        },
        APPSTATE_ANIMATION_ACTIVE(state, isActive) {
            state.appState.animationIsActive = isActive;
        },
        APPSTATE_MENU_TOGGLE(state) {
            state.appState.menuIsOpened = !state.appState.menuIsOpened;
            if(state.appState.menuIsOpened) {
                state.appState.menuDemount = false;
              }
              // console.log(state.appState.menuIsOpened);
        },
        appStateMutate(state, obj) {
            if (typeof(obj.activeSlide) != "undefined") {
                state.appState.activeSlide = obj.activeSlide;
            }
            if (typeof(obj.animationIsActive) != "undefined") {
                state.appState.animationIsActive = obj.animationIsActive;
            }
            if (typeof(obj.menuIsOpened) != "undefined") {
                state.appState.menuIsOpened = obj.menuIsOpened;
            }
        },
        toggleSlides(state, idObj) {
            let {
                fromId, toId
            } = idObj;
            let correct_from_id = fromId - 1;
            let correct_to_id = toId - 1;
            if (state.appState.slides[correct_to_id] == false) {
                state.appState.activeSlide = toId;
            }
            if ( correct_from_id < correct_to_id ) {
                state.imageEffect.mat.uniforms.animationRoute.value = 1;
                state.imageEffect.mat.uniforms.dispFactor.value = 0.0;
            } else {
                state.imageEffect.mat.uniforms.animationRoute.value = 0;
                state.imageEffect.mat.uniforms.dispFactor.value = 1.0;
            }


            if (correct_from_id == 0) {
                state.imageEffect.mat.uniforms.currentTextureStart.value = correct_to_id;
                state.imageEffect.mat.uniforms.currentTextureEnd.value = 0;
            }
            // else {
            //     state.imageEffect.mat.uniforms.currentTextureStart.value = correct_to_id;
            // }

            state.appState.activeSlide = toId;
            state.appState.animationQueue.startDemountCurrentSlide = false;
            state.appState.animationQueue.nextSlide = null;
            state.appState.slides[correct_from_id] = false;
            state.appState.slides[correct_to_id] = true;
            state.appState.slides = [...state.appState.slides];
        },
        setAnimationQueue(state, nextId) {
            state.appState.navLocked = true;
            if ( state.appState.activeSlide < nextId ) {
                state.imageEffect.mat.uniforms.animationRoute.value = 1;
                state.imageEffect.mat.uniforms.dispFactor.value = 0.0;
            } else {
                state.imageEffect.mat.uniforms.animationRoute.value = 0;
                state.imageEffect.mat.uniforms.dispFactor.value = 1.0;
            }
            state.imageEffect.mat.uniforms.currentTextureStart.value = state.appState.activeSlide-1;
            state.appState.animationQueue.startDemountCurrentSlide = true;
            state.appState.animationQueue.nextSlide = nextId;
            if (state.appState.activeSlide == 1 || nextId == 1) {
                state.appState.animationQueue.route = 'swipe';
            } else {
                state.appState.animationQueue.route = 'morph';
            }
        },
        unlockNav(state) {
            state.appState.navLocked = false;
        },
        section2SpotInstance(state, data) {
            state.section2SpotInstance = data;
        },
        section3SpotInstance(state, data) {
            state.section3SpotInstance = data;
        },
        setImageEffect(state, data) {

            state.imageEffect = data;
        },
        setZoomEffect(state, data) {
            state.zoomEffect = data;
        },
        setLineEffect(state, data) {
            state.LineEffectBg = data;
        },
        setSectionScroll(state, data) {
            state.sectionScroll = data;
        },
        setSeparateMenu(state, data) {
            state.SeparateMenu = data;
        },
        unsetImageEffect(state) {

            state.imageEffect = null;
        },
        unsetZoomEffect(state) {
            state.zoomEffect = null;
        },
        unsetLineEffect(state) {
            state.LineEffectBg = null;
        },
        unsetSectionScroll(state) {
            state.sectionScroll = null;
        },
        unsetSeparateMenu(state) {
            state.SeparateMenu = null;
        },
        setCurrentPage(state, page) {
            state.CURRENT_PAGE = page;
        },
        showPreloader(state) {
            state.preloaderPercent = 30;
            state.preloader = true;
        },
        hidePreloader(state) {
            state.preloader = false;
        },
        contentOnLoad(state) {
            state.pageLoaded = true;
        },
        setPreloaderPersent(state, percent) {
            state.preloaderPercent = percent;
        },
        increacePercentage(state, percent) {
            state.preloaderPercent += percent;
        },
        setVideo(state, video) {
            state.videoDomElement = video;
        },
        unsetVideo(state) {
            state.videoDomElement = null;
        },
        setPreloaderN(state) {
            state.preloader_n = true;
        },
        unsetPreloaderN(state) {
            state.preloader_n = false;
        },
        setPreloaderNN(state) {
            state.preloader_nn = true;
            state.preloader_n = true;

        },
        unsetPreloaderNN(state) {
            state.preloader_nn = false;
        },
        unsetMenu(state) {
            state.appState.menuDemount = true;
        },
        prepareToNavigation(state) {
            state.appState.navLocked = true;
            state.appState.startDestructionOnRouteLeave = true;
            if (state.appState.menuIsOpened) {
                state.appState.menuNavState = 'PREPARE';
            } else {
                state.preloader_nn = true;
                state.preloader_n = true;
            }
        },
        completeNavigation(state) {
            state.appState.slides = [
                true,
                false,
                false,
                false,
                false
            ];
            state.appState.navLocked = false;
            state.appState.startDestructionOnRouteLeave = false;
            if (state.appState.menuIsOpened) {
                state.appState.menuNavState = 'COMPLETE';
            } else {
                state.preloader_n = false
            }
        },
        enableBrif(state) {
            state.appState.brif = true;
        },
        disableBrif(state) {
            state.appState.brif = false;
        },
        setRuLang(state) {
            state.appState.language = 'ru';
        },
        setEnLang(state) {
            state.appState.language = 'en';
        }
    }
});

export default store
