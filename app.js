let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const userscrpara = document.querySelector("#user-scr");
const compscrpara = document.querySelector("#comp-scr");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});

const gencompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const gamedraw = () => {
  console.log("Match draw");
  msg.innerText = "Match draw";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userscore++;
    userscrpara.innerText = userscore;

    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscrpara.innerText = compscore;

    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playgame = (userChoice) => {
  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    gamedraw(); //Draw Game
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //scissors , paper
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissor
      userwin = compChoice === "scissor" ? false : true;
    } else {
      //rock , paper
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};
