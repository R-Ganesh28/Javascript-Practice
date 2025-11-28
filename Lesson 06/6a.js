/*
We have a basketball product. This product has a name of 'basketball' a price of 2095 cents.
Create an object to represent this product and display it in the console.
*/

const product = {
    name : 'basketball',
    price : 2095
};
console.log(product);

/* continuing from above, we want to increase the price by 500 cents.
Use dot notation to increase the price, and display the updated object 
in the console. */

product.price += 500;
console.log(product);

/* Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. 
Display the updated object in the console. */

product['delivery-time'] = '3 days';
console.log(product);

/* Create a function 'comparePrice(product1, product2)', 
which takes 2 product(with 'name' and 'price' properties) 
and returns the product that is less expensive. 
Create 2 products and try out the function. */

function comparePrice(product1, product2) {
    if (product1.price < product2.price){
        return product1;
    } else {
        return product2;
    }
}
const product1 = {
    name: 'basketball',
    price: 2095
};
const product2 = {
    name: 'gloves',
    price: 1095
};

console.log(comparePrice(product1, product2));

/* Create a function 'isSameProduct(product1, product2)', Which returns true if 2 product have the same values inside('name' and 'price').
If not, return false. Create 2 products and try out the function.
*/

function isSameProduct(products1, products2) {
    if (products1.name === products2.name && products1.price === products2.price) {
        return true;
    } else {
        return false;
    }
}

const products1 = {
    name: 'bat',
    price: 2045
};

const products2 = {
    name: 'bat',
    price: 2045
};

console.log(isSameProduct(products1, products2));

