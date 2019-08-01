<template>
    <div class="brief brief_active">

        <button class="brief-close js-close-brief" @click.prevent="disableBrif">

            <span class="brief-close__text">{{locale[lang].close}}</span>

            <svg class="brief-close__icon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                <path d="M1024.099 46.443l-46.542-46.575-465.557 465.59-465.59-465.59-46.542 46.575 465.557 465.557-465.557 465.557 46.542 46.542 465.59-465.557 465.557 465.557 46.542-46.542-465.557-465.557 465.557-465.557z" />
            </svg>

        </button>

        <section class="container">

            <h1 class="title title_white title_huge brief__title">{{locale[lang].header}}</h1>

            <p class="brief__desc">{{locale[lang].desc1}}<br>{{locale[lang].desc2}}<a style="white-space:nowrap" href="tel:+74733003927">+7 (473) 300 39 27</a></p>

            <form class="brief__form" action="">

                <fieldset class="brief__fieldset">

                    <h2 class="brief__fieldset-title">{{locale[lang].form.title1}}</h2>

                    <div class="brief__types">

                        <label class="brief__checkbox" v-for="(el, index) in locale[lang].form.checkboxes" :key="`ch-${index}`">
                            <input type="checkbox" :value="el"  name="" v-model="form.types">
                            <span>{{el}}</span>
                        </label>

                    </div>

                </fieldset>

                <fieldset class="brief__fieldset">

                    <h2 class="brief__fieldset-title">{{locale[lang].form.title2}}</h2>

                    <div class="brief__budget">

                        <label class="brief__radio" v-for="(el, index) in locale[lang].form.radio" :key="`ra-${index}`">
                            <input type="radio" name="budget"  :value="el" v-model="form.budget">
                            <span>{{el}}</span>
                        </label>

                    </div>

                </fieldset>

                <fieldset class="brief__fieldset">

                    <h2 class="brief__fieldset-title">{{locale[lang].form.title3}}</h2>

                    <TextBox block-class="brief" :title="locale[lang].form.tasks" v-model="form.task"/>

                </fieldset>

                <fieldset class="brief__fieldset">

                    <FileInput block-class="brief" v-model="form.files"/>

                </fieldset>

                <fieldset class="brief__fieldset">

                    <h2 class="brief__fieldset-title">{{locale[lang].form.title4}}</h2>

                    <div class="brief-contact-data">

                        <TextBox block-class="brief" additional-class="brief-contact-data__input" v-model="form.info.name" :title="locale[lang].form.boxes[0]"/>
                        <TextBox class="brief_phone_validate" block-class="brief" additional-class="brief-contact-data__input" v-model="form.info.phone" :title="locale[lang].form.boxes[1]"/>
                        <TextBox block-class="brief" additional-class="brief-contact-data__input brief-contact-data__email" v-model="form.info.email" :title="locale[lang].form.boxes[2]"/>
                        <TextBox block-class="brief" additional-class="brief-contact-data__input" v-model="form.info.company" :title="locale[lang].form.boxes[3]"/>

                    </div>

                </fieldset>
                <!--FORM ERRORS -->
                <p v-if="errors.length" style="color: #fff;" class="lang-static">
                <b>{{locale[lang].errorsLine}}</b>
                   <ul>
                     <li v-for="error in errors" >{{ error }}</li>
                   </ul>
                </p>
                <div class="brief__form-end">

                    <button type="button" class="button button_with-icon-right button_red button_size_normal btn_brf_send" @click.prevent="submitForm">

                        <span class="button__text">{{locale[lang].form.submit}}</span>

                        <svg class="button__icon button__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32">
                            <path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path>
                        </svg>

                    </button>

                    <span class="brief__agreement">{{locale[lang].form.agreement1}}<br>{{locale[lang].form.agreement2}}</span>

                </div>

            </form>

        </section>
        <div ref="accepter" class="accept_form_text">СПАСИБО ЗА ЗАЯВКУ, МЫ УЖЕ НАЧАЛИ ЕЁ ОБРАБАТЫВАТЬ. СКОРО ПЕРЕЗВОНИМ!</div>
    </div>
</template>

