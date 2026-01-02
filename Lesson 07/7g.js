function buttonElement() {
    const inputElement = document.querySelector('.js-input');
    document.querySelector('.js-result').innerHTML = `Your name is: ${inputElement.value}`;
}

function handleKeydown(event) {
    if (event.key === 'Enter') {
        buttonElement();
    }
}