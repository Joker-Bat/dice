function dice() {

//Player 1

var player1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomImage = "dice" + player1 + ".png"; //dice1.png - dice6.png

var randomImageSrc = "images/" + randomImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSrc);

//Player 2

var player2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc = "images/dice" + player2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc);

//For Condition

if (player1 > player2) {
  document.querySelector("h1").textContent = "🚩 Player 1.";
}
else if (player1 < player2) {
  document.querySelector("h1").textContent = "Player 2.🚩";
}
else {
  document.querySelector("h1").textContent = "Match Draw.";
}

}
