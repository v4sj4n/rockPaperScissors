const name = document.getElementById('name')
const nameSubmitter = document.getElementById('name-submitter')

const userName = document.getElementById('user-name')

function submitName() {
    if (name.value == "") {
        userName.textContent = "Anon User"
    } else {
        userName.textContent = name.value;
    }
    
    name.value = ''; // Clear the input field
    document.getElementById('opening-container').style.display = 'none';
    document.querySelector('main').style.display = 'block';
}

nameSubmitter.addEventListener('click', submitName);

name.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitName();
    }
});


const rockbtn = document.getElementById('rock-button')
const paperbtn = document.getElementById('paper-button')
const scissorsbtn = document.getElementById('scissors-button')
const winnerText = document.getElementById('winner-text')

const compScore = document.getElementById('computer-score')
const userScore = document.getElementById('user-score')



const choices = ["rock", "paper", "scissors"];


function scoreChecker() {
    if ((compScore.textContent >= 5 || userScore.textContent >= 5) && compScore.textContent != userScore.textContent) {
        compScore.textContent = 0
        userScore.textContent = 0

        winnerText.textContent = "The winner is"
        winnerText.style.display = 'none'

    }
}
function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    return choices[computerChoiceIndex];
}

function gameLogic(user, computer) {
    console.log(`User choice: ${user}\nComputer choice: ${computer}`);
    if (user === "rock") {
        if (computer === "rock") {
            return 0.5;
        } else if (computer === "paper") {
            return 0;
        } else {
            return 1;
        }
    } else if (user === "paper") {
        if (computer === "rock") {
            return 1;
        } else if (computer === "paper") {
            return 0.5;
        } else {
            return 0;
        }
    } else if (user === "scissors") {
        if (computer === "rock") {
            return 0;
        } else if (computer === "paper") {
            return 1;
        } else {
            return 0.5;
        }
    }
}

function scoreAdder(value) {
    if (value == 1) {
        userScore.textContent = Number(userScore.textContent) + 1
    }
    else if (value == 0.5) {
        userScore.textContent = Number(userScore.textContent) + 0.5
        compScore.textContent = Number(compScore.textContent) + 0.5
    } else {
        compScore.textContent = Number(compScore.textContent) + 1

    }
    if ((userScore.textContent >= 5 || compScore.textContent >= 5) && userScore.textContent != compScore.textContent){
        if (userScore.textContent >= compScore.textContent) {
            winnerText.textContent += ` ${userName.textContent}`
            winnerText.style.display = 'block'
        } else{
            winnerText.textContent += " Computer"
            winnerText.style.display = 'block'

        }

    }
}

function playGame(value) {
    scoreChecker()
    const computerChoice = getComputerChoice()
    const userValue = gameLogic(value, computerChoice)
    scoreAdder(userValue)
    
}


rockbtn.addEventListener('click', () => playGame("rock"))
paperbtn.addEventListener('click', () => playGame("paper"))
scissorsbtn.addEventListener('click', () => playGame("scissors"))
