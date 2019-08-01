<template>
    <header class="header">
            <nuxt-link :to="newRoute.home" class="logo_link">
                  <svg xmlns="http://www.w3.org/2000/svg" class="logo logo_white header__logo asterica_link" viewBox="0 0 735 605" fill="none">
                  <path d="M594.428 450.43L334.587 3H401.104L732.251 512.526H189.289L227.153 450.43H594.428Z" fill="white" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 526.914L335.086 3L595.304 450.006H496.298L321.583 148.538L44.0106 601.655L3 526.914Z" fill="white" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M321.647 148.457L368.543 229.427L193.551 511.012H732.251V601.656H44.0117L321.647 148.457Z" fill="white" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M537.963 353.841H195.459L255.497 402.854H474.58L537.963 353.841Z" fill="white"/>
                  <path d="M469.322 405.354C470.703 405.354 471.822 404.234 471.822 402.854C471.822 401.473 470.703 400.354 469.322 400.354V405.354ZM260.076 400.354C258.696 400.354 257.576 401.473 257.576 402.854C257.576 404.234 258.696 405.354 260.076 405.354V400.354ZM194.945 356.341H541.785V351.341H194.945V356.341ZM469.322 400.354H260.076V405.354H469.322V400.354Z" fill="black"/>
                  <path d="M550.575 353.84H190.787H177.552H164.316L197.006 302.327H519.314L550.575 353.84Z" fill="white"/>
                  <path d="M195.584 351.341C194.203 351.341 193.084 352.46 193.084 353.841C193.084 355.222 194.203 356.341 195.584 356.341V351.341ZM539.852 356.341C541.233 356.341 542.352 355.222 542.352 353.841C542.352 352.46 541.233 351.341 539.852 351.341V356.341ZM509.803 305.45C511.184 305.45 512.303 304.331 512.303 302.95C512.303 301.569 511.184 300.45 509.803 300.45V305.45ZM227.007 300.45C225.626 300.45 224.507 301.569 224.507 302.95C224.507 304.331 225.626 305.45 227.007 305.45V300.45ZM195.584 356.341H539.852V351.341H195.584V356.341ZM509.803 300.45H227.007V305.45H509.803V300.45Z" fill="black"/>
                  </svg>
                  <span class="logo_title">
                    <span ref="logoTitle" class="logo_title_name">
                      ASTERICA
                    </span>
                    <span class="logo_subtitle_name">
                      <span class="letter">D</span>
                      <span class="letter">I</span>
                      <span class="letter">G</span>
                      <span class="letter">I</span>
                      <span class="letter">T</span>
                      <span class="letter">A</span>
                      <span class="letter">L</span>
                      <span class="letter">.</span>
                      <span class="letter">T</span>
                      <span class="letter">R</span>
                      <span class="letter">A</span>
                      <span class="letter">N</span>
                      <span class="letter">S</span>
                      <span class="letter">F</span>
                      <span class="letter">O</span>
                      <span class="letter">R</span>
                      <span class="letter">M</span>
                      <span class="letter">.</span>
                    </span>
                  </span>
            </nuxt-link>


            <button class="header__menu open-menu" @click.prevent="menuHandler">

                 <div class="menu_box" style="display: flex; justify-content: center; align-items: center;">
                      <span ref="close" class="open-menu__text lang-decrypt menu_text_anim menu_closed" :data-text="locale[lang].close">{{locale[lang].close}}</span>
                      <span ref="menu" class="open-menu__text lang-decrypt menu_text_anim" :data-text="locale[lang].menu">{{locale[lang].menu}}</span>
                        <span ref="icon" key="open" class="open-menu-icon menu_icon_anim asterica_link">
                            <i ref="item" class="open-menu-icon__item" key="open-menu-icon__item"></i>
                            <i class="open-menu-icon__item" key="open-menu-icon__item1"></i>
                            <i class="open-menu-icon__item" key="open-menu-icon__item2"></i>
                            <i class="open-menu-icon__item" key="open-menu-icon__item3"></i>
                        </span>
                </div>
            </button>

        </header>
</template>

