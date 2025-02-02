import {displayColm1, displayColm2, displayColm3} from './display.js';

// selectors
const screen = document.querySelector(".screen");
const column1 = document.querySelector(".colm1");
const column2 = document.querySelector(".colm2");
const column3 = document.querySelector(".colm3");

// calls all the operator aka column 4
const plus = document.querySelector(".pad.plus")
const minus = document.querySelector(".pad.minus")
const multiply = document.querySelector(".pad.multiply")
const divide = document.querySelector(".pad.division")
const equals = document.querySelector(".pad.equal")

// global variables to be updated and shared across the functions and events listener
// updateOperator is to update the status of operator via display.js so when I click on AC
export let a = 0;
export let b = 0;
export let operator = "";
export function updateOperator() {operator = ""; a = 0; b = 0;}

// tracks if the toggle effect is on - 0 means false and 1 means true
let toggleOperator = 0;

// All the numpads except for the operators are identified through the selectors
// they are categorised based on their column position
column1.addEventListener("click", (event, operator) => {
    displayColm1(event);
    removeToggle();
})

column2.addEventListener("click", (event) => {
    displayColm2(event);
    removeToggle();
})

column3.addEventListener("click", (event) => {
    displayColm3(event);
    removeToggle();
})


// main logic of the code
plus.addEventListener("click", () => {
    if(operator === "equals" && screen.querySelector("input")){
        operator = "plus";
        // console.log(1)
    }
    else if(!operator == "" && !screen.querySelector("input") && operator !== "equals"){
        chainOperators("plus");
        // console.log(2)
    }
    
    else if(operator === "" || (operator === "equals" && !screen.querySelector("input"))){
        a = parseFloat(screen.textContent);
        stopper();
        operator = "plus";
            // console.log(3)
    }

    if (toggleOperator === 0){
        plus.classList.add("toggle");
        toggleOperator = 1;
    }
    else {
        removeToggle();
        plus.classList.add("toggle");
        toggleOperator = 1;
    }
})

minus.addEventListener("click", () => {
    if(operator === "equals" && screen.querySelector("input")){
        operator = "minus";
        // console.log(1)
    }
    else if(!operator == "" && !screen.querySelector("input") && operator !== "equals"){
        chainOperators("minus");
        // console.log(2)
    }
    
    else if(operator === "" || (operator === "equals" && !screen.querySelector("input"))){
        a = parseFloat(screen.textContent);
        stopper();
        operator = "minus";
        // console.log(3)
    }

    if (toggleOperator === 0){
        minus.classList.add("toggle");
        toggleOperator = 1;
    }
    else {
        removeToggle();
        minus.classList.add("toggle");
        toggleOperator = 1;
    }
})

multiply.addEventListener("click", () => {
    if(operator === "equals" && screen.querySelector("input")){
        operator = "multiply";
        // console.log(1)
    }
    else if(!operator == "" && !screen.querySelector("input") && operator !== "equals"){
        chainOperators("multiply");
        // console.log(3)
    }
    
    else if(operator === "" || (operator === "equals" && !screen.querySelector("input"))){
        a = parseFloat(screen.textContent);
        stopper();
        operator = "multiply";
        // console.log(2)
    }

    if (toggleOperator === 0){
        multiply.classList.add("toggle");
        toggleOperator = 1;
    }
    else {
        removeToggle();
        multiply.classList.add("toggle");
        toggleOperator = 1;
    }
})

divide.addEventListener("click", () => {
    if(operator === "equals" && screen.querySelector("input")){
        operator = "divide";
        // console.log(1)
    }
    else if(!operator == "" && !screen.querySelector("input") && operator !== "equals"){
        chainOperators("divide");
        // console.log(2)
    }
    
    else if(operator === "" || (operator === "equals" && !screen.querySelector("input"))){
        a = parseFloat(screen.textContent);
        stopper();
        operator = "divide";
            // console.log(3)
    }

    if (toggleOperator === 0){
        divide.classList.add("toggle");
        toggleOperator = 1;
    }
    else {
        removeToggle();
        divide.classList.add("toggle");
        toggleOperator = 1;
    }
})

equals.addEventListener("click", () => {
    if (!screen.querySelector("input")){
        b = parseFloat(screen.textContent);

        if (operator === ""){
            operator = "plus";
        }

        let result = operate(operator, a, b);
        screen.textContent = result;
        a = result;
        operator = "equals"  
        stopper();
    }
    else{
        screen.querySelector("input")
    }
})



// convert to 9 decimal places
function decimals(num) {
    num = Math.round(num * 1000000000) / 1000000000;
    let numStr = num.toString();
    if (numStr.length > 12) {
        num = parseFloat(num).toPrecision(9)
    }
    return num
}

// arimethic functions
function sum(a,b){
    return decimals(a + b)
}

function division(a,b){
    return decimals(a / b)
}

function multiplies(a,b){
    return decimals(a * b)
}

function subtract(a,b){
    return decimals(a - b)
}

function operate(operator, a, b) {
    if(operator === "plus"){
        return sum(a,b)
    }
    else if (operator === "minus"){
        return subtract(a,b)
    }
    else if (operator === "multiply"){
        return multiplies(a,b)
    }
    else if (operator === "divide"){
        return division(a,b)
    }
}


// this function adds a hidden input variable to signify a change of state 
// a change of state means a new user's numeric input
function stopper() {
    const stopper = document.createElement("input");
    stopper.type = "hidden";
    stopper.value = "operating";
    screen.appendChild(stopper);
}

// this allows the operators to be chained such as 5 + 5 = 10 +
// user does not have to press "=" to get 5 + 5 if the next button is an operator
// this is important for the user to chain the arimethic operators together
function chainOperators (nextOperator){
    b = parseFloat(screen.textContent);
    a = operate(operator, a, b);
    screen.textContent = a;
    operator = nextOperator;
    stopper();
}

// part of UI for the user to know which operator is currently active
// this removes the toggle effect when another button is pressed
function removeToggle() {
    document.querySelector(".toggle").classList.remove("toggle");
    toggleOperator = 0;
}