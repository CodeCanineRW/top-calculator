const backspaceKey = document.getElementById('backspace');
const clearKey = document.getElementById('clear');
const numberKey = document.querySelectorAll('.number');
const operatorKey = document.querySelectorAll('.operator');
const lowerOutput = document.getElementById('lower');
const upperOutput = document.getElementById('upper');

let working = [];
let stored = [];

const displayLower = () => lowerOutput.textContent = convertArray(working);

backspaceKey.addEventListener('click', () => {
    working.pop();
    displayLower();
});

clearKey.addEventListener('click', () => {
    working.length = 0;
    displayLower();
});

numberKey.forEach((button) => {
    button.addEventListener('click', (e) => {
        working.push(e.target.value);
        displayLower();
    });
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

// console.log(operate('multiply', 5, 6));

const convertArray = function(array) {
    return Number(array.join(''));
};
