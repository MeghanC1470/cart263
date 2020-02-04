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
  $bear = $('.bear');
  $bear.draggable();
  $train = $('#train');
  $train.draggable({
    revert: "valid"
  })
}

function onDrop(event, ui){
$ball.draggable();
$train.draggable();
if ( $(ui.draggable).hasClass("bear") === true){
$(ui.draggable).remove();
}
  console.log("bear");
}
