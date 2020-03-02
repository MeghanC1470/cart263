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
      responsiveVoice.speak("Great to meet you! Today you will be helping our system's algorithm in order to execute proper content for children. All the choices you make will be taken into account and if found acceptable will improve the algorithm to bring safe and entertaining content. Please say yes to begin the test or no if you are not interested.");
    },
    'Yes':  function(){
      responsiveVoice.speak("Great! We will start by showing you a selection of photos from current popular children's videos. Click the button to begin the first phase.")
      addButton("Begin");
      <button onclick="responsiveVoice.speak('This is it');"</button>
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
    responsiveVoice.speak("Say Hello to begin!");
  }

  function addButton(label){
    let $div = $('<div></div>');
    $div.addClass('guess');
    $div.text(label);
    $div.button();
    $div.appendTo('body');
    $div.on('click',handleGuess);
  }
