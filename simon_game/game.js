
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];

// set up audio for each color
var audio = {};



function nextSequence()
{
    var randomNumber = Math.floor(3 * Math.random()) + 1;
    return randomNumber;
}

// generate random colour and store it
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
$("." + randomChosenColour + "_sound").get(0).play();
