/* Create a function that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
Formula: Fahrenheit = (Celsius * 9/5) + 32
convert to Fahrenheit(25) => 77
*/
function convertToFahrenheit(celsius) {
    let Fahrenheit = ((celsius * 9/5) + 32);
    //console.log(Fahrenheit);
    return ((celsius * 9/5) + 32); // return added for convertTemperature sake
}
convertToFahrenheit(25);
convertToFahrenheit(30);




/* Same as above convert Fahrenheit to celsius with the function.
Formula: Celsius = (Fahrenheit - 32) * 5/9
convert to celsius(86) => 30
*/
function converttoCelsius(Fahrenheit) {
    let Celsius = ((Fahrenheit - 32) * 5/9);
    //console.log(Celsius);
    return ((Fahrenheit - 32) * 5/9); // return added for convertTemperature sake
}
converttoCelsius(86);
converttoCelsius(77);

/* Create a function 'convertTemprature(degrees, unit)' that takes a
number and a unit ('C' or 'F'), and converts it into the other unit.
eg:- convertTemperature(25, 'C') => '77F'
     convertTemperature(86, 'F') => '30C'
*/

function convertTemperature(degrees, unit) {
    if (unit === 'C') {
        console.log(convertToFahrenheit(degrees) + 'F');
    } else {
        console.log(converttoCelsius(degrees) + 'C');
    }
}
convertTemperature(25, 'C');
convertTemperature(86, 'F');
