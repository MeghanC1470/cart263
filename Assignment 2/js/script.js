"use strict";

/*****************

Raving Redactionist
Meghan Cullen

You are redacting a document, but it keeps becoming unredacted!
Click the secret information to hide it, don't let all the
secrets become revealed!

******************/

// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans
let $spans;
// The total number of secrets
let secretsTotal;
// A place to store the jQuery for the secret spans
let $secrets;
// The counter for how many secrets found successfully
let secretsScore = 0;

// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $('span');
  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);

  // Save the selection of the secret spans
  $secrets = $('.secret');
  // Set a mouseover handler on all the secret spans
  $secrets.on('mouseover',secretFound);
  //Calculate the total number of secrets using .length property
  secretsTotal = $(".secret").length;
}

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
    $secrets.removeClass('revealed');
  }
}

// secretFound()
//
// When a secret span is moused over, it reveals itself as a secret and
// the SecretsFound counter adds one until the total number of secrets
// are found
function secretFound(){
$(this).removeClass('redacted');
$(this).addClass('found');
$(this).off('mouseover');
secretsScore += 1;
$(".Score").text(secretsScore);
}

// A version using anonymous functions if you're interested:

// $(document).ready(function () {
//   $spans = $('span');
//
//   $spans.on('click',function () {
//     $(this).removeClass('revealed');
//     $(this).addClass('redacted');
//   });
//
//   setInterval(function () {
//     $spans.each(function () {
//       let r = Math.random();
//       if (r < REVEAL_POSSIBILITY) {
//         $(this).removeClass('redacted');
//         $(this).addClass('revealed');
//       }
//     });
//   },UPDATE_FREQUENCY);
// });
