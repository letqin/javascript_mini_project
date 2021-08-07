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
    ties += ties // adds one on the value of ties
}

// it's a tie
// increment ties