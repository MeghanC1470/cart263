"use strict";

/*****************

Title
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
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
let correctAnimal;
let answers = [];
const NUM_OPTIONS = 6;
let score = 0;

if (annyang) {
  // Let's define a command.
  var commands = {
    'I give up': function() {
      $('.guess').each(function() {
        if ($(this).text() === correctAnimal) {
          $(this).effect('shake');
        }
      });
      setTimeout(newRound, 2000);

    },
    'Say it again': function() {
      sayBackwards(correctAnimal);
    },
    'I think it is *correctAnswer': function(correctAnswer) {
        if (correctAnimal === correctAnswer) {
        $('.guess').remove();
        setTimeout(newRound,100);
        updateScore();
      }}
    };
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }

  $(document).ready(setup);

  function setup() {
    newRound();
  }

  function updateScore() {
    $('#scorenumber').text(score);

  }

  function addButton(label){
    let $div = $('<div></div>');
    $div.addClass('guess');
    $div.text(label);
    $div.button();
    $div.appendTo('body');
    $div.on('click',handleGuess);
  }

  function newRound(){
    $('.guess').remove();
    answers = [];
    for (let i = 0; i < NUM_OPTIONS; i++) {
      let answer = animals[Math.floor(Math.random()* animals.length)];
      addButton(answer);
      answers.push(answer);
    }
    correctAnimal = answers[Math.floor(Math.random()* answers.length)];
    sayBackwards(correctAnimal);
    updateScore();
  }

  function handleGuess(){
    if ($(this).text() === correctAnimal) {
      $('.guess').remove();
      setTimeout(newRound,100);
      score = score + 1;
      updateScore();
    }
    else {
      $(this).effect('shake');
      sayBackwards(correctAnimal);
      score = 0;
      updateScore();
    }
  }

  function sayBackwards(text){
    let backwardsText = text.split('').reverse().join('');
    let option = {
      rate: Math.random(),
      pitch: Math.random()
    };
    responsiveVoice.speak(backwardsText);
  }
