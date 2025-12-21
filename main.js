const backspaceKey = document.getElementById('backspace');
const clearKey = document.getElementById('clear');
const numberKey = document.querySelectorAll('.number');
const operatorKey = document.querySelectorAll('.operator');
const lowerOutput = document.getElementById('lower');
const upperOutput = document.getElementById('upper');
const decimalKey = document.getElementById('decimal');

let working = [];
let stored = [];

const displayLower = (array) => lowerOutput.textContent = array.join('');
const displayUpper = (array) => upperOutput.textContent = array.join('');

backspaceKey.addEventListener('click', () => {
    working.pop();
    displayLower(working);
});

clearKey.addEventListener('click', () => {
    working.length = 0;
    displayLower(working);
});

numberKey.forEach((button) => {
    button.addEventListener('click', (e) => {
        working.push(e.target.value);
        displayLower(working);
    });
});

decimalKey.addEventListener('click', () => {
    if (!working.includes('.')) {
        working.push('.');
    }
    displayLower(working);
});



const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b, 
    divide: (a, b) => a / b,

};

const operate = function(type, a, b) {
    const func = operations[type];
    if (!func) {
        console.log('Invalid Operation Requested');
        return false;
    }
    return func(a, b);
};

const convertArray = function(array) {
    return Number(array.join(''));
};
