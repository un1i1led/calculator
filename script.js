const output = document.querySelector("#output");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const plus = document.querySelector("#plus");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const subtract = document.querySelector("#minus");
const numbers = document.querySelectorAll(".btn-number");

let currentNumber, nextNumber;
let operator;
let result;

output.textContent = 0;

const add = (a,b) => {
    result = a + b;
    output.textContent = result;
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

plus.addEventListener("click", function(){
    choice("add");
    currentNumber = parseInt(output.textContent);
    output.textContent = "";
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
    operate(operator, currentNumber, nextNumber);
})

clear.addEventListener("click", function(){
    output.textContent = 0;
    currentNumber = 0;
    operator = undefined;
})
