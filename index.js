// document.querySelector("h1").textContent = "hi";
var nameOne = "";
var fullNameOne ='';       
var nameTwo = "";
var fullNameTwo ='';  


function getNameOne() {
    const x = document.getElementById("playerOneInput");
    const z = document.getElementById("oneDiv");    
    nameTwo = x.value;
    fullNameOne ='<label class="playerOneLabel">{nameOne}</label>';
    document.getElementById('playerOneLabel').outerHTML = fullNameOne;
}

function getNameTwo() {
    const x = document.getElementById("playerTwoInput");    
    const z = document.getElementById("twoDiv");
    nameTwo = x.value;
    fullNameTwo ='<label class="playerTwoLabel">{nameTwo}</label>';
    document.getElementById('playerTwoLabel').outerHTML = fullNameTwo;     
}