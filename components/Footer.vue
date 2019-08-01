<template>
    <footer class="footer">

        <div class="language">

            <a class="asterica_link language__link active" href="#" @click.prevent="setRussian">RU</a>

            <a class="asterica_link language__link" href="#" @click.prevent="setEnglish">EN</a>

        </div>

        <PageCounter v-if="isMainPage"/>

    </footer>
</template>

<script>


    import PageCounter from "./PageCounter";

    export default {
        name: "Footer",
        components: {PageCounter},
        computed: {
            isMainPage() {
                return this.$store.getters.getPage == this.$store.state.PAGES.MAIN;
            }
        },
        methods: {
            checkCurrentPage(){
              var thisPage = this.$route.path
                  thisPage.indexOf('en')==1? this.setEnglish(): this.setRussian();
            },
            setRussian() {
                  this.$store.commit('setRuLang')
            },
            setEnglish() {
                  this.$store.commit('setEnLang')
            }
        },
        mounted(){
          this.checkCurrentPage()
        }
    }
</script>

<style  lang="sass">
@import './../assets/sass/footer'

@media (max-width: 768px)
    .language
       bottom: 20px
       left: 30px
       font-size: 30px
    .page-number__number
       font-size: 150px
    .page-number__text
       height: 153px
</style>
