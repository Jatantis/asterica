<template>
  <div>
    <CustomCursor />
    <transition name="prl">
      <Preloader v-if="isActivePreloader"/>
    </transition>
    <Preloader3 v-if="isActivePreloader2"/>

    <div><Menu v-if="isActiveMenu"/></div>

    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
    import Header from './../components/Header';
    import Footer from "./../components/Footer";
    import Preloader from "./../components/Preloader";
    import Menu from "./../components/Menu";
    import Preloader3 from "./../components/preloader3";
    import CustomCursor from './../components/interface/Cursor';


    export default {
        computed: {
            isActivePreloader() {
                return this.$store.state.preloader;
            },
            isActivePreloader2() {
                return this.$store.state.preloader_nn;
            },
            isActiveMenu() {
                return this.$store.state.appState.menuIsOpened
            }
        },
        components: { 
          Footer, Header,Preloader, Preloader3, Menu, CustomCursor
        },
        methods: {
          contentLoaded(){
            var $self = this
            window.onload = function() {
                $self.$store.commit('contentOnLoad');
            }
          }
        },
        mounted() {

          this.$nextTick(() => {
            this.contentLoaded()
          });
            // inputFocus();
            // makeBriefCustomFileInput();
            // brief(); // навешивает события на открытие попапа брифа
        }
    }
</script>

<style lang="css">
  @import "./../assets/css/normalize.css";
  /* @import "./../assets/css/fonts.css"; */
  /*@import "assets/css/main.css";*/
</style>

<style lang="sass">

  /*@import "./assets/css/normalize.css"*/
  @import "./../assets/sass/all.sass"
  @import "./../assets/sass/styles.sass"
  @import "./../assets/sass/elements/button.sass"
  @import "./../assets/sass/elements/text.sass"
  @import "./../assets/sass/elements/textWithBg.sass"
  @import "./../assets/sass/elements/title.sass"

  html, body
    overflow: hidden
    max-height: 100vh
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    -webkit-text-size-adjust: none
    scroll-behavior: smooth
  .backgrounds
    height: 100vh
    width: 100vw
  .prl
    will-change: opacity
    &-enter, &-leave-to
      opacity: 0
    &-enter-active, &-leave-active
      transition: opacity .5s cubic-bezier(0.6, 0.04, 0.98, 0.335)

</style>
