let currentNumber = "0";
let operator = null;
let prevNumber = null;

function press(num) {
    if (currentNumber === "0" || currentNumber === null) {
        currentNumber = num.toString();
    } else {
        currentNumber += num.toString();
    }
    updateDisplay();
}

function setOP(op) {
    operator = op;
    prevNumber = currentNumber;
    currentNumber = null;
}

function calculate() {
    if (prevNumber !== null && operator !== null && currentNumber !== null) {
        switch (operator) {
            case '+':
                currentNumber = (parseFloat(prevNumber) + parseFloat(currentNumber)).toString();
                break;
            case '-':
                currentNumber = (parseFloat(prevNumber) - parseFloat(currentNumber)).toString();
                break;
            case '*':
                currentNumber = (parseFloat(prevNumber) * parseFloat(currentNumber)).toString();
                break;
            case '/':
                currentNumber = (parseFloat(prevNumber) / parseFloat(currentNumber)).toString();
                break;
        }
        operator = null;
        prevNumber = null;
        updateDisplay();
    }
}

function clr() {
    currentNumber = "0";
    operator = null;
    prevNumber = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").textContent = currentNumber;
}