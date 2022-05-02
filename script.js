const output = document.querySelector("#output");
const numbers = document.getElementsByClassName("numbers");
const add = document.querySelector("#add");


let currentNumber;

const select = function(number){
    output.textContent += number;
    currentNumber = output.textContent;
    return parseInt(currentNumber);
} 

const sum = function(number, second){
    
};


five.addEventListener("click", function(){
    select(five.textContent);
    console.log(currentNumber);
});

add.addEventListener("click", function(){

});
