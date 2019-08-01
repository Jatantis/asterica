<template>
    <div class="page-number">

        <svg xmlns="http://www.w3.org/2000/svg" width="160px" height="179px">
            <mask id="wave">
                <path class="page-number__mask js-wave-path" transform="translate(0, 120)"
                      d="m-0.25,39.875c0,0 10.5,-29.75 30.75,-29.75c20.25,0 23.75,16 29.75,29.625c6,13.625 9.75,30.375 29.75,30.375c20,0 29.75,-30.25 29.75,-30.375c0,-0.125 78,108.875 78,183.75c0,74.875 -256.5,-6.875 -256.5,-7c0,-0.125 58.5,-176.625 58.5,-176.625z"
                />
            </mask>
        </svg>

        <svg class="page-number__text" xmlns="http://www.w3.org/2000/svg">
            <text class="page-number__number page-number__number-colored page-number__number_1" font-family="HeatherGreen" x="0" y="145">01</text>
            <text class="page-number__number page-number__number_masked" mask="url(#wave)" font-family="HeatherGreen" x="0" y="145">01</text>
        </svg>

    </div>
</template>

<script>
    import * as anime from 'animejs'
    import { morphWave,removeWave } from './../assets/js/animateFunctions'

    export default {
        name: "PageCounter",
        data: () => {
            return {
                wavePosition: {
                    value: 120
                }
            }
        },
        computed: {
            currentSlide() {
                return this.$store.state.appState.activeSlide
            }
        },
        watch: {
            currentSlide: function (newValue) {
                for (let i in this.digits) {
                    if (this.digits.hasOwnProperty(i)) {
                        this.digits[i].innerHTML = '0' + newValue;
                        if (this.digits[i].classList.contains('page-number__number-colored')) {
                            this.digits[i].setAttribute('class', `page-number__number page-number__number-colored page-number__number_${newValue}`)
                        }
                    }
                }

                anime({
                    targets: this.wavePosition,
                    value: this.waveSteps[newValue],
                    duration: 800,
                    easing: 'easeOutSine',
                    update: () => {
                        this.waveNode.setAttribute('transform', `translate(0, ${this.wavePosition.value})`);
                    }
                });
            }
        },
        beforeDestroy(){
            removeWave();
        },
        mounted() {
            morphWave();

            this.waveSteps = {
                1: 120,
                2: 90,
                3: 60,
                4: 40,
                5: 10
            }
            this.waveNode = document.querySelector('.page-number .js-wave-path');
            this.digits = document.querySelectorAll('.page-number .page-number__number');
        }
    }
</script>

<style lang="sass" >
    /*@import './../assets/sass/footer'*/
    @import "./../assets/sass/page-number"
</style>