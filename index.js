let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const genCompChoice = () =>{
const option = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random()*3);
return option[randIdx];
}
const drawGame = () =>{
    msg.innerText = " Game was Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore; 
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame  = (userChoice) =>{
        console.log("user choice value is = ",userChoice);
        //generate computer choice
        const compChoice = genCompChoice();
        console.log("computer choice = ",compChoice);
        //Draw Game 
        if(userChoice === compChoice){
            drawGame();
        }
        else{
            let userWin = true;
            if(userChoice === "rock"){
                //paper,scissors
                userWin = compChoice === "paper" ? false : true; 
            }
            else if(userChoice === "paper"){
                //rock/scissors
                userWin = compChoice === "scissors" ? false : true;   
            }
            else{
                //rock,paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
}
choices.forEach((choice) => {
        choice.addEventListener("click",() =>{
            const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
});
