const output = document.querySelector("#output");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const subtract = document.querySelector("#minus");
const numbers = document.querySelectorAll(".btn-number");
const resultOutput = document.querySelector("#result-output");

let currentNumber, holdValue = 0, update = 0;
let operator;
let result;
let arrayNumbers = [];

output.textContent = 0;

const add = (a,b) => {
    result = a + b;
    resultOutput.textContent = result;
    arrayNumbers = [result];
    console.log(arrayNumbers);
    return result;
}

const minus = (a,b) => {
    result = a - b;
    output.textContent = result;
    return result;
}

const operate = function(operator, a){
    b = parseInt(output.textContent);

    if (operator == "add"){
        add(a, b);
    } else if (operator == "minus"){
        minus(a, b);
    }
}

const choice = function(operatorChoice){
    return operator = operatorChoice;
}

const display = (results) => output.textContent = result;

const updateValue = (operator, number) => {
    output.textContent = "";
    console.log(arrayNumbers);
    result = arrayNumbers.reduce((partialSum, a) => partialSum + a, 0);
    console.log(result);
    resultOutput.textContent = result;
    // display(result);
} 

plus.addEventListener("click", function(){
    choice("add");
    // currentNumber = parseInt(output.textContent);
    arrayNumbers.push(parseInt(output.textContent));
    currentNumber = parseInt(output.textContent);
    updateValue("add", currentNumber);
    update = 1;
    return currentNumber;
})



subtract.addEventListener("click", function(){
    choice("minus");
    currentNumber = parseInt(output.textContent);
    output.textContent = "";
    return currentNumber;
})

numbers.forEach(number =>{
    number.addEventListener("click", function handleClick(event){
        output.textContent += number.textContent;
    });
});

equals.addEventListener("click", function(){
    operate(operator, currentNumber, holdValue);
    console.log(operator + currentNumber + holdValue);
    holdValue = 0;
    update = 0;
    output.textContent = "";
})

clear.addEventListener("click", function(){
    output.textContent = 0;
    arrayNumbers = [];
    resultOutput.textContent = "";
    holdValue = 0;
    operator = undefined;
    update = 0;
})
