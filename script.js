const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    return choices[computerChoiceIndex];
}

function singleGame(user, computer) {
    //   console.log(`User choice: ${user}\nComputer choice: ${computer}`);
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
    } else {
        return `Please enter a value from this list ${choices}`;
    }
}

function game(rounds, func) {
    let comp = 0;
    let usr = 0;
    for (let i = 0; i < rounds; i++) {
        let userChoice = prompt(`Please enter a value`);
        let res = func(userChoice, getComputerChoice());
        if (res === 0) {
            comp++;
        } else if (res === 1) {
            usr++;
        } else if (res === 0.5) {
            comp += 0.5
            usr += 0.5
        }
    }
    alert(`Computer ${comp} : ${usr} User`);
}

game(prompt("how many rounds would you like to play"), singleGame);
