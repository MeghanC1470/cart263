"use strict";

/*****************

Sisyphus
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

let $box
let $ball

$(document).ready(setup);

function setup() {
  $box = $('#box');
  $box.droppable({
  drop: onDrop
});
  $ball = $('#ball');
  $ball.draggable();
}

function onDrop(){
$ball.remove()
}
//update Function
