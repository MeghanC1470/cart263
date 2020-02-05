"use strict";

/*****************

Sisyphus
Meghan Cullen

Papa Zeus told Lil' Sisyphus to put his toys away, but some just won't go
back no matter what lil Sisy does!

******************/
// First we announce where we will store all our toys
let $box;
let $ball;
let $bear;
let $train;
let $car;
let $horse;
let $duck;
// Store the music
let backgroundMusic = new Audio("assets/sounds/Music.mp3")
let packingSound = new Audio("assets/sounds/PackingSound.mp3")
// Set the messages made by Papa Zeus
let random;
let message = ['Put your toys away Lil Sisyphus', 'Why have you not put your toys away yet?', 'Put your toys away right now!', 'Are you happy, Sisyphus?', 'Are you almost done Sisyphus?', 'I am going to count to 3 and the toys better be away!', 'Clean up your mess, Sisyphus!', 'All done?', 'What are you doing Sisyphus?', 'I thought I said I wanted your toys away!', 'Do not lie to me, Sisyphus!'];

$(document).ready(setup);
// funtion setup
//
// Sets the box which toys can be dragged and dropped into
function setup() {
// First we link the box with the id in the index
  $box = $('#box');
// We make the box immovable, but able to have items dropped into when placed on it
  $box.droppable({
    drop: onDrop
});
// Link the toy to the id in the index
  $ball = $('#ball');
// Announce it as a draggable object
  $ball.draggable({
// Authorize the "revert" command so that the ball can't be dropped into the box
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
// This time, the toy will be linked to the class it is set in the index, but
// still remain draggable.
  $bear = $('.bear');
  $bear.draggable();
  $car = $('.car');
  $car.draggable();
  $horse = $('.horse');
  $horse.draggable();
// Let the cheery backgroudn music play
  backgroundMusic.play();
}

// function onDrop
//
// When a toy is dropped, it will either go into the box, or revert away from it,
// Additionally, Papa Zeus' messages will appear
function onDrop(event, ui){
// Using Math.random, we pick a random sentence in the message length
random = Math.floor(Math.random() * message.length);
$('#messageDisplay').text(message[random]);
// After these toys have been dropped, they will revert and still be draggable
$ball.draggable();
$train.draggable();
$duck.draggable();
// After these toys are dropped, they will be "placed" into the box and be removed
// To avoid the toys from disappearing when a Reverted Toy is dropped, they must
// be in seperate classes
if ( $(ui.draggable).hasClass("bear") === true){
$(ui.draggable).remove();
packingSound.play();
  }
if ( $(ui.draggable).hasClass("car") === true){
$(ui.draggable).remove();
  }
if ( $(ui.draggable).hasClass("horse") === true){
  $(ui.draggable).remove();
    }
// After a toy has been dropped, a packing sound will play
packingSound.play();
}
