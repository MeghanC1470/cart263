"use strict";

/*****************

Project 3
Meghan Cullen

GOAL: CREATE A SONG FROM A JUMBLE OF SOUNDS THROUGH VOICE COMMANDS AND BUTTONS

******************/
// Time for one note
let noteTempo = 500;
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
let cymbals;
let drums;
let bow;
let guitar
let bass
// Our drum pattern
// Each array element is one beat and has a string with each
// drum to play for that beat
// x = kick, o = snare, * = cymbals
let pattern = ['uxa', '*u', 'x*', 'abou', 'x', 'x', 'xao', '*', 'b'];
// Which beat of the pattern we're at right now
let beat = 0;

if (annyang) {
//Let's define a command.
var commands = {
  'Start': function(){
    console.log("Starting Beat");
    synthInterval = setTimeout(playNote, noteTempo);
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
  'Melody Beat Down': function(){
    console.log("Synth Beat Down By 10");
    noteTempo += 125;
    document.getElementById("myMelodyRange").value -= "10";
  },
  'Melody Beat Up': function(){
    console.log("Synth Beat Up By 10");
    noteTempo -= 125;
    document.getElementById("myMelodyRange").value += "10";
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
  'Kick Beat Down': function(){
    console.log("Synth Beat Down By 10");
    //noteTempo += 125;
    document.getElementById("myKickRange").value -= "10";
  },
  'Kick Beat Up': function(){
    console.log("Synth Beat Up By 10");
    //noteTempo -= 125;
    document.getElementById("myKickRange").value += "10";
  },
  'Cymbals off': function(){
    console.log("Cymbals Off");
    cymbals.volume = 0
  },
  'Cymbals on': function(){
    console.log("Cymbals On");
    cymbals.volume = 1
  },
  'Drums on': function(){
    console.log("Drums on");
    drums.volume = 1
  },
  'Drums off': function(){
    console.log("Drums off");
    drums.volume = 0
  },
  'Bow on': function(){
    console.log("Bow on");
    bow.volume = 1
  },
  'Bow off': function(){
    console.log("Bow off");
    bow.volume = 0
  },
  'Guitar on': function(){
    console.log("Guitar on");
    guitar.volume = 1
  },
  'Guitar off': function(){
    console.log("Guitar off");
    guitar.volume = 0
  },
  'Bass on': function(){
    console.log("Bass on");
    bass.volume = 1
  },
  'Bass off': function(){
    console.log("Bass off");
    bass.volume = 0
  },
  'Stop': function(){
    console.log("Everything is off");
    synth.volume = 0
    kick.volume = 0
    cymbals.volume = 0
    drums.volume = 0
    bow.volume = 0
    guitar.volume = 0
    bass.volume = 0
  },
  'Resume': function(){
    console.log("Everything is on");
    synth.volume = 1
    kick.volume = 1
    cymbals.volume = 1
    drums.volume = 1
    bow.volume = 1
    guitar.volume = 1
    bass.volume = 1
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

  cymbals = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/cymbals.wav'
    }
  });

  drums = new Pizzicato.Sound ({
    source: 'file',
    options: {
    path: 'assets/sounds/drums.wav'
    }
  });

  bow = new Pizzicato.Sound ({
    source: 'file',
    options: {
    path: 'assets/sounds/bowstring.wav'
    }
  });

  guitar = new Pizzicato.Sound ({
    source: 'file',
    options: {
    path: 'assets/sounds/electricguitar.wav'
    }
  });

  bass = new Pizzicato.Sound ({
    source: 'file',
    options: {
    path: 'assets/sounds/bass.wav'
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
  setTimeout(playNote, noteTempo);
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
  // If there's an '*' in there, play the cymbals
  if (symbols.includes('*')) {
    cymbals.play();
  }
  if (symbols.includes('a')) {
    drums.play();
  }
  if (symbols.includes('b')) {
    bow.play();
  }
  if (symbols.includes("o")) {
    guitar.play();
  }
  if (symbols.includes("u")) {
    bass.play();
  }
  // Advance the pattern by a beat
  beat = (beat + 2) % pattern.length;
}

// draw()
//
// Nothing right now. But imagine the possibilities!

function draw() {}
