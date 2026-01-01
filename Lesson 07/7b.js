
function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector(".js-cost-input");

    let cost = Number(inputElement.value * 100);

    if (cost < 4000) {
        cost = cost + 1000;
        document.querySelector('.js-total-cost').innerHTML = `$${cost / 100}`;
    } else {
        document.querySelector('.js-total-cost').innerHTML = `$${cost / 100}`;
    }
}
