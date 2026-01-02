const Buttons = document.querySelector(".js-button");

function buttonElement() {
    if (Buttons.innerHTML === '7d') {
        document.querySelector(".js-button").innerHTML = "7d done!";
    } else {
        document.querySelector(".js-button").innerHTML = "7d";
    }
    
}