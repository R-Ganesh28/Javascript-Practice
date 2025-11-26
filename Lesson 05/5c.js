/* Create a function convertlength(length, from, to) that takes a number and a unit('km or miles') and convert the length to another unit  ('km' or 'miles').
Note: 1 mile = 1.6 km(approximately).
eg: convertlength(50, 'miles', 'km') => '80 km'
    convertlength(32, 'km', 'miles') => '20 km'
    convertlength(50, 'km', 'km') => '50 km'
*/

function convertLength(length, from, to) {
    if (from === 'km' && to === 'miles') {
        let result = length * 10/16;
        console.log(result +' '+ to);
    } else if (from === 'miles' && to === 'km') {
        let result = length * 1.6;
        console.log(result +' ' + to);
    } else {
        console.log(length +' '+ to);
    }
}

convertLength(50, 'miles', 'km')
convertLength(32, 'km', 'miles')
convertLength(50, 'km', 'km')

/* Update convertLength to support converting between km, miles, feet.
1 mile = 5280ft , 1km = 3281ft (approximately).
*/

function convertLength(length, from, to) {
    if (from === 'km' && to === 'miles') {
        let result = length * 10/16;
        console.log(result +' '+ to);
    } else if (from === 'miles' && to === 'km') {
        let result = length * 1.6;
        console.log(result +' ' + to);
    } else if (from === to) {
        console.log(length +' '+ to);
    } else if (from === 'ft' && to === 'miles') {
        let result = length / 5280;
        console.log(result +' '+ to);
    } else if (from === 'miles' && to === 'ft') {
        let result = length * 5280;
        console.log(result +' '+ to);
    } else if (from === 'ft' && to === 'km') {
        let result = length / 3281;
        console.log(result +' '+ to);
    }  else if (from === 'km' && to === 'ft') {
        let result = length * 3281;
        console.log(result +' '+ to);
    }
}

convertLength(5, 'miles', 'km');
convertLength(5, 'miles', 'ft');
convertLength(5, 'km', 'ft');

/* Update convertLength so that if you give it an invalid unit,
  it will return `invalid unit: ${unit}`.
*/

function convertLength(length, from, to) {
    if (from === 'km' && to === 'miles') {
        let result = length * 10/16;
        console.log(result +' '+ to);

    } else if (from === 'miles' && to === 'km') {
        let result = length * 1.6;
        console.log(result +' ' + to);

    } else if (from === 'ft' && to === 'miles') {
        let result = length / 5280;
        console.log(result +' '+ to);

    } else if (from === 'miles' && to === 'ft') {
        let result = length * 5280;
        console.log(result +' '+ to);

    } else if (from === 'ft' && to === 'km') {
        let result = length / 3281;
        console.log(result +' '+ to);

    }  else if (from === 'km' && to === 'ft') {
        let result = length * 3281;
        console.log(result +' '+ to);

    } else if (from !== 'km' && from !== 'miles' && from !== 'ft') {
        console.log(`invalid unit: ${from}`);

    } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
        console.log(`invalid unit: ${to}`);

    } else if (from === to) {
        console.log(length +' '+ to);

    }
}

convertLength(5, 'lbs', 'km');
convertLength(5, 'lbs', 'lbs');
convertLength(5, 'miles', 'lbs');
convertLength(5, 'ft', 'lbs');
