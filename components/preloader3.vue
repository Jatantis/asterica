<template>
    <div class="preloader_full"></div>
</template>

<script>
    import * as anime from 'animejs'
    export default {
        name: "preloader3",
        computed: {
            destroy() {
                return this.$store.state.preloader_n;
            }
        },
        watch: {

            destroy(newVal, oldVal) {
                if (newVal != oldVal && newVal == false) {
                    if (this.$store.state.imageEffect) {
                        this.$store.state.imageEffect.renderSceneOnce(1);
                    }
                    setTimeout(()=> {
                        let item = document.querySelector('.preloader_full');
                        let timeline = anime.timeline();

                        let tg = {
                            value: 0,
                        };

                        timeline
                            .add({
                                targets: tg,
                                value: [100, 0],
                                easing: 'easeOutCubic',
                                duration: 1000,
                                elasticity: 0,
                                update(){
                                    item.style.backgroundImage = `linear-gradient(60deg, rgba(0,0,0,1) , rgba(0,0,0,1) ${tg.value}%, rgba(0,0,0,0.5))`
                                }
                            })
                            .add({
                                targets: item,
                                opacity: [1,0],
                                easing: 'easeOutCubic',
                                duration: 600,
                                offset: 400,
                                elasticity: 0,
                                complete: () => {
                                    this.$store.commit('unsetPreloaderNN')
                                }
                            })
                    }, 700)

                }
            }
        },
        mounted() {
            var video = document.querySelector('.section__video')
                video.load();
                video.addEventListener('loadeddata', function() {
                  let item = document.querySelector('.preloader_full');
                  let tg = {
                      value: 0,
                  };
                  let timeline = anime.timeline();
                  timeline
                      .add({
                          targets: item,
                          opacity: [0,1],
                          easing: 'easeOutCubic',
                          duration: 1000,
                          elasticity: 0
                      })
                      .add({
                          targets: tg,
                          value: [0, 100],
                          easing: 'easeOutCubic',
                          duration: 900,
                          offset: 100,
                          elasticity: 0,
                          update(){
                              item.style.backgroundImage = `linear-gradient(60deg, rgba(0,0,0,1) , rgba(0,0,0,1) ${tg.value}%, rgba(0,0,0,0.5))`
                          }
                      })
                }, false);

        }
    }
</script>

<style lang="sass" >
    .preloader_full
        position: fixed
        top: 0
        right: 0
        bottom: 0
        left: 0
        opacity: 0
        z-index: 11
        display: flex
        align-items: center
        background: linear-gradient(60deg, black, black 0%, rgba(0, 0, 0, 0.5))
</style>
