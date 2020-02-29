"use strict";

/*****************

Name The Animals
Meghan Cullen

In this project, you will be given a set of animals. Someone will say one animal's
name backwards, and it's up to you to figure out which one is the correct animal.

******************/

// annyang
//
// Annyang will allow our computer to listen to a certain phrase and follow the
// instructions laid out once it hears that phrase.
if (annyang) {
  // Let's define a command.
  var commands = {
    'Hello': function(){
      responsiveVoice.speak("Great to meet you! Today we will be performing a small survey. Will you help us? Please say yes or no");
    },
    'Yes':  function(){
      responsiveVoice.speak("Great!")
    },
    'No': function(){
      responsiveVoice.speak("We understand. Have a good day.")
    },
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

  $(document).ready(setup);

// function setup
//
// Sets up a new fresh round for the player to begin with
  function setup() {
    responsiveVoice.speak("Say Hello!");
  }

  function hello() {
    responsiveVoice.speak("Great to meet you!");
  }
