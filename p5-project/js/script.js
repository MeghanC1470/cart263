"use strict";

/*****************

Activity 1: Circle Eater
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
// Player
let player = {
  x: 0,
  y: 0,
  maxSize: 50,
  size: 50,
  active: true,
  color: '#cccc55'
}

let food = {
  x: 0,
  y: 0,
  size: 100,
  color: '#ffff60'
}

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth,windowHeight);
  foodPosition();
  noCursor();
}


// draw()
//
// Description of draw()

function draw() {
  background(0);
  updatePlayer();

  //updatePlayer
  function updatePlayer(){
    player.x = mouseX
    player.y = mouseY
  }
}
