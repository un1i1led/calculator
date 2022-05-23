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
const decimal = document.querySelector("#decimal");
const operators = document.querySelectorAll(".operator");

let valueHold = [];


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

decimal.addEventListener("click", function(){
    if (resultOutput.textContent.includes(".")){
        return 
    } else {
        resultOutput.textContent += decimal.textContent;
    }
});

operators.forEach(operatr => {
    operatr.addEventListener("click", function handleClick(event){
        output.textContent = "";
    })
})

plus.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseFloat(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseFloat(resultOutput.textContent));
    valueHold.push("+");
    resultOutput.textContent = "";
    console.log(valueHold);
});

subtract.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseFloat(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseFloat(resultOutput.textContent));
    valueHold.push("-");
    resultOutput.textContent = "";
    console.log(valueHold);
});

multiply.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseFloat(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseFloat(resultOutput.textContent));
    valueHold.push("x");
    resultOutput.textContent = "";
    console.log(valueHold);
});

divide.addEventListener("click", function(){
    if (valueHold.length == 2){
        valueHold.push(parseFloat(resultOutput.textContent));
        operate(valueHold);
    }

    valueHold.push(parseFloat(resultOutput.textContent));
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
            output.textContent = "Funny!";
            result = 0;
        } else {
            result = hold[0] / hold[2];
        }
    }

    resultOutput.textContent = result;
    valueHold = [];
    console.log(valueHold);
}

equals.addEventListener("click", function(){
    if (resultOutput.textContent == ""){
        return 0
    } else {
        valueHold.push(parseFloat(resultOutput.textContent));
        console.log(valueHold);
        operate(valueHold);
    }

})


