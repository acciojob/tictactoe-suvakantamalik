//your JS code here. If required.
//your JS code here. If required.
const payerNotEnter = true;
document.getElementById("submit").addEventListener("click", function () {
  const boxes = document.querySelectorAll(".box");

  const player1 = document.getElementById("player-1").value;
  const player2 = document.getElementById("player-2").value;
  const messageDiv = document.querySelector(".message");
  let messageBox = document.createElement("h3");

  let turn = true;

  const winPartterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (player1 !== "" && player2 !== "") {
    document.querySelector(".board").style.display = "flex";
    document.querySelector(".input-container").style.display = "none";

    messageBox.innerText = `${player1}, you're up`;
    messageDiv.appendChild(messageBox);
  } else {
    if (messageBox.innerText === "" && payerNotEnter === true) {
      messageBox.innerText = `First Enter Player's Name`;
      messageDiv.appendChild(messageBox);
      payerNotEnter = false;
    }
  }

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turn === true) {
        box.innerText = "O";
        turn = false;
        messageBox.innerText = `${player2}, you're up`;
      } else {
        box.innerText = "X";
        turn = true;
        messageBox.innerText = `${player1}, you're up`;
      }
      messageDiv.appendChild(messageBox);
      box.disabled = true;
      checkWinner();
    });
  });

  const disable = () => {
    for (let box of boxes) {
      box.disabled = true;
      // box.style.backgroundColor = "#700c82";
    }
  };
  const showWinner = (winner) => {
	if (winner === "O") {
      messageBox.innerText = `${player1}, congratulations you won!`;
    } else {
      messageBox.innerText = `${player2}, congratulations you won!`;
    }
    messageDiv.appendChild(messageBox);

    disable();
  };

  const checkWinner = () => {
    for (let partterns of winPartterns) {
      let pos1Val = boxes[partterns[0]];
      let pos2Val = boxes[partterns[1]];
      let pos3Val = boxes[partterns[2]];

      if (
        pos1Val.innerText !== "" &&
        pos2Val.innerText !== "" &&
        pos3Val.innerText !== ""
      ) {
        if (
          pos1Val.innerText === pos2Val.innerText &&
          pos1Val.innerText === pos3Val.innerText
        ) {
          // console.log(" Winner");
          pos1Val.style.backgroundColor = "#700c82";
          pos2Val.style.backgroundColor = "#700c82";
          pos3Val.style.backgroundColor = "#700c82";
          showWinner(pos1Val.innerText);
        }
      }
    }
  };
});
