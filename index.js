//variable for output of die

var ranNumOne = Math.ceil(Math.random()*6);
var ranNumTwo = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src", "images/dice" + ranNumOne + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + ranNumTwo + ".png");

if (ranNumOne > ranNumTwo){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (ranNumOne < ranNumTwo){
  document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
}
else {
  document.querySelector("h1").textContent = "🙅‍♂️ Draw! 🙅‍♀️";
}
