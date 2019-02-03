function rollMyDie(isSixSided){
	var rollResult;
	if(isSixSided){
		rollResult = Math.floor(Math.random() * 6) + 1;
	} else {
		rollResult = Math.floor(Math.random() * 10) + 1;
	}
	return rollResult;
}

function checkDiceRolls(){
	var dieRoll1 = rollMyDie(true);
	var dieRoll2 = rollMyDie(true);

	if(dieRoll1 == dieRoll2){
		console.log("We have a winner! :D Die 1: " +  dieRoll1 + " Die 2: " + dieRoll2);
	} else {
		console.log("Sorry that roll sucked. :( Die 1: " +  dieRoll1 + " Die 2: " + dieRoll2);
	}
}

var dieBox = document.getElementById("die-div");	
var dieRollMessage = document.createElement("p");
var dieBoxRollButton = document.createElement("button");
var dieDiv1 = document.createElement("div");
var dieDiv1Text = document.createElement("p");
var dieDiv2 = document.createElement("div");
var dieDiv2Text = document.createElement("p");
var dieRollMessageContainer = document.createElement("div");

dieRollMessageContainer.setAttribute("class", "dieRollMessageContainer");
dieBoxRollButton.setAttribute("id", "die-roll-button");
dieBoxRollButton.appendChild(document.createTextNode("Roll em out!"));
dieRollMessage.textContent = "Make your roll!";
dieRollMessage.style = "text-align: center";
dieDiv1.setAttribute("class", "dieDiv1");
dieDiv2.setAttribute("class", "dieDiv2");
dieDiv1.appendChild(dieDiv1Text);
dieDiv2.appendChild(dieDiv2Text);

dieBoxRollButton.addEventListener("click", checkDiceRollsDom);

// dieBox.innerHTML = "<p> Make Your Roll </p>";
// dieBox.appendChild(dieRollMessage);
dieBox.appendChild(dieDiv1);
// dieBox.appendChild(dieBoxRollButton);
dieRollMessageContainer.appendChild(dieRollMessage);
dieRollMessageContainer.appendChild(dieBoxRollButton);
dieBox.appendChild(dieRollMessageContainer);
dieBox.appendChild(dieDiv2);

function checkDiceRollsDom(){
	var dieRoll1 = rollMyDie(true);
	var dieRoll2 = rollMyDie(true);

	dieDiv1Text.textContent = dieRoll1;
	dieDiv2Text.textContent = dieRoll2;
	
if((dieRoll1 == dieRoll2) && (dieRoll1 == 1 && dieRoll2 == 1)){
	dieDiv1.style = "border-color: green";
	dieDiv2.style = "border-color: green";
	dieRollMessage.textContent = "Snake Eyees!!!! :~~~~~";
} else if(dieRoll1 == dieRoll2){
	// dieRollMessage.textContent = "We have a winner! :D Die 1: " +  dieRoll1 + " Die 2: " + dieRoll2;
	// dieDiv1Text.textContent = dieRoll1;
	// dieDiv2Text.textContent = dieRoll2;
	dieDiv1.style = "border-color: blue";
	dieDiv2.style = "border-color: blue";
	dieRollMessage.textContent = "We have a winner! :D";
} else {
		// dieRollMessage.textContent = "Sorry that roll sucked. :( Die 1: " +  dieRoll1 + " Die 2: " + dieRoll2;
		// dieDiv1Text.textContent = dieRoll1;
		// dieDiv2Text.textContent = dieRoll2;
		dieDiv1.style = "border-color: orange";
		dieDiv2.style = "border-color: orange";
		dieRollMessage.textContent = "Sorry that roll sucked. :(";
	}
}