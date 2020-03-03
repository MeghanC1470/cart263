"use strict";

/*****************

Name The Animals
Meghan Cullen

In this project, you will be given a set of animals. Someone will say one animal's
name backwards, and it's up to you to figure out which one is the correct animal.

******************/
let p1
let p2
let p3
let p4
let p5
let p6
let p7
let p8
let p9
let p10
let p11
let p12
let p13

let voice = 'UK English Female';

let voiceParameters = {
  pitch: 0.1,
  rate: 0.9
};

// annyang
//
// Annyang will allow our computer to listen to a certain phrase and follow the
// instructions laid out once it hears that phrase.
if (annyang) {
  // Let's define a command.
  var commands = {
    'Hello': function(){
      responsiveVoice.speak("Great to meet you! Today you will be helping our system's algorithm in order to execute proper content for children. All the choices you make will be taken into account and if found acceptable will improve the algorithm to bring safe and entertaining content. Please say Start to begin the test.");
    },
    'Start':  function(){
      responsiveVoice.speak("Great! We will start by showing you a selection of photos from current popular children's videos. Click the corresponding button to begin the corresponding phases.")
      addButton("Begin Phase 1", phase1);
    }
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

  function addButton(label,imageFunction){
    let $div = $('<div></div>');
    $div.addClass('button');
    $div.text(label);
    $div.button();
    $div.appendTo('h1');
    $div.on('click', imageFunction);
  }

  function phase1(){
    responsiveVoice.speak("Please click Yes if you think this content is appropriate, or no if you think otherwise")
$('<img src="assets/images/P1.png">').appendTo("h2");
$('<img src="assets/images/P2.png">').appendTo("h2");
$('<img src="assets/images/P3.png">').appendTo("h2");
addButton("Yes", goToPhase2);
addButton("No", goToPhase2);
  }

  function goToPhase2(){
    responsiveVoice.speak("Hmm, interesting choice");
    $("img").remove();
    $(".button").remove();
    addButton("Begin Phase 2", phase2);
  }

  function phase2(){
  $('<img src="assets/images/P4.png">').appendTo("h2");
  $('<img src="assets/images/P5.png">').appendTo("h2");
  $('<img src="assets/images/P6.png">').appendTo("h2");
  addButton("Yes", goToPhase3);
  addButton("No", goToPhase3);
  }

  function goToPhase3(){
    responsiveVoice.speak("Your choice is rather curious");
    $("img").remove();
    $(".button").remove();
    addButton("Begin Phase 3", phase3);
  }


  function phase3(){
  $('<img src="assets/images/P7.png">').appendTo("h2");
  $('<img src="assets/images/P8.png">').appendTo("h2");
  $('<img src="assets/images/P9.png">').appendTo("h2");
  addButton("Yes", goToPhase4);
  addButton("No", goToPhase4);
  }

  function goToPhase4(){
    responsiveVoice.speak("Your choice is rather curious");
    $("img").remove();
    $(".button").remove();
    addButton("Begin Phase 4", phase4);
  }

  function phase4(){
  $('<img src="assets/images/P10.png">').appendTo("h2");
  $('<img src="assets/images/P11.png">').appendTo("h2");
  $('<img src="assets/images/P12.png">').appendTo("h2");

  }
