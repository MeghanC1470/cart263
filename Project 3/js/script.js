"use strict";

/*****************

Rockband
by Meghan Cullen

Create a harmonious song using annyang to command the computer to
play music tracks at certain speeds

******************/

// Create one note
let noteTempo = 850;
// Create beats for each time of sound
let beatTempo = 750;
let kickTempo = 650;
let cymbalsTempo = 550;
let drumsTempo = 450;
let guitarTempo = 350;
let bassTempo = 250;
// Attack time for a note (in seconds)
const ATTACK = 0.1;
// Release time for a note (in seconds)
const RELEASE = 0.1;

// Create an array of the possible notes to play as frequencies (in Hz) for the Melody Track
// A Major =  A, B, C♯, D, E, F♯, and G♯
// We can get the frequencies of these notes from THE INTERNET, e.g.
// http://pages.mtu.edu/~suits/notefreqs.html
let frequencies = [
  440, 493.16, 261.63, 293.66, 329.63, 349.23, 392
];
// The synth
let synth;
let synthInterval;
// The sound files
let kick;
let cymbals;
let drums;
let guitar;
let bass;
// Our drum pattern
// Each array element is one beat and has a string with each
// drum to play for that beat
// x = kick, * = cymbals, a = drums, o = guitar, u = bass
let pattern = ['uaxo*', '*u', '*x', 'abou', '*x', 'xu', 'aox', '*u', 'b'];

// Which beat of the pattern we're at right now
let beat = 0;
// When a symbol is called on the pattern, it will follow the beat
let symbols = pattern[beat];

// annyang
//
// Here is where the vocal commands are set up that will start, stop, or change the tracks
if (annyang) {
  //Let's define a command.
  var commands = {
    //'Start' command will begin all the tracks
    'Start': function() {
      console.log("Starting Beat");
      // setTimeout will allow a later command to alter a delay or enhance the speed of the tracks
      synthInterval = setTimeout(playNote, noteTempo);
      setTimeout(playBeat, beatTempo);
      setTimeout(playKick, kickTempo);
      setTimeout(playCymbals, cymbalsTempo);
      setTimeout(playDrums, drumsTempo);
      setTimeout(playGuitar, guitarTempo);
      setTimeout(playBass, bassTempo);
    },
    //'Melody off' will turn of the volume of the Melody track
    'Melody off': function() {
      console.log("Synth Off");
      synth.volume = 0;
    },
    //'Melody on' will turn only the Melody track back on
    'Melody on': function() {
      console.log("Synth On");
      synth.volume = 1;
    },
    //'Melody Beat Down' will slow the tempo of the Melody track
    'Melody Beat Down': function() {
      console.log("Synth Beat Down By 10");
      //Based on the Melody's tempo (750), we make the increased note tempo the answer of 750 divded by 10,
      //as there are 10 levels to the slider. This will prevent it from going into the negative.
      noteTempo += 75;
      // On the Melody slider, we make it go down by 10 by creating a new newValue
      // This will allow the slider to not add or subtract 10 each time, which will confuse the slider
      var x = document.getElementById("myMelodyRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myMelodyRange").value = newValue;
    },
    //Like 'Melody Beat Down', we increase the tempo of the Melody and make it faster
    'Melody Beat Up': function() {
      console.log("Synth Beat Up By 10");
      noteTempo -= 75;
      //Unlike 'Melody Beat Down', the slider will go up by 10 each time the command is called
      var x = document.getElementById("myMelodyRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myMelodyRange").value = newValue;
    },
    //The same rules apply to all Commands
    // Kick Commands
    'Kick off': function() {
      console.log("Kick Off");
      kick.volume = 0
    },
    'Kick on': function() {
      console.log("Kick On");
      kick.volume = 1;
    },
    'Kick Beat Down': function() {
      console.log("Kick Beat Down By 10");
      kickTempo += 65;
      var x = document.getElementById("myKickRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myKickRange").value = newValue;
    },
    'Kick Beat Up': function() {
      console.log("Kick Beat Up By 10");
      kickTempo -= 65;
      var x = document.getElementById("myKickRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myKickRange").value = newValue;
    },
    //Cymbals Commands
    'Cymbals off': function() {
      console.log("Cymbals Off");
      cymbals.volume = 0;
    },
    'Cymbals on': function() {
      console.log("Cymbals On");
      cymbals.volume = 1;
    },
    'Cymbals Beat Down': function() {
      console.log("Cymbals Beat Down By 10");
      cymbalsTempo += 55;
      var x = document.getElementById("myCymbalsRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myCymbalsRange").value = newValue;
    },
    'Cymbals Beat Up': function() {
      console.log("Cymbals Beat Up By 10");
      cymbalsTempo -= 55;
      var x = document.getElementById("myCymbalsRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myCymbalsRange").value = newValue;
    },
    //Drum Commands
    'Drums off': function() {
      console.log("Drums off");
      drums.volume = 0;
    },
    'Drums on': function() {
      console.log("Drums on");
      drums.volume = 1;
    },
    'Drums Beat Down': function() {
      console.log("Drums Beat Down By 10");
      drumsTempo += 45;
      var x = document.getElementById("myDrumsRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myDrumsRange").value = newValue;
    },
    'Drums Beat Up': function() {
      console.log("Drums Beat Up By 10");
      drumsTempo -= 45;
      var x = document.getElementById("myDrumsRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myDrumsRange").value = newValue;
    },
    //Guitar Commands
    'Guitar off': function() {
      console.log("Guitar off");
      guitar.volume = 0;
    },
    'Guitar on': function() {
      console.log("Guitar on");
      guitar.volume = 1;
    },
    'Guitar Beat Down': function() {
      console.log("Guitar Beat Down By 10");
      guitarTempo += 35;
      var x = document.getElementById("myGuitarRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myGuitarRange").value = newValue;
    },
    'Guitar Beat Up': function() {
      console.log("Guitar Beat Up By 10");
      guitarTempo -= 35;
      var x = document.getElementById("myGuitarRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myGuitarRange").value = newValue;
    },
    //Bass Commands
    'Bass off': function() {
      console.log("Bass off");
      bass.volume = 0;
    },
    'Bass on': function() {
      console.log("Bass on");
      bass.volume = 1;
    },
    'Bass Beat Down': function() {
      console.log("Bass Beat Down By 10");
      bassTempo += 25;
      var x = document.getElementById("myBassRange");
      var newValue = parseInt(x.value) - 10;
      document.getElementById("myBassRange").value = newValue;
    },
    'Bass Beat Up': function() {
      console.log("Bass Beat Up By 10");
      bassTempo -= 25;
      var x = document.getElementById("myBassRange");
      var newValue = parseInt(x.value) + 10;
      document.getElementById("myBassRange").value = newValue;
    },
    //'Stop' will turn off the volume of all tracks
    'Stop': function() {
      console.log("Everything is off");
      synth.volume = 0;
      kick.volume = 0;
      cymbals.volume = 0;
      drums.volume = 0;
      guitar.volume = 0;
      bass.volume = 0;
    },
    //'Resume' will continue the volume of all the tracks
    'Resume': function() {
      console.log("Everything is on");
      synth.volume = 1;
      kick.volume = 1;
      cymbals.volume = 1;
      drums.volume = 1;
      guitar.volume = 1;
      bass.volume = 1;
    }
  };

  //Add our commands to annyang
  annyang.addCommands(commands);

  //Start listening.
  annyang.start();
};

