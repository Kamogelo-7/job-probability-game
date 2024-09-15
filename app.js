//*Job probability game

function jobProbabilityGame() {
document.querySelector("#submit").addEventListener("click", function () {
  let userNames = document.querySelector("#txt").value; //Stores the users name

  let randomNumber = Math.floor(Math.random() * 100) + 1; //Generates a random number from 1 to 100
  let userNames = prompt("Enter your name"); //Stores the users name

  if (randomNumber > 70) {
    document.querySelector("p").innerHTML = "Wow you should start applying!";
    document.querySelector("h3").innerHTML = randomNumber + "%";
    document.querySelector("h2").innerHTML = "Hey " + userNames + " you got";
    document.querySelector("p").innerText = "😀 Wow you should start applying!";
    document.querySelector("h3").innerText = randomNumber + "%";
    document.querySelector("h2").innerText = "Hey " + userNames + " you got";
  } else if (randomNumber >= 40 && randomNumber <= 70) {
    document.querySelector("p").innerHTML = "You are able to get a job!";
    document.querySelector("h3").innerHTML = randomNumber + "%";
    document.querySelector("h2").innerHTML = "Hey " + userNames + " you got";
    document.querySelector("p").innerText = "You are able to get a job!";
    document.querySelector("h3").innerText = randomNumber + "%";
    document.querySelector("h2").innerText = "Hey " + userNames + " you got";
  }
  if (randomNumber < 30) {
    document.querySelector("p").innerHTML =
      "YOOO WATCH OUT, YOUR COOKED NGL JUST CRY!";
    document.querySelector("h3").innerHTML = randomNumber + "%";
    document.querySelector("h2").innerHTML =
    document.querySelector("p").innerText =
      "YOOO WATCH OUT, YOUR COOKED NGL JUST CRY! 😂";
    document.querySelector("h3").innerText = randomNumber + "%";
    document.querySelector("h2").innerText =
      "Hey " + userNames + " no luck you got";
    document.querySelector("h4").innerHTML = "Sorry try again ;)";
    document.querySelector("h4").innerText = "Sorry try again 😖";
  }
}
});
jobProbabilityGame();
