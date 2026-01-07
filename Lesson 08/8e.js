function updateButtonElement1() {
    const buttonElement = document.querySelector('.js-button-1');

    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {
        buttonElement.classList.add('is-toggled');
    }
}

function updateButtonElement2() {
    const buttonElement = document.querySelector('.js-button-2');

    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {
        buttonElement.classList.add('is-toggled');
    }
}

function updateButtonElement3() {
    const buttonElement = document.querySelector('.js-button-3');

    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {
        buttonElement.classList.add('is-toggled');
    }
}
