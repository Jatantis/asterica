
/**
 * Открытие и закрытие брифа.
 */



export function brief () {
    let openHandler = document.querySelector('.js-open-brief');
    let closeHandler = document.querySelector('.js-close-brief');
    let brief = document.querySelector('.brief');

    if (openHandler) {
        openHandler.addEventListener('click', function () {
            brief.classList.add('brief_active');
            document.body.classList.add('--overflow-hidden');
        });
        closeHandler.addEventListener('click', function () {
            brief.classList.remove('brief_active');
            document.body.classList.remove('--overflow-hidden');
        });
    }
}

/**
 * Кастомный файловый инпут.
 */

export function makeBriefCustomFileInput () {
    let btn = document.querySelector('.js-custom-file');
    
    if (btn) {
        let input = btn.querySelector('input');
        let fileName = document.querySelector('.js-brief-file-name');

        btn.addEventListener('click', function () {
            input.click();
        })

        input.addEventListener('change', function () {
            if (this.files.length > 0) {
                fileName.classList.add('brief-file_active');
                fileName.innerText = this.files[0].name;
            } else {
                this.value = '';
                fileName.classList.remove('brief-file_active');
                fileName.innerText = '';
            }
        });

        fileName.addEventListener('click', function () {
            input.value = '';
            this.classList.remove('brief-file_active');
            this.innerText = '';
        });
    }
}

/**
 * Поднимает label при фокусе на поле.
 */

export function inputFocus () {
    let inputs = Array.from(document.querySelectorAll('.js-focus-animation'));

    inputs.forEach(el => {
        el.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });
        el.addEventListener('blur', function () {
            if (this.value.length === 0) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
}