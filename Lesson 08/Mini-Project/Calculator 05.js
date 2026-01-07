
let calculation = localStorage.getItem('calculation');
displayCalculation();

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    localStorage.setItem('calculation', calculation);
    displayCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.js-result').innerHTML = calculation;
}

function clearCalculation() {
    calculation = '';
    localStorage.setItem('calculation', calculation);
    displayCalculation();
}

function equalCalculation() {
    calculation = eval(calculation);
    localStorage.setItem('calculation', calculation);
    displayCalculation();
}
