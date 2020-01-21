"use strict";

/*****************

Title
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);
  let $divs;

function setup() {
  $divs = $('span');
  $divs.readacted;
  setInterval(update,500);
  $divs.on('click', spanClicked);
}

function updateSpan(){
  console.log("Update span!");
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass('readacted');
    $(this).addClass('revealed');
  }
}

function update(){
console.log("update()");
$divs.each(updateSpan);
}

function spanClicked(){
  $(this).addClass('readacted');
  $(this).removeClass('revealed');

}
