var gamePattern = [];
var randomNumber;
var randomChosenColor;
const buttonColours = ["blue", "green", "yellow", "red"];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {
  randomNumber = Math.random() * 3;
  var value = Math.round(randomNumber);

  randomChosenColor = buttonColours[value];

  gamePattern.push(randomChosenColor);
  console.log(gamePattern.values());
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
