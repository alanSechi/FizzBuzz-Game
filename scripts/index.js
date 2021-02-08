const startButton = document.getElementById("startButton");
const ul = document.getElementById("fizzbuzzer");
let title = document.getElementById("gameTitle");

startButton.onclick = function () {
  let nmbr;

  for (nmbr = 1; nmbr <= 100; nmbr++, msg = "") {
    if (nmbr % 15 === 0) {
      msg = "fizzbuzz";
    } else if (nmbr % 3 === 0) {
      msg = "fizz";
    } else if (nmbr % 5 === 0) {
      msg = "buzz";
    } else msg = "";

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(nmbr + " " + msg));
    li.setAttribute("class", msg);
    ul.appendChild(li);
    startButton.innerHTML = "FINISH";

    startButton.onclick = function () {
      ul.remove(li);
      startButton.remove();
      title.innerHTML = "Thanks for playing FizzBuzz!!";
    };
  }
};
