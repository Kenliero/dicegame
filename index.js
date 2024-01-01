let nameOneGiven = false;
let nameTwoGiven = false;
const eButtonOne = document.getElementById("oneInputId");
const eButtonTwo = document.getElementById("twoInputId");
var button1Old="<input type='text' id='oneInputId' placeholder='Your Name' onchange='getNameOne()'>";
var button2Old="<input type='text' id='twoInputId' placeholder='Your Name' onchange='getNameTwo()'>";
var button1New="<button onclick='rollDice1()' id='butt1'>Roll Dice One</button>"
var button2New="<button onclick='rollDice2()' id='butt2'>Roll Dice Two</button>"
let buttonsAvailable = false;
let turn1Used = false;
let turn2Used = false;


function getNameOne() {
    const x = document.getElementById("oneInputId");
    var nameOne = x.value;
    var fullNameOne ="<label id='labelOne'>" + nameOne + "</label>";
    console.log(fullNameOne);
    document.getElementById('labelOne').outerHTML = fullNameOne;
    nameOneGiven = true;
    if (nameTwoGiven === true) {
        addButtons();
    }
}

function getNameTwo() {
    const x = document.getElementById("twoInputId");    
    var nameTwo = x.value;
    var fullNameTwo ="<label id='labelTwo'>" + nameTwo + "</label>";
    console.log(fullNameTwo);    
    document.getElementById('labelTwo').outerHTML = fullNameTwo;
    nameTwoGiven = true;
    if (nameOneGiven === true) {
        addButtons(""); 
    }    
}

function addButtons(){  
    if (!buttonsAvailable) {
        eButtonOne.outerHTML = button1New;
        eButtonOne.classList.add("rollButton1");  
        eButtonTwo.outerHTML = button2New;
        eButtonTwo.classList.add("rollButton2");
        buttonsAvailable = true;      
    } else {
        eButtonOne.outerHTML = button1Old;
        eButtonOne.classList.remove("rollButton1");  
        eButtonTwo.outerHTML = button2Old;
        eButtonTwo.classList.remove("rollButton2");
        buttonsAvailable = false;            
    }
    console.log(button1New);
    console.log(button2New);        
    console.log(eButtonOne);
    console.log(eButtonTwo);             
}

function rollDice1(){
     // oneInputId   
}

function rollDice2(){
    // oneInputId   
}