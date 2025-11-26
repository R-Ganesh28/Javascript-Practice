/* Create a function called 'greet' that display the message 'Hello!'
 in the console.Call/run  this function a few times using: greet()
*/

function greet() {
    console.log('Hello!');
}
greet();

/* Continuing from above, add a parameter called 'name' to the 'greets'
function and display the message. Call the function a few times with different names.
*/

function greets(name) {
    console.log('Hello! ' + name);
}
greets('Ram');
greets('Sam');
greets('Simon');

/* Modify the function so that if name is undefined,
 it will display 'Hi there!' instead. */

function greets(name) {
    if (!name) {
        console.log('Hi there!');
    } else {
        console.log('Hello! ' + name);
    }
}
greets('Raj');
greets('Chan');
greets();