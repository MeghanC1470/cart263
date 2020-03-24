"use strict";

/*****************

Name The Animals
Meghan Cullen

In this project, you will be given a set of animals. Someone will say one animal's
name backwards, and it's up to you to figure out which one is the correct animal.

******************/
//First, we set up an array of all out animals
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
]

// We define the correct animal
let correctAnimal;
// Create an empty array for the answers
let answers = [];
// Create the number of available guesses
const NUM_OPTIONS = 6;
// Set the score to zero
let score = 0;

// annyang
//
// Annyang will allow our computer to listen to a certain phrase and follow the
// instructions laid out once it hears that phrase.
if (annyang) {
// We define a variable of commands, first "I give up"
  var commands = {
    'I give up': function() {
// After "I give up" is said, the program will identify the right answer and make it shake
      $('.guess').each(function() {
        if ($(this).text() === correctAnimal) {
          $(this).effect('shake');
// Additionally, a point will be lost
          score -= 1;
        }
      });
// A new round will begin after 2 seconds
      setTimeout(newRound, 2000);
// Next command; "Say it again" - this will make the system repeat the mystery animal name
    },
    'Say it again': function() {
      sayBackwards(correctAnimal);
    },
// Final Command: "I think it is *correctAnswer". If the correct answer is chosen,
// the old guesses will be removed and a new round will start
    'I think it is *correctAnswer': function(correctAnswer) {
        if (correctAnimal === correctAnswer) {
        $('.guess').remove();
        setTimeout(newRound,100);
// A point will be added for each correct answer.
        score += 1;
      }}
    };
// Add the commands to the annyang script
    annyang.addCommands(commands);

// Annyang will start at the beginning of the program.
    annyang.start();
  }

  $(document).ready(setup);

// function setup
//
// Sets up a new fresh round for the player to begin with
  function setup() {
    newRound();
  }

// function updateScore
//
// Updates the score throughout the game
  function updateScore() {
    $('#scorenumber').text(score);
  }

// function addButton
//
// Adds the buttons that the players will interact with through voice and through clicking
  function addButton(label){
    let $div = $('<div></div>');
    $div.addClass('guess');
    $div.text(label);
    $div.button();
    $div.appendTo('body');
    $div.on('click',handleGuess);
  }

// function newRound
//
// This function holds the blueprints for creating a new round after each correct guess
// or when the player has given up
  function newRound(){
// First we remove whatever guesses are left after the previous round
    $('.guess').remove();
// Call the answers array
    answers = [];
// Use Math.random to select a random answer each time
    for (let i = 0; i < NUM_OPTIONS; i++) {
      let answer = animals[Math.floor(Math.random()* animals.length)];
// Add the correct animal button
      addButton(answer);
      answers.push(answer);
    }
// Link the correct animal to the called answer
    correctAnimal = answers[Math.floor(Math.random()* answers.length)];
// Make the system say the correct animal name backwards
    sayBackwards(correctAnimal);
// Update the score
    updateScore();
  }

// function handleGuess
//
// This function will handle the other incorrect guesses
  function handleGuess(){
    if ($(this).text() === correctAnimal) {
// If the answer is chosen, remove the entire line of guesses
      $('.guess').remove();
// Start a new round
      setTimeout(newRound,100);
// Update the score
      score = score + 1;
      updateScore();
    }
    else {
// If the incorrect answer is chosen, that chosen button will shake
      $(this).effect('shake');
// Repeat the correct answer
      sayBackwards(correctAnimal);
// Don't reward the player for a bad answer
      score = 0;
      updateScore();
    }
  }

// function sayBackwards
//
// This function will call upon responsiveVoice to say the correct answer backwards
  function sayBackwards(text){
// Set up how the text will be - reversed
    let backwardsText = text.split('').reverse().join('');
// Set it at a random rate and pitch
    let option = {
      rate: Math.random(),
      pitch: Math.random()
    };
// Activate the responsive voice to read the text.
    responsiveVoice.speak(backwardsText);
  }
