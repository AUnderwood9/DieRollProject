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

