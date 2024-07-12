
let screen = document.querySelector(".screen");

export function displayColm1(event){
    let target = event.target;

    if (target.classList.contains("cancel")){
        screen.textContent = "0";
    }
    else if (target.classList.contains("seven")){
        screen.textContent === "0" ? 
        screen.textContent = "7" : screen.textContent += "7";
    }
    else if (target.classList.contains("four")){
        screen.textContent === "0" ? 
        screen.textContent = "4" : screen.textContent += "4";  
    }
    else if (target.classList.contains("one")){
        screen.textContent === "0" ? 
        screen.textContent = "1" : screen.textContent += "1";   
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
        screen.textContent === "0" ? 
        screen.textContent = "8" : screen.textContent += "8";
    }
    else if (target.classList.contains("five")){
        screen.textContent === "0" ? 
        screen.textContent = "5" : screen.textContent += "5";  
    }
    else if (target.classList.contains("two")){
        screen.textContent === "0" ? 
        screen.textContent = "2" : screen.textContent += "2"; 
    }
    else if (target.classList.contains("zero")){
        screen.textContent === "0" ? screen.textContent : screen.textContent += "0";
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
        screen.textContent === "0" ? 
        screen.textContent = "9" : screen.textContent += "9";
    }
    else if (target.classList.contains("six")){
        screen.textContent === "0" ? 
        screen.textContent = "6" : screen.textContent += "6";   
    }
    else if (target.classList.contains("three")){
        screen.textContent === "0" ? 
        screen.textContent = "3" : screen.textContent += "3";   
    }
    else if (target.classList.contains("decimal")){
        if (!screen.textContent.includes(".")){
            screen.textContent += ".";
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