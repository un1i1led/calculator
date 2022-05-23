const output = document.querySelector("#output");
const resultOutput = document.querySelector("#result-output");
const clear = document.querySelector("#clear");
const plusMinus = document.querySelector("#plusMinus");
const plus = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#division");
const equals = document.querySelector("#equals");
const numbers = document.querySelectorAll(".btn-number");
const operators = document.querySelectorAll(".operator");

let valueHold = [];
let operator = "";
let update = 0;

const clearAll = () => {
    output.textContent = "";
    resultOutput.textContent = "";
    valueHold = [];
}

numbers.forEach(number => {
    number.addEventListener("click", function handleClick(event){
        resultOutput.textContent += number.textContent;
    })
});

plus.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseInt(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseInt(resultOutput.textContent));
    valueHold.push("+");
    resultOutput.textContent = "";
    console.log(valueHold);
});

subtract.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseInt(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseInt(resultOutput.textContent));
    valueHold.push("-");
    resultOutput.textContent = "";
    console.log(valueHold);
});

multiply.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseInt(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseInt(resultOutput.textContent));
    valueHold.push("x");
    resultOutput.textContent = "";
    console.log(valueHold);
});

divide.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseInt(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseInt(resultOutput.textContent));
    valueHold.push("/");
    resultOutput.textContent = "";
    console.log(valueHold);
})

clear.addEventListener("click", () => {
    clearAll();
});

const operate = (hold) => {
    console.log(hold[1]);
    if (hold[1] == "+"){
        result = hold[0] + hold[2];
    } else if (hold[1] == "-"){
        result = hold[0] - hold[2];
    } else if (hold[1] == "x"){
        result = hold[0] * hold[2];
    } else if (hold[1] == "/"){
        if (hold[2] == 0){
            result = 0;
        } else {
            hold[0] / hold[2];
        }
    }

    resultOutput.textContent = result;
    valueHold = [];
    console.log(valueHold);
}

equals.addEventListener("click", function(){
    valueHold.push(parseInt(resultOutput.textContent));
    console.log(valueHold);
    operate(valueHold);
})