<script>
    import axios from 'axios';

    import TextBox from "./TextBox";
    import FileInput from "./FileInput";


    export default {
        name: "Brief",
        components: {FileInput, TextBox},
        data: () => ({
            errors: [],
            emailValidator: null,
            locale: {
                ru: {
                    inputErrName: 'Требуется указать имя',
                    inputErrMail: 'Требуется указать email',
                    inputErrPhone: 'Требуется указать телефон',
                    errorsLine: 'Пожалуйста исправьте указанные ошибки:',
                    close: 'Закрыть',
                    header: 'Заполните бриф',
                    desc1: 'Оставьте заявку, либо звоните, мы пообщаемся ',
                    desc2: ' и сами все за вас заполним: ',
                    form: {
                        title1: 'Типы проектов',
                        checkboxes: [
                            'Разработка сайта',
                            'Сопровождение',
                            'Техническая поддержка',
                            'Продвижение сайта',
                            'Дизайн',
                            'Другое'
                        ],
                        title2: 'Бюджет',
                        radio: [
                            '100-500 тыс.',
                            '500 тыс.-1 млн.',
                            'Более 1 млн.'
                        ],
                        title3: 'Задачи',
                        tasks: 'Описание',
                        title4: 'Контактные данные',
                        boxes: [
                            'Имя',
                            'Телефон',
                            'Email',
                            'Компания'
                        ],
                        submit: 'Отправить',
                        agreement1: 'Нажимая на кнопку, вы даете согласие на обработку персональных данных ',
                        agreement2: ' и соглашаетесь с политикой конфиденциальности.'
                    }
                },
                en: {
                    inputErrName: 'Name is required',
                    inputErrMail: 'Email is required',
                    inputErrPhone: 'Phone number is required',
                    errorsLine: 'Please fix specified errors:',
                    close: 'Close',
                    header: 'fill the brief',
                    desc1: 'Leave the application, or call us. ',
                    desc2: '(we fill in everything for you) ',
                    form: {
                        title1: 'project types',
                        checkboxes: [
                            'Website development',
                            'Maintenance',
                            'Technical support',
                            'Website promotion',
                            'Design',
                            'Other'
                        ],
                        title2: 'BUDGET',
                        radio: [
                            '100-500 thousand',
                            '500 thousand - 1 million',
                            'More than 1 million'
                        ],
                        title3: 'TASKS',
                        tasks: 'Description',
                        title4: 'CONTACT DETAILS',
                        boxes: [
                            'Name',
                            'Phone',
                            'Email',
                            'Company'
                        ],
                        submit: 'Submit',
                        agreement1: 'By clicking on the button, you consent to the processing of personal data ',
                        agreement2: ' and agree to the privacy policy.'
                    }
                }
            },
            form: {
                types: [],
                budget: '',
                task: '',
                files: [],
                info: {
                    name: '',
                    email: '',
                    phone: '',
                    company: ''
                }
            }
        }),
        computed: {
            lang() {
                return this.$store.state.appState.language
            }
        },
        methods: {
            disableBrif() {
                document.body.classList.remove('--overflow-hidden');
                this.$store.commit('disableBrif');
            },
            chechForm(){
              document.querySelector('.brief-contact-data__email .brief__input').addEventListener('input', (e) => {
               this.emailValidator = validateEmail(e.target.value)
               function validateEmail(email) {
                   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                   return re.test(String(email).toLowerCase());
                }
              });
               document.querySelector('.brief_phone_validate .input').addEventListener('input', function (e) {
                 var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                 e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
               });
            },
            submitForm(){
              this.errors = [];
                if (!this.form.info.name) {
                  this.errors.push(this.locale[this.lang].inputErrName);
                }
                if (!this.form.info.phone) {
                  this.errors.push(this.locale[this.lang].inputErrPhone);
                }
                if (this.emailValidator==false) {
                  this.errors.push(this.locale[this.lang].inputErrMail);
                }
                if (this.form.info.name && this.emailValidator==true && this.form.info.phone) {
                  var tl = new TimelineMax()
                      tl.fromTo(this.$refs.accepter,0.55,{y:40, opacity: 0, visibility: 'hidden'},{y:0,opacity: 1, visibility: 'visible'})
                      tl.to(this.$refs.accepter,0.35,{y:-40,opacity: 0},2.5)
                      tl.set(this.$refs.accepter,{visibility: 'hidden'})
                let fd = new FormData();
                fd.append('types', JSON.stringify(this.form.types) || 'не заполнено');
                fd.append('file', document.querySelector('.brief-input-file').files[0]||undefined);
                fd.append('budget', this.form.budget || 'не заполнено');
                fd.append('task', this.form.task || 'не заполнено');
                fd.append('name', this.form.info.name || 'не заполнено');
                fd.append('email', this.form.info.email || 'не заполнено');
                fd.append('phone', this.form.info.phone || 'не заполнено');
                fd.append('company', this.form.info.company || 'не заполнено');
                   this.form.info.name = ''
                   this.form.info.email = ''
                   this.form.info.company = ''
                   this.form.info.phone = ''
                axios.post('/api/mail', fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(data=>{
                    this.$store.commit('disableBrif');
                })
              }
            }
        },
        mounted(){
          if(process.browser){
             this.chechForm()
           }
        }
    }
</script>

<style lang="sass">
    @import "../assets/sass/brief"

    .btn_brf_send
       position: relative
    .btn_brf_send:before
       z-index: -1
       content: ''
       position: absolute
       top: 0
       left: 0
       background: #ff0000
       width: 100%
       height: 100%
       transform: scaleX(1)
       transform-origin: left
       transition: 0.4s ease-out
    .btn_brf_send:hover::before
       transform: scaleX(0)
    .accept_form_text
       position: fixed
       top: 45%
       left: 28%
       background: #180521
       padding: 3%
       font-weight: 800
       font-size: 1.3rem
       max-width: 41%
       text-align: center
       visibility: hidden
       opacity: 0
       color: #fff
       z-index: 99999
       pointer-events: none
</style>
