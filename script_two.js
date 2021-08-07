// variables for wins, losses, and ties
var wins = 0;
var loss = 0;
var ties = 0;

// prompt user to choose r, p, s
var userChoice = prompt("Choose R, P, or S")

// computer makes a choice
var choices = ["R", "P", "S"]
var computerChoice = choices[Math.floor( Math.random() * choices.length )]

// show computer choice to user
alert("Computer chose " + computerChoice)

// check for tie
if (userChoice === computerChoice) {
    ties ++ // adds one on the value of ties
}

// check for winning condition
// if user chose S and computer chose P
else if (
    userChoice === "S" && computerChoice === "P" ||
    userChoice === "R" && computerChoice === "S" ||
    userChoice === "P" && computerChoice === "R"
) {
    wins ++
}
// lose
else {
    //increment losses
    loss ++ 
}

// display stats
alert("Wins: " + wins + "\nTies: " + ties + "\nLosses" loss)
console.log(playAgain)
