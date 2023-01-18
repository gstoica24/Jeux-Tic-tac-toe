let database = ["", "", "", "", "", "", "", "", ""];
let currentTurn = false;
let symbol = "X";
let cases = document.querySelectorAll("main section div");
let playerWins = false;
let countMoves = 0;
let scoreX = 0;
let scoreO = 0;
let scoreE = 0;
let randomCase;

function logger(msg) {
  let loggerDisplay = document.querySelector("#logger span");
  loggerDisplay.innerHTML = msg;
  let scoreXDisplay = document.querySelector("#scoreX span");
  scoreXDisplay.innerHTML = "<br> scoreX = " + scoreX;
  let scoreODisplay = document.querySelector("#scoreO span");
  scoreODisplay.innerHTML = "<br> <br> score0 = " + scoreO;
  let scoreEDisplay = document.querySelector("#scoreE span");
  scoreEDisplay.innerHTML = "<br> <br> <br> égalité = " + scoreE;
}

function play(nb) {
  if (playerWins == false && countMoves <= 9 && database[nb] == "") {
    if (currentTurn == false) {
      symbol = "X";
      currentTurn = true;
    } else {
      symbol = "0";
      currentTurn = false;
    }
    countMoves++;
    cases[nb].textContent = symbol;
    database[nb] = symbol;

    win("X");
    win("0");
    IA();
  }
}
let count1 = 0;
function win(s) {
  if (playerWins == false) {
    if (database[0] == s && database[1] == s && database[2] == s) {
      playerWins = true;
    } else if (database[0] == s && database[3] == s && database[6] == s) {
      playerWins = true;
    } else if (database[0] == s && database[4] == s && database[8] == s) {
      playerWins = true;
    } else if (database[1] == s && database[4] == s && database[7] == s) {
      playerWins = true;
    } else if (database[2] == s && database[5] == s && database[8] == s) {
      playerWins = true;
    } else if (database[2] == s && database[1] == s && database[0] == s) {
      playerWins = true;
    } else if (database[8] == s && database[5] == s && database[2] == s) {
      playerWins = true;
    } else if (database[7] == s && database[4] == s && database[1] == s) {
      playerWins = true;
    } else if (database[6] == s && database[3] == s && database[0] == s) {
      playerWins = true;
    } else if (database[5] == s && database[4] == s && database[3] == s) {
      playerWins = true;
    } else if (database[8] == s && database[7] == s && database[6] == s) {
      playerWins = true;
    } else if (database[2] == s && database[4] == s && database[6] == s) {
      playerWins = true;
    } else if (countMoves >= 9 && playerWins == false) {
      playerWins = true;
      s = "";
      count1++;
    }
    if (playerWins == true) {
      if (s == "X") {
        scoreX++;
      } else if (s == "0") {
        scoreO++;
      } else if (count1 == 1) {
        scoreE++;
      }
      logger(" player " + s + " win");
    }
  }
}
function reset() {
  database = ["", "", "", "", "", "", "", "", ""];
  for (i = 0; i < database.length; i++) {
    cases[i].textContent = database[i];
  }
  countMoves = 0;
  currentTurn = false;
  playerWins = false;
  count1 = 0;
}

function IA() {
  if (playerWins == false && countMoves <= 9) {
    symbol = "0";
    currentTurn = false;
    countMoves++;
    randomCase = Math.floor(Math.random() * 9);
    while (database[randomCase] != "") {
      randomCase = Math.floor(Math.random() * 9);
    }
    database[randomCase] = symbol;
    cases[randomCase].textContent = symbol;
    win("X");
    win("0");
  }
}
