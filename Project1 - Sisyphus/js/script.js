"use strict";

/*****************

Sisyphus
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let $box
let $ball
let $bear
let $train
let $car

$(document).ready(setup);

function setup() {
  $box = $('#box');
  $box.droppable({
    drop: onDrop
});
  $ball = $('#ball');
  $ball.draggable({
    revert: "valid"
});
  $train = $('#train');
  $train.draggable({
    revert: "valid"
});
  $bear = $('.bear');
  $bear.draggable();
  $car = $('.car');
  $car.draggable();
}

function onDrop(event, ui){
$ball.draggable();
$train.draggable();
if ( $(ui.draggable).hasClass("bear") === true){
$(ui.draggable).remove();
  }
if ( $(ui.draggable).hasClass("car") === true){
$(ui.draggable).remove();
  }
}
