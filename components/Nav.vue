<template>
    <nav class="section-nav">
        <button :disabled="hidePrev" class="asterica_link section-nav__button js-to-prev-section" @click.prevent="setPrevSection">
            <svg class="section-nav__arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1613 1024">
                <path d="M6.501 800l224 224 575.999-575.999 575.999 575.999 224-224-800-800-224 224z" />
            </svg>
        </button>
        <ul>
            <li><a class="asterica_link" href="#" data-id="1" :class="'section-nav__item ' + (activeSlide == 1 ? 'active' : '')" @click.prevent="setSection(1)"></a></li>
            <li><a class="asterica_link" href="#" data-id="2" :class="'section-nav__item ' + (activeSlide == 2 ? 'active' : '')" @click.prevent="setSection(2)"></a></li>
            <li><a class="asterica_link" href="#" data-id="3" :class="'section-nav__item ' + (activeSlide == 3 ? 'active' : '')" @click.prevent="setSection(3)"></a></li>
            <li><a class="asterica_link" href="#" data-id="4" :class="'section-nav__item ' + (activeSlide == 4 ? 'active' : '')" @click.prevent="setSection(4)"></a></li>
            <li><a class="asterica_link" href="#" data-id="5" :class="'section-nav__item ' + (activeSlide == 5 ? 'active' : '')" @click.prevent="setSection(5)"></a></li>
        </ul>
        <button :disabled="hideNext" class="asterica_link section-nav__button js-to-next-section" @click.prevent="setNextSection">
            <svg class="section-nav__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1613 1024">
                <path d="M6.501 224l224-224 575.999 575.999 575.999-575.999 224 224-800 800-224-224z"></path>
            </svg>
        </button>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        data: ()=> ({
           firstTouch: 0
        }),
        computed: {
            hidePrev() {
                return this.$store.state.appState.activeSlide == 1;
            },
            hideNext() {
                return this.$store.state.appState.activeSlide == 5;
            },
            activeSlide() {
                return this.$store.state.appState.activeSlide;
            }
        },
        methods: {
          setNextSection: function() {
              if (!this.$store.getters.isLockedNav) {
                  this.$store.commit('setAnimationQueue', this.activeSlide + 1);
              }
          },
          setPrevSection: function() {
              if (!this.$store.getters.isLockedNav) {
                  this.$store.commit('setAnimationQueue', this.activeSlide - 1);
              }
          },
          setSection: function (sectionId) {
            //console.log("SLIDE");
              if (this.$store.state.appState.activeSlide != sectionId && !this.$store.getters.isLockedNav) {
                  this.$store.commit('setAnimationQueue', sectionId);
              }
          },
          keyUpHandler(e) {
              let key = e.keyCode;
              let numbersKeyCodes = {
                  49: 1,
                  50: 2,
                  51: 3,
                  52: 4,
                  53: 5
              };
              let numpadKeyCodes = {
                  97: 1,
                  98: 2,
                  99: 3,
                  100: 4,
                  101: 5
              };
            if( !this.$store.state.appState.brif ){
              if (e.target.nodeName !== "INPUT") {
                  if (key == 40) {
                      !this.hideNext && this.setNextSection();
                  } else if (key == 38) {
                      !this.hidePrev && this.setPrevSection();
                  } else if (key >= 49 && key <= 53) {
                      this.setSection(numbersKeyCodes[key]);
                  } else if (key >= 97 && key <= 101) {
                      this.setSection(numpadKeyCodes[key]);
                  }
              }
            }
          },
          wheelHandler(e) {
            if( !this.$store.state.appState.brif ){
              if (e.deltaY > 0) {
                  !this.hideNext && this.setNextSection();
              } else {
                  !this.hidePrev && this.setPrevSection();
              }
            }
          },
          touchStartEvent(e){
            this.firstTouch = e.touches[0].clientY;
          },
          touchMoveEvent(e){
            if( !this.$store.state.appState.brif ){
            var moved = e.changedTouches[0].clientY;
                 if(this.firstTouch > moved+5){
                     !this.hideNext && this.setNextSection();
                 }else if(this.firstTouch < moved-5){
                     !this.hidePrev && this.setPrevSection();
                 }
            }
          }
        },
        beforeDestroy(){
            document.body.removeEventListener('touchstart', this.touchStartEvent);
            document.body.removeEventListener('touchend', this.touchMoveEvent);
            document.body.removeEventListener('keyup', this.keyUpHandler);
            document.body.removeEventListener('wheel', this.wheelHandler);
        },
        mounted() {
            document.body.addEventListener('touchstart', this.touchStartEvent);
            document.body.addEventListener('touchend', this.touchMoveEvent);
            document.body.addEventListener('wheel', this.wheelHandler);
            document.body.addEventListener('wheel', this.wheelHandler);

        }
    }
</script>

<style  lang="sass">
    @import "../assets/sass/section-nav.sass"
</style>
