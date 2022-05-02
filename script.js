const output = document.querySelector("#output");
const numbers = document.getElementsByClassName("numbers");
const add = document.querySelector("#add");
const five = document.querySelector("#five");


let currentNumber;
let operator;
let result;

const selectNumber = function(number){
    output.textContent += number;
    currentNumber = output.textContent;
    return parseInt(currentNumber);
} 

const sum = function(number, second){
    return result = number + second;
};


five.addEventListener("click", function(){
    selectNumber(five.textContent);
    console.log(currentNumber);
});

add.addEventListener("click", function(){

});
