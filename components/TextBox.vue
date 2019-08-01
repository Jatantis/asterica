<template>
    <label :class="`${blockClass}__input-label ${additionalClass}`">
        <span :class="`${blockClass}__input-text ${useDecrypt ? 'lang-decrypt' : ''}`" :data-text="title">{{title}}</span>
        <input :class="`input ${blockClass}__input`" :value="value" @input="$emit('input', $event.target.value)" type="text" @keyup="inputFocus" @keydown="inputFocus" @focus="inputFocus" @blur="inputBlur">
    </label>
</template>

<script>
    export default {
        name: "TextBox",
        props: [
            'blockClass',
            'additionalClass',
            'title',
            'useDecrypt',
            'value'
        ],
        methods: {
            inputFocus(evt) {
                evt.target.parentElement.classList.add('focused');
            },
            inputBlur(evt) {
                if (evt.target.value.length === 0) {
                    evt.target.parentElement.classList.remove('focused');
                }
            }
        }
    }
</script>

<style scoped>

</style>
