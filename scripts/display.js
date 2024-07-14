import {a, b, operator, updateOperator } from './script.js';
let screen = document.querySelector(".screen");

export function displayColm1(event, operator){
    let target = event.target;

    if (target.classList.contains("cancel")){
        screen.textContent = "0";
        updateOperator();

    }
    else if (target.classList.contains("seven")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "7" : 
        screen.textContent.length < 9? screen.textContent += "7" : screen.textContent;
    }
    
    else if (target.classList.contains("four")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "4" : 
        screen.textContent.length < 9? screen.textContent += "4" : screen.textContent;
    }

    else if (target.classList.contains("one")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "1" : 
        screen.textContent.length < 9? screen.textContent += "1" : screen.textContent;  
    }
    else if (target.classList.contains("minusPlus")){
        if (screen.textContent.includes("-")){
            screen.textContent = screen.textContent;
        }
        else{
            screen.textContent = "-" + screen.textContent;
        }
    } 
}

export function displayColm2(event){
    let target = event.target;

    if (target.classList.contains("del")){     
        if (screen.textContent === "0"){
            screen.textContent;
        }
        else if (screen.textContent.length === 1){
            screen.textContent = "0"
        }
        else {
            screen.textContent = screen.textContent.slice(0,-1);
        }
    }
    else if (target.classList.contains("eight")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "8" : 
        screen.textContent.length < 9? screen.textContent += "8" : screen.textContent;
    }
    else if (target.classList.contains("five")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "5" : 
        screen.textContent.length < 9? screen.textContent += "5" : screen.textContent;
    }
    else if (target.classList.contains("two")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "2" : 
        screen.textContent.length < 9? screen.textContent += "2" : screen.textContent;
    }
    else if (target.classList.contains("zero")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "0" : 
        screen.textContent.length < 9? screen.textContent += "0" : screen.textContent;
    } 
}

export function displayColm3(event){
    let target = event.target;

    if (target.classList.contains("percent")){
        let int = parseFloat(screen.textContent)/100;
        screen.textContent = int.toString();
        console.log(screen.textContent)
    }
    else if (target.classList.contains("nine")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "9" : 
        screen.textContent.length < 9? screen.textContent += "9" : screen.textContent;
    }
    else if (target.classList.contains("six")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "6" : 
        screen.textContent.length < 9? screen.textContent += "6" : screen.textContent;  
    }
    else if (target.classList.contains("three")){
        screen.querySelector("input") || screen.textContent === "0" ? 
        screen.textContent = "3" : 
        screen.textContent.length < 9? screen.textContent += "3" : screen.textContent;  
    }
    else if (target.classList.contains("decimal")){
        if (!screen.textContent.includes(".") && !screen.querySelector("input") &&  screen.textContent.length < 8){
            screen.textContent += ".";
        }
        else if (screen.querySelector("input")){
            screen.textContent = "0."
        }
        else{
            screen.textContent;
        }
    } 
}


// module.exports = {
//     displayColm1,
//     displayColm2,
//     displayColm3
//   };