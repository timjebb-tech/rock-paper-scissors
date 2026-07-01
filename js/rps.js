


const helloWorld = function() {
  return 'Hello, World!'
};

const getComputerChoice = function() {
    var choice = Math.floor(Math.random() *3);

    switch (choice) {
        case 0:
            return("rock");
            break;
        case 1:
            return("paper");
            break;
        case 2:
            return("scissors");
            break;
        default:
            throw Error("Unexpected random value generated");
    }
}

const getHumanChoice = function() {
    var notFinished = true;
    var extratext = "";
    while(notFinished)
    {
        value = prompt(`${extratext}Enter Rock, Paper, or Scissors`);
        value = value.toLowerCase();
        if (["rock", "paper", "scissors"].includes(value)) {
            return value;
        } 
        extratext = `Invalid input: ${value} `;
    }

}

const playRound = function() {
    var computerChoice = getComputerChoice();
    document.querySelector("#computerChoice").textContent = computerChoice;
    if (humanChoice == computerChoice) {
        updateResult("It's a draw");
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            updateResult("You win! Rock smashes scissors!");
            humanScore++;
        }
        else {
            updateResult("Computer wins! Paper covers rock");
            computerScore++;
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            updateResult("Computer wins! Rock smashes scissors!");
            computerScore++;
        }
        else {
            updateResult("You win! Scissors cut paper!");
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") { 
            updateResult("You win! Paper covers rock");
            humanScore++;
        }
        else {
            updateResult("Computer wins! Scissors cut paper!");
            computerScore++;
        }
    }
    else
    {
        alert("please choose rock, paper or scissors");
    }
    
}

function updateScoreDisplay() {
    document.querySelector("#score").textContent = `You: ${humanScore}, Computer: ${computerScore}, rounds played: ${roundCount}`;
}

function updateResult(resultText) {

    if (roundCount == 0) {
        document.querySelector("#gameOver").textContent = "";
    }
    roundCount++;
    
    updateScoreDisplay();
    document.querySelector("#result").textContent = resultText;

    if (roundCount >= 5)
    {
        if (humanScore > computerScore) {
            document.querySelector("#gameOver").textContent = `Game Over!  You win! ${humanScore} : ${computerScore}`;
        }
        else if (humanScore < computerScore) {
            document.querySelector("#gameOver").textContent = `Game Over!  Computer wins! ${computerScore} : ${humanScore}`;
        }
        else {
            document.querySelector("#gameOver").textContent = `Game Over!  It's a draw! ${computerScore} : ${humanScore}`;
        }
        humanScore = 0;
        computerScore = 0;
        roundCount = 0;
    }
}



// const playGame = function(roundCount) {
//     for (var i=0; i < roundCount; i++) {
//         var computerChoice = getComputerChoice();
//         var humanChoice = getHumanChoice();

//         playRound(humanChoice, computerChoice);
//     }

//     if (humanScore > computerScore)
//     {
//         console.log(`Human wins the contest ${humanScore} to ${computerScore}!`);
//     }
//     else if (humanScore < computerScore)
//     {
//         console.log(`Computer wins the contest ${computerScore} to ${humanScore}!`);
//     }
//     else {
//         console.log(`Contest is a draw!  ${humanScore} : ${computerScore}`);
//     }
// }

var roundCount = 0;
var humanChoice = "None"
var computerScore = 0;
var humanScore = 0;

var elementsArray = document.querySelectorAll('.chooser');

onChoose = function(e) {
    console.log("wibble");
    console.log(e.srcElement.id);
    document.querySelector("#yourChoice").textContent = e.srcElement.id;
    humanChoice = e.srcElement.id;

}

elementsArray.forEach(function(element) {
    element.addEventListener("click", onChoose);
    }
);

document.querySelector('#playRound').addEventListener("click", playRound);;