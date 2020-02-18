"use strict";

/*****************

Title
Meghan Cullen

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() { console.log('Hello world!'); }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
