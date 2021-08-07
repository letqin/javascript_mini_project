// declaring variables
let wins = 0
let losses = 0
let ties = 0
let userSelection =""
// cpu picker math
function cpuPick() {
    var x =Math.floor(Math.random() * cpuSelection.length)
    alert("I choose " + cpuSelection[x] + "!")
}

function userPrompt () { //prompts user for choice
    var getUserSelect = window.prompt("Enter r, p, or s: ");
    if (getUserSelect != "r" && getUserSelect != "p" && getUserSelect != "s" ) {
        userSelection = "Not a valid entry"
    } else {userSelection = getUserSelect  }  
    console.log(userSelection)  
}

var playerChoice = prompt( "R", "S", "P");
var computerChoice = Math.random();
if (computerChoice < 0.31) {
    computerChoice ="R";
}
 else if(computerChoice <=0.59) {
    computerChoice ="S";
 } //prints computer choice
 else {computerChoice ="P";
 window.alert("The computer chose " + computerChoice)
}