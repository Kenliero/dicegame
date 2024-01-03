let nameOneGiven = false;
let nameTwoGiven = false;
//const eButtonOne = document.getElementById("oneInputId");
//const eButtonTwo = document.getElementById("twoInputId");
var button1Old="<input type='text' id='oneInputId' placeholder='Your Name' onchange='getNameOne()'>";
var button2Old="<input type='text' id='twoInputId' placeholder='Your Name' onchange='getNameTwo()'>";
var button1New="<button onclick='rollDice1()' id='butt1' class='btn btn-success border-dark btn-lg px-4 mb-4'>Roll Dice One</button>"
var button2New="<button onclick='rollDice2()' id='butt2' class='btn btn-success border-dark btn-lg px-4 mb-4'>Roll Dice Two</button>"
let buttonsAvailable = false;
let turn1Used = false;
let turn2Used = false;
var diceResult1 = 6;
var diceResult2 = 6;
var nameOne = "";
var nameTwo = "";


function getNameOne() {
    const x = document.getElementById("oneInputId");
    nameOne = x.value;
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
    nameTwo = x.value;
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
        document.getElementById("butt1").addEventListener('click', rollDice1);
        console.log(document.getElementById("butt1"));  
        document.getElementById("twoInputId").outerHTML = button2New;
        document.getElementById("butt2").classList.add("rollButton2");
        document.getElementById("butt2").addEventListener('click', rollDice2);
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
    }

    function rollDice1(){
        if (!turn1Used){
          turn1Used = true;
          replaceDice(1);
          if (turn2Used) {
            document.getElementById("butt1").style.backgroundColor = "red";
            document.getElementById("butt2").style.backgroundColor = "red";         
            } else {
              document.getElementById("butt1").style.backgroundColor = "yellow";
            }          
        } else {
          return;
        }        
    }

    function rollDice2(){
        if (!turn2Used) {
            turn2Used = true;
            replaceDice(2);
            if (turn1Used) {
              document.getElementById("butt1").style.backgroundColor = "red";
              document.getElementById("butt2").style.backgroundColor = "red";          
              } else {
                document.getElementById("butt2").style.backgroundColor = "yellow";
              }     
        } else {
            return;
        }        
    }
    
    function replaceDice(currentdice) {
      var dicenum = Math.floor(Math.random() * 6) + 1;
      console.log("Roll Result is: " + dicenum);
      var picPath = "./images/" + dicenum + ".png";
      console.log("Path of the pic is: " + picPath);
      console.log("Dice is: " + currentdice);
      if (currentdice === 1) {
          var basicElement = document.getElementsByClassName("dicePicOne");
          diceResult1 = dicenum;
        } else {
          var basicElement = document.getElementsByClassName("dicePicTwo");
          diceResult2 = dicenum;  
        }
      for (var i = 0; i < basicElement.length; i++) {
        basicElement[i].src = picPath;    
      }

      if (turn1Used && turn2Used) {
          /* display winner */
          declareWinner(diceResult1, diceResult2);
          return;
        } else if (turn1Used) {
          /* turn dice 1 yellow */
          return;
        } else {
          /* turn dice 2 yellow */
          return;
        }
    }

    function declareWinner(dice1, dice2) {
      if (dice1 === dice2) {var winnerTopic ="<h1 class='display-7 fw-bold mainTopic'>DRAW!!!</h1>";
        } else if (dice1 > dice2) {var winnerTopic ="<h1 class='display-7 fw-bold mainTopic'>" + "The Winner is: " + nameOne + "!!!</h1>";
        } else {var winnerTopic ="<h1 class='display-7 fw-bold mainTopic'>" + "The Winner is: " + nameTwo + "!!!</h1>";
        }
      document.getElementsByClassName('mainTopic')[0].outerHTML = winnerTopic;
      /* log */
      console.log(document.getElementsByClassName('mainTopic')[0].outerHTML);  
      document.getElementsByClassName('mainTopic')[0].classList.toggle("winnerTopic"); 
      document.getElementById("restartButton").style.visibility = "visible";          
      }
