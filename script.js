let userScore = 0;
let compScore = 0;

const resetBtn = document.querySelector("#reset-game");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const GencompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    // rock , paper , scissors -> comp will choose randomly out of three choices
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

const playGame = (userChoice) => {
    console.log("User Choice =" , userChoice);

    // Generate Computer Choice
    const CompChoice = GencompChoice();
    console.log("Comp Choice =" , CompChoice);

    if(userChoice === CompChoice) {
        // Draw Choice
        drawGame(userChoice);
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            // comp choice will be paper and scissors
            userWin = CompChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = CompChoice === "scissors" ? false : true;
        }
        else {
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , CompChoice);
    }
};

// User Choice
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = (userChoice) => {
    msg.innerText = `It's a tie! Both chose ${userChoice}`;
    msg.style.backgroundColor = "orange";
};

const showWinner = (userWin , userChoice , CompChoice) => {
    if(userWin){
        msg.innerText = `User Wins. Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = `Computer Wins. ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

resetBtn.addEventListener("click" , () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = '0';
    compScorePara.innerText = '0';
    msg.innerText = "play your move"
    msg.style.backgroundColor = "";
});