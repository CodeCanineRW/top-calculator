const backspaceKey = document.getElementById('backspace');
const clearKey = document.getElementById('clear');
const numberKey = document.querySelectorAll('.number');
const operatorKey = document.querySelectorAll('.operator');
const lowerOutput = document.getElementById('lower');
const upperOutput = document.getElementById('upper');
const decimalKey = document.getElementById('decimal');
const equalsKey = document.getElementById('equals');
const percentKey = document.getElementById('percent');
const plusMinusKey = document.getElementById('plusMinus');

let working = [];
let stored = 0;
let operator = null;

const displayLower = (entry) => lowerOutput.textContent = entry;
const displayUpper = (entry) => upperOutput.textContent = entry;

backspaceKey.addEventListener('click', () => {
    working.pop();
    working.length > 0 ? displayLower((working.join(''))) : displayLower(0);
});

clearKey.addEventListener('click', () => {
    working.length = 0;
    stored = 0;
    operator = null;
    displayLower(0);
    displayUpper('');
});

numberKey.forEach((button) => {
    button.addEventListener('click', (e) => {
        working.push(e.target.value);
        displayLower(working.join(''));
        if (operator === null) {
            displayUpper('');
        }
    });
});


decimalKey.addEventListener('click', () => {
    if (!working.includes('.')) {
        working.push('.');
    }
    displayLower(working.join(''));
});

plusMinusKey.addEventListener('click', () => {
    if (working.includes('-')) {
        working.shift();
    } else {
        working.unshift('-');
    }
    displayLower(working.join(''));
});

percentKey.addEventListener('click', () => {
    let percent = (convertArray(working) / 100);
    displayLower(percent);
    working.unshift('.');
    
})

operatorKey.forEach(button => {
    button.addEventListener('click', (e) => {
        let current = convertArray(working);
        let result;

        if (operator == null && working.length !== 0 ){ 
            operator = e.target.id;
            stored = convertArray(working);
            working.length = 0;
            displayUpper(`${stored} ${e.target.value}`);
            displayLower(0);
            return
        }
        if (working.length === 0) {
            operator = e.target.id;
            displayUpper(`${stored} ${e.target.value}`);
            return
        }
        result = operate(operator, stored, current);
        displayUpper(`${result} ${e.target.value}`);
        displayLower(0);
        operator = e.target.id;
        stored = result;
        working.length=0;
});
});

equalsKey.addEventListener('click', (e) => {
    if (operator !== null) {
        let current = convertArray(working);
        let result = operate(operator, stored, current);
        displayUpper(`${stored} ${document.getElementById(operator).value} ${current}`);
        displayLower(result);
        operator = null;
        stored = result;
        working.length = 0;
};      
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
    let result = func(a, b);
    return Number(result.toFixed(6));
};

const convertArray = function(array) {
    return Number(array.join(''));
};
