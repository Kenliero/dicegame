let nameOneGiven = false;
let nameTwoGiven = false;
//const eButtonOne = document.getElementById("oneInputId");
//const eButtonTwo = document.getElementById("twoInputId");
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
        console.log(document.getElementById("oneInputId"));          
        document.getElementById("oneInputId").outerHTML = button1New;     
        document.getElementById("butt1").classList.add("rollButton1");
        console.log(document.getElementById("oneInputId"));  
        document.getElementById("twoInputId").outerHTML = button2New;
        document.getElementById("butt2").classList.add("rollButton2");
        buttonsAvailable = true;      
    } else {
        document.getElementById("butt1").outerHTML = button1Old;
        document.getElementById("oneInputId").classList.remove("rollButton1");  
        document.getElementById("butt2").outerHTML = button2Old;
        document.getElementById("twoInputId").classList.remove("rollButton2");
        buttonsAvailable = false;            
    }
    console.log(button1New);
    console.log(button2New);        
    console.log(eButtonOne);
    console.log(eButtonTwo);             
}

function rollDice1(){
    if (!turn1Used) {
     var diceNum = Math.floor(Math.random() * 6) + 1;
     turn1Used = true;
     console.log*(diceNum);
     console.log*(turn1Used);        
    }
}

function rollDice2(){
    if (!turn2Used) {    
    var diceNum = Math.floor(Math.random() * 6) + 1;
    turn2Used = true;
    console.log*(diceNum); 
    console.log*(turn2Used);        
    }     
}