const game = document.getElementById("game");
const letter = document.getElementById("letter");
const input = document.getElementById("input");
const form = document.getElementById("form");
const check = document.getElementById("check");
const skip = document.getElementById("skip");
const show = document.getElementById("show");
const message = document.getElementById("message");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function round() {
  var index = Math.round(Math.random() * (letters.length - 1));
  var answer = index + 1;

  letter.innerText = letters[index];
  input.value = "";
  check.value = "Check";
  message.style.opacity = 0;

  var correct = false;

  form.onsubmit = function(e) {
    e.preventDefault();
    if(correct == true) {
      round();
      clearTimeout(round);
    } else {
      if(input.value >= 1 && input.value <= letters.length) {
        if(input.value != answer) {
          message.style.color = "red";
          message.innerText = "Incorrect!"
          message.style.opacity = 1;
        } else {
          message.style.color = "green";
          message.innerText = "Correct!";
          message.style.opacity = 1;
          check.value = "Next";
          correct = true;
        }
      } else {
        message.style.color = "red";
        message.innerText = "Invalid input!";
        message.style.opacity = 1;
      };
      setTimeout('message.style.opacity = 0', 1000);
    }
  };

  skip.onclick = function() {
    round();
  };

  show.onclick = function () {
    input.value = answer;
  }
};

round();