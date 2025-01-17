  //Object = to group a multiple value together.

  let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();

  function playGame(playerMove) {
    const ComputerMove = pickComputerMove();

    let result = "";

    if (playerMove === "Scissors") {
      if (ComputerMove === "Rock") {
        result = "You Lose!";
      } else if (ComputerMove === "Paper") {
        result = "You Win!";
      } else if (ComputerMove === "Scissors") {
        result = "Draw!";
      }
    } else if (playerMove === "Paper") {
      if (ComputerMove === "Rock") {
        result = "You Win!";
      } else if (ComputerMove === "Paper") {
        result = "Draw!";
      } else if (ComputerMove === "Scissors") {
        result = "You Lose!";
      }
    } else if (playerMove === "Rock") {
      if (ComputerMove === "Rock") {
        result = "Draw!";
      } else if (ComputerMove === "Paper") {
        result = "You Lose!";
      } else if (ComputerMove === "Scissors") {
        result = "You Win!";
      }
    }

    if (result === "You Win!") {
      score.wins += 1;
    } else if (result === "You Lose!") {
      score.losses += 1;
    } else if (result === "Draw!") {
      score.ties += 1;
    } else {
      console.log(`Invalid`);
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
      ".js-move"
    ).innerHTML = ` You <img src="images/${playerMove}-emoji.png" class="move-icon" />
  <img src="images/${ComputerMove}-emoji.png" class="move-icon" />Computer`;

    alert(
      `You picked ${playerMove} Computer picked ${ComputerMove} The Result is ${result} 
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
    );
  }

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const RandomNumber = Math.random();

    let ComputerMove = "";

    if (RandomNumber >= 0 && RandomNumber <= 1 / 3) {
      ComputerMove = "Rock";
    } else if (RandomNumber >= 1 / 3 && RandomNumber <= 2 / 3) {
      ComputerMove = "Paper";
    } else if (RandomNumber >= 2 / 3 && RandomNumber < 1) {
      ComputerMove = "Scissors";
    }

    return ComputerMove;
  }