import {displayColm1, displayColm2, displayColm3} from './display.js';

let screen = document.querySelector(".screen");
const column1 = document.querySelector(".colm1");
const column2 = document.querySelector(".colm2");
const column3 = document.querySelector(".colm3");
const column4 = document.querySelector(".colm4");

let currentFloat = 0;
let nextFloat = 0;


column1.addEventListener("click", (event) => {
    displayColm1(event);
})

column2.addEventListener("click", (event) => {
    displayColm2(event);
})

column3.addEventListener("click", (event) => {
    displayColm3(event);
})

const plus = document.querySelector(".pad.plus")
const minus = document.querySelector(".pad.minus")
const multiply = document.querySelector(".pad.multiply")
const divide = document.querySelector(".pad.division")





