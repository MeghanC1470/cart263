"use strict";

/*****************

Sisyphus
Meghan Cullen

Papa Zeus told Lil' Sisyphus to put his toys away, but some just won't go
back no matter what lil Sisy does!

******************/

let $box;
let $ball;
let $bear;
let $train;
let $car;
let $horse;
let $duck;

let random;
let message = ['Put your toys away Lil Sisyphus', 'Why have you not put your toys away yet?', 'Put your toys away right now!', 'Are you happy, Sisyphus?', 'Are you almost done Sisyphus?', 'I am going to count to 3 and the toys better be away!', 'Clean up your mess, Sisyphus!', 'All done?', 'What are you doing Sisyphus?'];

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
  $duck = $('#duck');
  $duck.draggable({
    revert: "valid"
});
  $bear = $('.bear');
  $bear.draggable();
  $car = $('.car');
  $car.draggable();
  $horse = $('.horse');
  $horse.draggable();
}

function onDrop(event, ui){
random = Math.floor(Math.random() * message.length);
$('#messageDisplay').text(message[random]);
$ball.draggable();
$train.draggable();
$duck.draggable();
if ( $(ui.draggable).hasClass("bear") === true){
$(ui.draggable).remove();
  }
if ( $(ui.draggable).hasClass("car") === true){
$(ui.draggable).remove();
  }
if ( $(ui.draggable).hasClass("horse") === true){
  $(ui.draggable).remove();
    }
}
