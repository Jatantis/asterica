<template>
    <div class="preload2">
        <div class="block s1" ></div>
        <div class="block s2" ></div>
        <div class="block s3" ></div>
        <div class="block s4" ></div>
    </div>
</template>

<script>
    import * as anime from 'animejs'
    export default {
        name: "preloader2",
        computed: {
            destroy() {
                return this.$store.state.preloader_n;
            }
        },
        watch: {

            destroy(newVal, oldVal) {

                if (newVal != oldVal && newVal == false) {
                    console.log('unsetPreloaderN-start')
                    clearInterval(this.intervalId);
                    anime.remove(Array.from(document.querySelectorAll('.block')));
                    setTimeout(()=>{
                        anime({
                            targets: Array.from(document.querySelectorAll('.block')),
                            translateY: [0, '100%'],
                            // background: '#000',
                            easing: 'easeOutCirc',
                            duration: 500,
                            elasticity: 0,
                            delay(el, i) {
                                return i * 150
                            },
                            complete: () => {
                                // this.$store.commit('unsetPreloaderNN');
                            }
                        })
                    },1000)
                }
            }
        },
        mounted() {
            this.intervalId = null;
            anime({
                targets: Array.from(document.querySelectorAll('.block')).reverse(),
                translateY: ['-100%', 0],
                easing: 'easeOutCirc',
                duration: 500,
                elasticity: 0,
                delay(el, i) {
                    return i*150
                },
                complete: () => {
                    // let i = 0;
                    // this.intervalId = setInterval(() => {
                    //     if (i>3) i = 0;
                    //
                    //     anime({
                    //         targets: document.querySelectorAll('.block')[i],
                    //         background: '#000',
                    //         duration: 300,
                    //         easing: 'linear',
                    //         direction: 'alternate',
                    //         elasticity: 0,
                    //     })
                    //     i++;
                    // }, 300);


                }
            })
        }
    }
</script>

<style scoped>

    .preload2 {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 20;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .block {
        width: 25%;
        height: 100vh;
        transform-origin: 100% 0;
        will-change: transform;
        /* transition: all 1s linear; */
    }


    .s1 {
        /* transform: translateX(240%) scaleX(0.2); */
        background-image: url(../assets/img/sections/section2/bg.jpg);

        /* transform: translateX(400%) scaleX(0.2); */
    }

    .s2 {
        /* transform: translateX(160%) scaleX(0.2); */
        background-image: url(../assets/img/sections/section2/bg.jpg);
        background-position: 23% 0;
        /* transform: translateX(300%) scaleX(0.2); */
    }

    .s3 {
        /* transform: translateX(80%) scaleX(0.2); */
        background-image: url(../assets/img/sections/section2/bg.jpg);
        background-position: 46% 0;
        /* transform: translateX(200%) scaleX(0.2); */
    }

    .s4 {
        /* transform: translateX(0) scaleX(0.2); */
        background-image: url(../assets/img/sections/section2/bg.jpg);
        background-position: 69% 0;
        /* transform: translateX(100%) scaleX(0.2); */
    }


</style>