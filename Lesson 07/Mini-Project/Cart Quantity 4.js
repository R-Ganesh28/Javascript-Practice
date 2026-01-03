let cartQuantity = 0;

displayCartQuantity();

function updateCartQuantity(value) {
    if (value !== 0) {
        if (cartQuantity + value > 10) {
            alert('the cart is full.');
            return;
        }
        if (cartQuantity + value < 0) {
            alert('Not enough items in the cart.');
            return;
        } 

        cartQuantity += value;
        
    }
    else {
        cartQuantity = 0;
        alert('Cart is reset.');
        
    }
    displayCartQuantity();
}

function displayCartQuantity() {
    document.querySelector('.js-result').innerHTML = `Cart Quantity: ${cartQuantity}`;
}
