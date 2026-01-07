function updateButtonElement() {
    const buttonElement = document.querySelector('.js-button');

    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.innerHTML = 'ON';
        buttonElement.classList.remove('is-toggled');
    } else {
        buttonElement.innerHTML = 'OFF';
        buttonElement.classList.add('is-toggled');
    }
}