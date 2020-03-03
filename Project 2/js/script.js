"use strict";

/*****************

Help Make the Internet Safe!
Meghan Cullen

In this project, you will be given a set of animals. Someone will say one animal's
name backwards, and it's up to you to figure out which one is the correct animal.

******************/
//Create the images
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

//annyang
//
//Annyang will allow our computer to listen to a certain phrase and follow the
//instructions laid out once it hears that phrase.
  if (annyang) {
//Let's define a command.
  var commands = {
    'Hello': function(){
//The computer will respond with its own response, introducing them to the task
      responsiveVoice.speak("Great to meet you! Today you will be helping our system's algorithm in order to execute proper content for children. All the choices you make will be taken into account and if found acceptable will improve the algorithm to bring safe and entertaining content. Please say Start to begin the test.");
    },
//Set up a new response
    'Start':  function(){
      responsiveVoice.speak("Great! We will start by showing you a selection of photos from current popular children's videos. Click the corresponding button to begin the corresponding phases.")
//Add a button to begin Phase 1
      addButton("Begin Phase 1", phase1);
    }
  };

//Add our commands to annyang
  annyang.addCommands(commands);

//Start listening.
  annyang.start();
  };

$(document).ready(setup);

//function setup
//
//Sets up a voice that will greet the player
  function setup() {
    responsiveVoice.speak("Say Hello to begin!");
  };

//function addButton
//
//Sets up the buttons that the players will use
  function addButton(label,imageFunction){
    let $div = $('<div></div>');
    $div.addClass('button');
//Add text to the button
    $div.text(label);
//Make it an actual button
    $div.button();
//Append the button to a certain spot on the site
    $div.appendTo('h1');
//On click, the button will activate the selected function
    $div.on('click', imageFunction);
  };

//function phase1
//
//This function will hold our images and a response when the "Begin Phase 1" button is selected
  function phase1(){
//Set up the voice to explain the task
    responsiveVoice.speak("Please click Yes if you think this content is appropriate, or no if you think otherwise")
//Activate the images and append them below the button
    $('<img src="assets/images/P1.png">').appendTo("h2");
    $('<img src="assets/images/P2.png">').appendTo("h2");
    $('<img src="assets/images/P3.png">').appendTo("h2");
//Add a yes or no button that, when clicked, activate Phase 2
    addButton("Yes", goToPhase2);
    addButton("No", goToPhase2);
  };

//function goToPhase2
//
//This function will help connect Phase 1 to Phase 2 when Phase 1 is completed
  function goToPhase2(){
//Create a small response to the choice the player made
    responsiveVoice.speak("Hmm, interesting choice");
//Remove all the images and previous buttons
    $("img").remove();
    $(".button").remove();
//Add the "Begin Phase 2" button that, when clicked, begins Phase 2
    addButton("Begin Phase 2", phase2);
  };

//function phase2
//
//This function follows the same format as Phase 1
  function phase2(){
    $('<img src="assets/images/P4.png">').appendTo("h2");
    $('<img src="assets/images/P5.png">').appendTo("h2");
    $('<img src="assets/images/P6.png">').appendTo("h2");
    addButton("Yes", goToPhase3);
    addButton("No", goToPhase3);
  };

//function goToPhase3
//
//Similar to goToPhase2, connects Phase 2 to Phase 3
  function goToPhase3(){
    responsiveVoice.speak("Your choice is rather curious");
    $("img").remove();
    $(".button").remove();
    addButton("Begin Phase 3", phase3);
  };

//function phase3
//
//Follows the same format as Phase 1 and Phase 2
  function phase3(){
    $('<img src="assets/images/P7.png">').appendTo("h2");
    $('<img src="assets/images/P8.png">').appendTo("h2");
    $('<img src="assets/images/P9.png">').appendTo("h2");
    addButton("Yes", goToPhase4);
    addButton("No", goToPhase4);
  };

//function goToPhase4
//
//Connect Phase 3 to Phase 4
  function goToPhase4(){
    responsiveVoice.speak("The test is nearly complete");
    $("img").remove();
    $(".button").remove();
    addButton("Begin Phase 4", phase4);
  };

//function phase4
//
//Follows the same format as Phase 1, 2, and 3
  function phase4(){
    $('<img src="assets/images/P10.png">').appendTo("h2");
    $('<img src="assets/images/P11.png">').appendTo("h2");
    $('<img src="assets/images/P12.png">').appendTo("h2");
//This time, we make a button that, when clicked, brings the player to the ending
    addButton("Yes", goToEnding);
    addButton("No", goToEnding);
  };

//function goToEnding
//
//This function sets up a responsive voice that invites you to see the results and how your choices helped the system
  function goToEnding(){
    responsiveVoice.speak("Thank you. We have recieved your data and we have taken your choices into account. Click below to see how you've helped us improve children's content and made the internet safer.");
//Remove the images and buttons
    $("img").remove();
    $(".button").remove();
//Add a button to see the results that, when clicked, brings the player to the ending
    addButton("See the Results!", seeResults);
  };

//function seeResults
//
//This function allows the player to see the "results" of their choices
  function seeResults(){
//Set up a voice response
    responsiveVoice.speak("After carefully reviewing your choices, the system has decided that all your choices were unacceptable. Our database shows that the videos selected for this test have gained millions of positive reviews. Thus, there is no reason for any change at all. Thank you for helping make the internet a safer place for children. This concludes the test.")
//Remove the buttons
    $(".button").remove();
//Set up the images
    $('<img src="assets/images/giphy.gif">').appendTo("h2");
    $('<img src="assets/images/giphy.gif">').appendTo("h2");
    $('<img src="assets/images/giphy.gif">').appendTo("h2");
  };