$(document).ready(setup);

// function preload
//
// In this case, function preload will turn off the interactability of the sliders
// they are only meant to show how far someone can go on the slider.
function preload() {
  document.getElementById("myMelodyRange").disabled = true;
  document.getElementById("myKickRange").disabled = true;
  document.getElementById("myCymbalsRange").disabled = true;
  document.getElementById("myDrumsRange").disabled = true;
  document.getElementById("myGuitarRange").disabled = true;
  document.getElementById("myBassRange").disabled = true;
}

// function setup
//
// Will set up the wav files for the sounds that will be used
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

  // Load the sounds as wav files
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
      path: 'assets/sounds/guitarstring.wav'
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
// Chooses a random frequency from the array and assigns it to the synth
function playNote() {
  // Pick a random frequency from the array
  let frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
  // Set the synth's frequency
  synth.frequency = frequency;
  // If it's not already playing, play the synth
  synth.play();
  // Set a delay that can be altered using annyang commands
  setTimeout(playNote, noteTempo);
}

// playKick
//
// Assigns a sound to a symbol, along with a delay
function playKick() {
  //Assign the symbol
  if (symbols.includes('x')) {
    //When the symbol is called, play the sound
    kick.play();
    // Set a delay that can be altered using annyang commands
    setTimeout(playKick, kickTempo);
  }
}

// playCymbals
function playCymbals() {
  if (symbols.includes('*')) {
    cymbals.play();
    setTimeout(playCymbals, cymbalsTempo);
  }
}

// playDrums
function playDrums() {
  if (symbols.includes('a')) {
    drums.play();
    setTimeout(playDrums, drumsTempo);
  }
}

// playGuitar
function playGuitar() {
  if (symbols.includes("o")) {
    guitar.play();
    setTimeout(playGuitar, guitarTempo);
  }
}

// playBass
function playBass() {
  if (symbols.includes('u')) {
    bass.play();
    setTimeout(playBass, bassTempo);
  }
}
// playBeat()
//
// Checks the string representing the beat for the tracks
function playBeat() {
  // Advance the pattern by a beat
  beat = (beat + 2) % pattern.length;
}
