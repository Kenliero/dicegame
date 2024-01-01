let nameOneGiven = false;
let nameTwoGiven = false;
const origButtonOne = document.getElementById("labelOne");
const origButtonTwo = document.getElementById("labelTwo");
var button1Old="<label id='labelOne'>Name1</label>";
var button2Old="<label id='labelTwo'>Name2</label>";
var button1New="<button onclick = 'rollDice1()'>Roll Dice One</button>"
var button2New="<button onclick = 'rollDice2()'>Roll Dice Two</button>"


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
    const inp1 = origButtonOne;
    const inp2 = origButtonTwo;    
    console.log(inp1);
    console.log(inp2);    
    document.getElementById('labelOne').outerHTML = button1New;
    document.getElementById('labelTwo').outerHTML = button2New;    
    x.classList.add("rollButton");    
    // oneInputId
}

function rollDice1(){
     // oneInputId   
}