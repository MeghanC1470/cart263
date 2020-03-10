"use strict";

/*****************

Title
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let tarot;
function setup() {}
function mousePressed() {
  loadJSON("data/tarot_interpretations.json", tarotLoaded);
}
function tarotLoaded(data) {
  tarot = data.tarot_interpretations; // We only want the actual cards
  for (let i = 0; i < tarot.length; i++) {
    console.log(tarot[i].name);
  }
}
