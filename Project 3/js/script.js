"use strict";

/*****************

Project 3
Meghan Cullen

GOAL: CREATE A SONG FROM A JUMBLE OF SOUNDS THROUGH VOICE COMMANDS AND BUTTONS

******************/

// Time for one note
let noteTempo = 850;
// Time for one beat
let drumTempo = 250;
let kickTempo = 100;
let cymbalsTempo = 250;
let drumsTempo = 200;
let guitarTempo = 250;
let bassTempo = 1000;
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
let guitar
let bass
// Our drum pattern
// Each array element is one beat and has a string with each
// drum to play for that beat
// x = kick, o = snare, * = cymbalss
let pattern = ['uax', '*u', '*x', 'abou', 'x', 'xu', 'aox', '*u', 'b'];
// Which beat of the pattern we're at right now
let beat = 0;
let symbols = pattern[beat];

if (annyang) {
  //Let's define a command.
  var commands = {
    'Start': function() {
      console.log("Starting Beat");
      synthInterval = setTimeout(playNote, noteTempo);
      setTimeout(playDrum, drumTempo);
      setTimeout(playKick, kickTempo);
      setTimeout(playCymbals, cymbalsTempo);
      setTimeout(playDrums, drumsTempo);
      setTimeout(playGuitar, guitarTempo);
      setTimeout(playBass, bassTempo);
    },
    'Melody off': function() {
      console.log("Synth Off");
      synth.volume = 0
    },
    'Melody on': function() {
      console.log("Synth On");
      synth.volume = 1
    },
    'Melody Beat Down': function() {
      console.log("Synth Beat Down By 10");
      noteTempo += 85;
      var x = document.getElementById("myMelodyRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myMelodyRange").value = newValue;
    },
    'Melody Beat Up': function() {
      console.log("Synth Beat Up By 10");
      noteTempo -= 85;
      var x = document.getElementById("myMelodyRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myMelodyRange").value = newValue;
    },
    //Change synth
    'Kick off': function() {
      console.log("Kick Off");
      kick.volume = 0
    },
    'Kick on': function() {
      console.log("Kick On");
      kick.volume = 1
    },
    'Kick Beat Down': function() {
      console.log("Kick Beat Down By 10");
      kickTempo += 10;
      var x = document.getElementById("myKickRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myKickRange").value = newValue;
    },
    'Kick Beat Up': function() {
      console.log("Kick Beat Up By 10");
      kickTempo -= 10;
      var x = document.getElementById("myKickRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myKickRange").value = newValue;
    },
    'Cymbals off': function() {
      console.log("Cymbals Off");
      cymbals.volume = 0
    },
    'Cymbals on': function() {
      console.log("Cymbals On");
      cymbals.volume = 1
    },
    'Cymbals Beat Down': function() {
      console.log("Cymbals Beat Down By 10");
      cymbalsTempo += 15;
      var x = document.getElementById("myCymbalsRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myCymbalsRange").value = newValue;
    },
    'Cymbals Beat Up': function() {
      console.log("Cymbals Beat Up By 10");
      cymbalsTempo -= 15;
      var x = document.getElementById("myCymbalsRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myCymbalsRange").value = newValue;
    },
    'Drums on': function() {
      console.log("Drums on");
      drums.volume = 1
    },
    'Drums off': function() {
      console.log("Drums off");
      drums.volume = 0
    },
    'Drums Beat Down': function() {
      console.log("Drums Beat Down By 10");
      drumsTempo += 20;
      var x = document.getElementById("myDrumsRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myDrumsRange").value = newValue;
    },
    'Drums Beat Up': function() {
      console.log("Drums Beat Up By 10");
      drumsTempo -= 20;
      var x = document.getElementById("myDrumsRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myDrumsRange").value = newValue;
    },
    'Guitar on': function() {
      console.log("Guitar on");
      guitar.volume = 1
    },
    'Guitar off': function() {
      console.log("Guitar off");
      guitar.volume = 0
    },
    'Guitar Beat Down': function() {
      console.log("Guitar Beat Down By 10");
      guitarTempo += 20;
      var x = document.getElementById("myGuitarRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myGuitarRange").value = newValue;
    },
    'Guitar Beat Up': function() {
      console.log("Guitar Beat Up By 10");
      guitarTempo -= 20;
      var x = document.getElementById("myGuitarRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myGuitarRange").value = newValue;
    },
    'Bass on': function() {
      console.log("Bass on");
      bass.volume = 1
    },
    'Bass off': function() {
      console.log("Bass off");
      bass.volume = 0
    },
    'Bass Beat Down': function() {
      console.log("Bass Beat Down By 10");
      bassTempo += 200;
      var x = document.getElementById("myBassRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myBassRange").value = newValue;
    },
    'Bass Beat Up': function() {
      console.log("Bass Beat Up By 10");
      bassTempo -= 200;
      var x = document.getElementById("myBassRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myBassRange").value = newValue;
    },
    'Stop': function() {
      console.log("Everything is off");
      synth.volume = 0
      kick.volume = 0
      cymbals.volume = 0
      drums.volume = 0
      guitar.volume = 0
      bass.volume = 0
    },
    'Resume': function() {
      console.log("Everything is on");
      synth.volume = 1
      kick.volume = 1
      cymbals.volume = 1
      drums.volume = 1
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

function preload() {
  document.getElementById("myMelodyRange").disabled = true;
  document.getElementById("myKickRange").disabled = true;
  document.getElementById("myCymbalsRange").disabled = true;
  document.getElementById("myDrumsRange").disabled = true;
  document.getElementById("myGuitarRange").disabled = true;
  document.getElementById("myBassRange").disabled = true;
}

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

  drums = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/drums.wav'
    }
  });

  guitar = new Pizzicato.Sound({
    source: 'file',
    options: {
      path: 'assets/sounds/electricguitar.wav'
    }
  });

  bass = new Pizzicato.Sound({
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

function playKick() {
  if (symbols.includes('x')) {
    kick.play();
    setTimeout(playKick, kickTempo);
    console.log("we also be playin");
  }
}

function playCymbals() {
  if (symbols.includes('*')) {
    cymbals.play();
    setTimeout(playCymbals, cymbalsTempo);
    console.log("we be playin");
  }
}

function playDrums() {
  if (symbols.includes('a')) {
    drums.play();
    setTimeout(playDrums, drumsTempo);
  }
}

function playGuitar() {
  if (symbols.includes("o")) {
    guitar.play();
    setTimeout(playGuitar, guitarTempo);
  }
}

function playBass() {
  if (symbols.includes('u')) {
    bass.play();
    setTimeout(playBass, bassTempo);
  }
}
// playDrum()
//
// Checks the string representing the drums for the current beat
// and plays the appropriate sounds
function playDrum() {
  // Advance the pattern by a beat
  beat = (beat + 2) % pattern.length;
}


// draw()
//
// Nothing right now. But imagine the possibilities!

function draw() {}
