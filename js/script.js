"use strict";

const input = document.getElementById("input"), // input/output button
    numbers = document.querySelectorAll(".numbers div"), // number buttons
    operators = document.querySelectorAll(".operators div"), // operator buttons
    result = document.getElementById("result"), // equal button
    clear = document.getElementById("clear"); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

// numbers is a NodeList object, we need to make it into an array first, then we can map through it...
numbers.forEach(function(number){
    number.addEventListener("click", function(e){
        input.innerHTML += this.innerHTML;
    })
})

// adding click handlers to the calculation buttons
operators.forEach(function(operator){
    operator.addEventListener("click", function(e){
        input.innerHTML += this.innerHTML;
    })
})
// on click of 'equal' button, perform the mathematical operation

// clear the input on press of clear
clear.addEventListener("dblclick", function(e){
    input.innerHTML = "0"
})

clear.addEventListener("click", function(e){
    
})

