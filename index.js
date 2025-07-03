
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;
var score = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    $("#score-display").removeClass("hidden");
    updateScore();
    nextSequence();
    started = true;
  }
});


$("#start-btn").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    $("#start-btn").addClass("hidden");
    $("#score-display").removeClass("hidden");
    updateScore();
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        // Player completed the sequence correctly
        score += level * 10; // Award points based on level
        updateScore();
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over! Final Score: " + score);
      $("#start-btn").removeClass("hidden");
      $("#score-display").addClass("hidden");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  score = 0;
  $("#level-title").text("Press Start to Begin");
}

function updateScore() {
  $("#score-display").text("Score: " + score);
}
