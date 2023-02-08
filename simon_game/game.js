
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];

function playSound(name)
{
    $("." + name + "_sound").get(0).play();
}

function nextSequence()
{
    // generate random colour and store it
    var randomNumber = Math.floor(3 * Math.random()) + 1;
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

nextSequence();

$(".btn").click(function()
{
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});
