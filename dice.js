let rollBtn = document.querySelector(".btn");

rollBtn.addEventListener("click", () => {
  // Generate a random number and floor
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  // Add random number to image src
  //Add src to the img element
  let diceImg = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", diceImg);

  let diceImg2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", diceImg2);

  //Conditional statement to change text according to
  //which random number is higher.
  let text;

  if (randomNumber1 > randomNumber2) {
    text = "🚩Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    text = "Player 2 Wins!🚩";
  } else {
    text = "Draw!";
  }

  // Change h1 Text with result of if statement
  document.querySelector("h1").textContent = text;
});
