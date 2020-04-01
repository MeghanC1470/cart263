"use strict";

/*****************

Project 3
Meghan Cullen

GOAL: CREATE A SONG FROM A JUMBLE OF SOUNDS THROUGH VOICE COMMANDS AND BUTTONS

******************/
// Time for one note
const NOTE_TEMPO = 500;
// Time for one beat
const DRUM_TEMPO = 250;
// Attack time for a note (in seconds)
const ATTACK = 0.1;
// Release time for a note (in seconds)
const RELEASE = 0.1;

// We need an array of the possible notes to play as frequencies (in Hz)
// A Major =  A, B, C♯, D, E, F♯, and G♯
// We can get the frequencies of these notes from THE INTERNET, e.g.
// http://pages.mtu.edu/~suits/notefreqs.html
let frequencies = [
  220, 246.94, 277.18, 293.66, 329.63, 369.99, 415.30
];
// The synth
let synth;
let synthInterval;
// The sound files
let kick;
let snare;
let hihat;
let drumbeat;
// Our drum pattern
// Each array element is one beat and has a string with each
// drum to play for that beat
// x = kick, o = snare, * = hihat
let pattern = ['xa', '*', 'xo*', 'a', 'x', 'x', 'xo', '*'];
// Which beat of the pattern we're at right now
let beat = 0;

if (annyang) {
//Let's define a command.
var commands = {
  'Start': function(){
    console.log("Starting Beat");
    synthInterval = setInterval(playNote, NOTE_TEMPO);
    setInterval(playDrum, DRUM_TEMPO);
  },
  'Melody off': function(){
    console.log("Synth Off");
    synth.volume = 0
  },
  'Melody on': function(){
    console.log("Synth On");
    synth.volume = 1
  },
  //Change synth
  'Kick off': function(){
    console.log("Kick Off");
    kick.volume = 0
  },
  'Kick on': function(){
    console.log("Kick On");
    kick.volume = 1
  },
  'Snare off': function(){
    console.log("Snare Off");
    snare.volume = 0
  },
  'Snare on': function(){
    console.log("Snare On");
    snare.volume = 1
  },
  'Cymbals off': function(){
    console.log("Cymbals Off");
    hihat.volume = 0
  },
  'Cymbals on': function(){
    console.log("Cymbals On");
    hihat.volume = 1
  },
  'Drums on': function(){
    console.log("Drums on");
    drumbeat.volume = 1
  },
  'Drums off': function(){
    console.log("Drums off");
    drumbeat.volume = 0
  },
  'Stop': function(){
    console.log("Everything is off");
    synth.volume = 0
    kick.volume = 0
    snare.volume = 0
    hihat.volume = 0
    drumbeat.volume = 0
  },
  'Resume': function(){
    console.log("Everything is on");
    synth.volume = 1
    kick.volume = 1
    snare.volume = 1
    hihat.volume = 1
    drumbeat.volume = 1
  }
};

//Add our commands to annyang
annyang.addCommands(commands);

//Start listening.
annyang.start();
};

$(document).ready(setup);

function setup() {

  // Create the synth
  synth = new Pizzicato.Sound({
    source: 'wave',
    options: {
      type: 'sine',
      frequency: 220,
      attack: ATTACK,
      release: RELEASE
    }
  });

  // Load the three drum sounds as wav files
  kick = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/kick.wav'
    }
  });

  snare = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/snare.wav'
    }
  });

  hihat = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/hihat.wav'
    }
  });

  drumbeat = new Pizzicato.Sound ({
    source: 'file',
    options: {
    path: 'assets/sounds/5Drumhit.wav'
    }
  });
}


// playNote
//
// Chooses a random frequency and assigns it to the synth
function playNote() {
  // Pick a random frequency from the array
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's not already playing, play the synth
  synth.play();
}

// playDrum()
//
// Checks the string representing the drums for the current beat
// and plays the appropriate sounds
function playDrum() {
  // Get the symbols for the current beat in the pattern
  let symbols = pattern[beat];

  // If there's an 'x' in there, play the kick
  if (symbols.includes('x')) {
    kick.play();
  }
  // If there's an 'o' in there, play the snare
  if (symbols.includes('o')) {
    snare.play();
  }
  // If there's an '*' in there, play the hihat
  if (symbols.includes('*')) {
    hihat.play();
  }
  if (symbols.includes('a')) {
    drumbeat.play();
  }
  // Advance the pattern by a beat
  beat = (beat + 2) % pattern.length;
}

// draw()
//
// Nothing right now. But imagine the possibilities!

function draw() {}
