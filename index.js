let nameOneGiven = false;
let nameTwoGiven = false;


function getNameOne() {
    const x = document.getElementById("oneInputId");
    var nameOne = x.value;
    var fullNameOne ="<label id='labelOne'>" + nameOne + "</label>";
    console.log(fullNameOne);
    document.getElementById('labelOne').outerHTML = fullNameOne;
    nameOneGiven = true;
    if (nameTwoGiven === true) {
        addButton();
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
        addButton(); 
    }    
}

function addButton(){
    const x = document.getElementById("oneDiv");
    console.log(x);
    x.classList.add("rollButton");
    // oneInputId
}