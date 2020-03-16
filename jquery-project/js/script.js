"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);


function setup() {
$.getJSON("data/data2.json")
.done(dataLoaded)
.fail(dataNotLoaded);
};

function dataLoaded(data){
console.log(data);

let randomColor = getRandomArrayElement(data.colors);
console.log(randomColor);
let randomCondiment = getRandomArrayElement(data.condiments);
console.log(randomCondiment);
let verb = "is";
if (randomCondiment.charAt(randomCondiment.length - 1) === "s") {
  verb = "are";
  }
console.log(verb);
let randomCat = getRandomArrayElement(data.cats);
console.log(randomCat);
let noun = 'a';
let vowelCheck = randomCat.charAt(0);
if (vowelCheck === 'A' ||
vowelCheck === 'E' ||
vowelCheck === 'I' ||
vowelCheck === 'O' ||
vowelCheck === 'U') {
noun = 'an';
}
let randomRoom = getRandomArrayElement(data.rooms);
console.log(randomRoom);
let randomIsms = getRandomArrayElement(data.isms);
console.log(randomIsms);


let randomDescription = `${randomColor} ${randomCondiment} ${verb} like a ${randomCat} in a ${randomRoom}. You feel like ${randomIsms}`
$('body').append(randomDescription);
}



function dataNotLoaded(request, text, error){
  console.error(error);
}

function getRandomArrayElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
