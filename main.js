// Create 3 variables for name text input, story generation button, and the story p tag

let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

// Function to generate a random value from an array

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

