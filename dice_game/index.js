

var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "./images/dice" + String(randomNumber1) + ".png");
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "./images/dice" + String(randomNumber2) + ".png");

var header = document.querySelectorAll("h1")[0];
if (randomNumber1 == randomNumber2)
{
    header.innerHTML = "Draw!";
} 
else if (randomNumber1 > randomNumber2)
{
    header.innerHTML = "🚩Player 1 Wins!";
}
else
{
    header.innerHTML = "Player 2 Wins!🚩";
}
