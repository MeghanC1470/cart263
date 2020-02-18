"use strict";

/*****************

Title
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
const NOTE_TEMPO = 500;
const DRUM_TEMPO = 250;

let frequencies = [
  110.00,
  123.47,
  69.30,
  36.71,
  82.41,
  92.50,
  103.83
];

let synth = new Pizzicato.Sound({
  source: 'wave',
});

var kick = new Pizzicato.Sound('assets/sounds/kick.wav');
var snare = new Pizzicato.Sound('assets/sounds/snare.wav');
var hihat = new Pizzicato.Sound('assets/sounds/hihat.wav');

let beat = 0;
let pattern = ['x', '*', 'xo*', ' ', 'x', 'x', 'xo', '*'];


// setup
//
//
function setup(){

}

function mousePressed(){
 setInterval(playNote, NOTE_TEMPO);
 setInterval(playDrum, DRUM_TEMPO)
}

function playNote(){
  let note = frequencies[Math.floor(Math.random()* frequencies.length)];
  synth.frequency = note;
  synth.play();
}

function playDrum(){
  let symbols = pattern[beat];
  if (symbols.includes('x')) {
    kick.play();
  }
  if (symbols.includes('xo')) {
    snare.play();
  }
  if (symbols.includes('*')) {
    hihat.play();
  }
}
