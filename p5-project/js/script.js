"use strict";

/*****************

Title
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload
window.onload = setup;

function preload() {

}


// setup()
//
// Description of setup

function setup() {
console.log("Document Loaded");
for (let i = 0; i < 1000; i++) {
  let newPixel = document.createElement('div');
  newPixel.setAttribute('class', 'pixel');
  //pixelDiv = document.getElementsByTagName ("body");
  document.body.appendChild(newPixel);
  newPixel.addEventListener('mouseover', paint);
}
}
  function paint(e) {
    e.target.style.backgroundColor = 'white';
    setTimeout(resetPixel, 1000, e.target);
}
function resetPixel(pixel) {
  pixel.style.backgroundColor = "black";
}


// draw()
//
// Description of draw()

function draw() {

}
