
function getNameOne() {
    const x = document.getElementById("oneInputId");
    const z = document.getElementById("oneDiv");    
    var nameTwo = x.value;
    var fullNameOne ="<label id='labelOne'>${nameOne}</label>";
    console.log(fullNameOne);
    document.getElementById('labelOne').outerHTML = fullNameOne;
}

function getNameTwo() {
    const x = document.getElementById("twoInputId");    
    const z = document.getElementById("twoDiv");
    var nameTwo = x.value;
    var fullNameTwo ='<label id="labelTwo">${$nameTwo}</label>';
    console.log(fullNameTwo);    
    document.getElementById('labelTwo').outerHTML = fullNameTwo;     
}