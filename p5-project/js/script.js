"use strict";

/*****************

Title
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let $mouth;
let $fly;
let buzzSound = new Audio("assets/sounds/buzz.mp3");
let mouthSound = new Audio("assets/sounds/crunch.wav")

$(document).ready(setup);

function setup() {
  $mouth = $('#mouth');
  $mouth.droppable({
  drop: onDrop
});
  $fly = $('#fly');
  $fly.draggable();
  console.log('fly');
  buzzSound.loop = true;
  $fly.on('mousedown', function() {
    buzzSound.play();
  });
  $fly.on('mouseup', function() {
    buzzSound.pause();
  });
}

function onDrop(){
$fly.remove()
$(this).attr('src','assets/images/mouth2.png');
setInterval(chew, 150);
}

function chew(){
  if ($mouth.attr('src') === 'assets/images/mouth.png') {
    $mouth.attr('src','assets/images/mouth2.png');
  mouthSound.currentTime = 0;
  mouthSound.play();
}
else {
  $mouth.attr('src','assets/images/mouth.png');
}
}
