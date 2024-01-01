// document.querySelector("h1").textContent = "hi";
/*
var nameOne = "";
var fullNameOne ='';       
var nameTwo = "";
var fullNameTwo ='';  
*/

function getNameOne() {
    const x = document.getElementById("oneInputId");
    const z = document.getElementById("oneDiv");    
    var nameTwo = x.value;
    var fullNameOne ='<label class="playerOneLabel">{nameOne}</label>';
    console.log(fullNameOne);
    document.getElementById('playerOneLabel').outerHTML = fullNameOne;
}

function getNameTwo() {
    const x = document.getElementById("twoInputId");    
    const z = document.getElementById("twoDiv");
    var nameTwo = x.value;
    var fullNameTwo ='<label class="playerTwoLabel">{nameTwo}</label>';
    console.log(fullNameTwo);    
    document.getElementById('playerTwoLabel').outerHTML = fullNameTwo;     
}