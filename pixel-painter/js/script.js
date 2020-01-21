"use strict";

/********************************************************************

Pixel painter
Meghan Cullen

A small DOM-based program for "painting" on div-based pixels.

*********************************************************************/

// Constants
const NUM_PIXELS = 1000;
const PIXEL_REVERT_DELAY = 1000;
const DEFAULT_COLOR = 'black';
const PAINT_COLOR = 'white';

// Name our class and set the rotation to 0
let pixel;
let rotation = 0;

// Set up our starting function for when the page loads
window.onload = setup;

// setup
//
// Adds DIVs to the page along with event listeners that will allow
// then to change color on mouseover.
function setup() {
  // A loop that runs once per pixel we need
  for (let i = 0; i < NUM_PIXELS; i++) {
    // Create a DIV and store it in a variable
    pixel = document.createElement('div');
    // Add the 'pixel' class to the new element
    pixel.setAttribute('class', 'pixel');
    // Add a mouseover handler to the new element
    pixel.addEventListener('mouseover', paint);
    // Add a rotate handler to the new element
    document.addEventListener('keydown', rotate)
    // Add the element to the body of the page
    document.body.appendChild(pixel);
  }
}

// paint
//
// Called by the mouseover event handler on each pixel. Changes
// the pixel's color and sets a timer for it to revert
function paint(e) {
  // e.target contains the specific element moused over so let's
  // save that into a variable for clarity.
  let pixTarget = e.target;
  // Change the background color of the element to a random color
  pixTarget.style.backgroundColor = getRandomColor();
  // Set a timeout to call the reset function after a delay
  // When we pass additional parameters (like 'pixel' below) they
  // are passed to the callback function (resetPixel)
  setTimeout(resetPixel, PIXEL_REVERT_DELAY, pixTarget);
}

// rotate
//
// Called by a rotate event handler on each pixel.
// Makes the pixels and background spin
function rotate(e) {
// Call the pixel element by class name
 let pixel = document.getElementsByClassName("pixel")
// Create an if statement if the right arrow is pressed
 if (event.keyCode === 39){
// Make the pixels rotate to the right
   rotation = rotation + 1;
 }
// Create an if statement for the left arrow
 else if (event.keyCode === 37){
// Make the pixels rotate to the left
   rotation = rotation - 1;
 }
 // Create an array to that effects all pixels
 for (var i = 0; i < pixel.length; i++) {
 // Use the .transform to rotate the pixel to a certain degree
   pixel[i].style.transform = `rotate(${rotation}deg)`;
  }
 }

// function getRandomColor
//
// Makes each pixel a different color
function getRandomColor(){
//Make seperate variables for the letters and color
  var letters = '0123456789ABCDEF';
  var color = '#'
//Using math.random, combine the letters and color variable together to
//randomly select a letter to get a random color
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

// resetPixel
//
// Takes the provided pixel element and sets its color back to default
function resetPixel(pixel) {
  pixel.style.backgroundColor = DEFAULT_COLOR;
}
