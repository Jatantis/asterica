<template>
    <div :class="`${blockClass}__file-loader`">
        <button type="button" :class="`button button_with-icon-left button_white-transparent button_size_normal ${blockClass}-file-button js-custom-file`" @click="onButtonClick">

            <input :class="`${blockClass}-input-file`" type="file" :value="value" @input="$emit('input', $event.target.value)" name="" @change="onDataChange" ref="fileHolder">

            <span class="button__background"></span>

            <svg class="button__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="16px">
                <path d="M16.783,6.025 L8.908,13.866 C8.852,13.921 8.783,13.962 8.714,13.990 C8.700,13.990 8.700,13.990 8.700,13.990 C8.631,14.017 8.562,14.031 8.479,14.031 C8.396,14.031 8.326,14.017 8.257,13.990 C8.243,13.990 8.243,13.990 8.243,13.990 C8.174,13.962 8.105,13.921 8.050,13.866 L0.174,6.025 C-0.061,5.790 -0.061,5.418 0.174,5.184 C0.410,4.949 0.783,4.949 1.019,5.184 L7.870,12.019 L7.870,0.595 C7.870,0.264 8.133,0.002 8.465,0.002 C8.797,0.002 9.060,0.264 9.060,0.595 L9.060,12.005 L15.939,5.184 C16.174,4.949 16.548,4.949 16.783,5.184 C17.018,5.418 17.018,5.790 16.783,6.025 ZM0.590,14.817 L16.340,14.817 C16.672,14.817 16.935,15.079 16.935,15.409 C16.935,15.740 16.672,16.002 16.340,16.002 L0.590,16.002 C0.257,16.002 -0.006,15.726 -0.006,15.409 C-0.006,15.079 0.257,14.817 0.590,14.817 Z" />
            </svg>

            <span class="button__text">{{locale[lang].attach}}</span>

        </button>
        <span :class="`${blockClass}-file input-name ${fileName.class}`" @click.prevent="onNameClick">{{fileName.text}}</span>
    </div>
</template>

<script>
    export default {
        name: "FileInput",
        props: [
            'blockClass',
            'value'
        ],
        data: () => ({
            locale: {
                ru: {
                    attach: 'Прикрепить файл'
                },
                en: {
                    attach: 'Attach file'
                }
            },
            fileName: {
                text: '',
                class: ''
            }
        }),
        computed: {
            lang(){
                return this.$store.state.appState.language
            }
        },
        methods: {
            onButtonClick() {
                this.$refs.fileHolder.click();
            },
            onNameClick() {
                this.$refs.fileHolder.value = '';
                this.fileName.class = `${this.blockClass}-file_active`;
                this.fileName.text = '';
            },
            onDataChange() {
                if (this.$refs.fileHolder.files.length > 0) {
                    this.fileName.class = `${this.blockClass}-file_active`;
                    this.fileName.text = this.$refs.fileHolder.files[0].name;
                } else {
                    this.$refs.fileHolder.value = '';
                    this.fileName.class = `${this.blockClass}-file_active`;
                    this.fileName.text = '';
                }

            }

        }
    }
</script>

<style scoped>

</style>