<script>
    import { Fragment } from 'vue-fragment'
    import { TweenMax } from 'gsap'

    export default {
        name: "Header",
        data: () => ({
           tl: null,
           menuClose: null,
           newRoute: {
             home: ''
           },
           locale: {
               ru: {
                   menu: 'Меню',
                   close: 'Закрыть'
               },
               en: {
                   menu: 'Menu',
                   close: 'Close'
               }
           }
        }),
        computed: {
          preloader(){
            return this.$store.state.preloader;
          },
          showOpenButton() {
              return !this.$store.state.appState.menuIsOpened
          },
          lang() {
              return this.$store.state.appState.language
          }
        },
        watch: {
          preloader(val){
            this.playStart()
          },
          lang(){
              this.computePath()
          },
          showOpenButton(newVal){
            if (this.showOpenButton) {
                this.tl.reverse()
            } else {
                this.tl.play()
            }
          }
        },
        components: { Fragment },
        methods: {
            computePath: function () {
              var $self = this
                if(this.lang=='en'){
                   $self.newRoute.home = '/en/'
                } else{
                   $self.newRoute.home = '/'
                }
           },
            playStart(){
              var menu = this.$refs.menu
              var close = this.$refs.close
              var tl = new TimelineMax()
                  tl.fromTo(menu,0.55,{opacity: 0},{opacity: 1, ease: Sine.easeInOut},0.5)
                  tl.fromTo('.logo_title_name',0.55,{y:40,opacity: 0},{y:0,opacity: 1, ease: Sine.easeInOut},0.5)
                  tl.staggerFromTo('.logo_subtitle_name .letter',0.45,{opacity: 0},{opacity: 1},0.1)
                  tl.staggerTo('.logo_subtitle_name',0.35,{opacity: 0},0.1,4.5)
                  tl.to('.logo_title_name',0.55,{lineHeight:5,opacity: 0, ease: Sine.easeInOut},4.8)
                  tl.to('.open-menu__text',0.55,{lineHeight:5,opacity: 0, ease: Sine.easeInOut},4.8)
            },
            enter(){
              let icon = this.$refs.icon
              let items = icon.querySelectorAll('.open-menu-icon__item')
              var itemsWidth = this.$refs.item.style.width
              var menu = this.$refs.menu
                  menu.style.display = 'block'
              var close = this.$refs.close
              this.tl = new TimelineMax({paused: true, reversed: true})
                   this.tl.to(items ,0.4,{width: 20, height: 20, ease: Sine.easeInOut, transformOrigin:'left'})
                   this.tl.to(icon ,0.45,{rotation: 45,  ease: Sine.easeOut})
                   this.tl.to(items ,0.45,{width: itemsWidth, height: itemsWidth, ease: Sine.easeInOut})
                   this.tl.fromTo(menu ,0.45,{y: 0},{y: -60, ease: Sine.easeInOut},0.45)
                   this.tl.fromTo(close ,0.45,{y: 60},{y: 0, ease: Sine.easeInOut},0.45)
            },
            menuHandler() {
                if (this.showOpenButton) {
                    this.$store.commit('APPSTATE_MENU_TOGGLE')
                } else {
                    this.$store.commit('unsetMenu')
                }
            }
        },
        mounted(){
           this.enter()
           this.computePath()
        }
    }
</script>

<style lang="sass" >
    @import "../assets/sass/header.sass"
    .logo_link
       outline: none
       text-decoration: none
       display: flex
       align-items: center
    .logo_title
       align-items: flex-start
       margin-left: 0.5em
       font-family: 'Bebas neue'
       white-space: nowrap
       display: flex
       flex-direction: column
       color: #fff
       text-align: center
    .logo_title_name
       overflow: hidden
       font-weight: 600
       font-size: 2.3em
       letter-spacing: 0.06em
       display: inline-block
       height: 1em
       line-height: 1em
       transition: 0.45s ease-in-out
    .logo_subtitle_name
       font-size: 0.9em
       transition: 0.25s ease-in
       display: inline-block
    .logo_subtitle_name .letter
       display: inline-block
    .logo_link:hover .logo_title .logo_subtitle_name
       opacity: 1 !important
    .logo_link:hover .logo_title .logo_title_name
       line-height: 1em !important
       opacity: 1 !important
    .open-menu__text
       transition: 0.45s ease-in-out
    .menu_box:hover .open-menu__text
       line-height: 1em !important
       opacity: 1 !important
    .header__menu
       will-change: transform
       padding: 1%
       overflow: hidden
       width: 100%
       display: flex
       justify-content: flex-end
    .menu_box
       position: relative
    .open-menu__text
       overflow: hidden
       height: 1em
       line-height: 1em
    .menu_text_anim
       position: absolute
       margin-left: -4rem
    .menu_closed
       margin-left: -4rem

    @media (min-width: 1400px)
         .company-first .container, .team .container
             padding: 0 150px !important
         .team_bg_lines
             left: -22%

    @-moz-document url-prefix('')
         .menu_closed
            margin-left: -5.5rem !important

    @media screen and (-moz-images-in-menus:0)
         .menu_closed
            margin-left: -5.5rem !important


</style>
