// Create 3 variables for references to name text input, story generation button, and the story p tag

let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

// Function to generate a random value from an array

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


// Create variables that will act as input to our story generator

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Event listener and partial function definiton

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  // story.textContent = ;
  story.style.visibility = 'visible';

  // Copy storyText so new story generated each time button is pressed
  let newStory = storyText; 

  // Grab a random value from each of the 3 arrays each time
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  let replaced1 = newStory.replace(/:insertx:/g, xItem);
  let replaced2 = replaced1.replace(':inserty:', yItem);
  let replaced3 = replaced2.replace(':insertz:', zItem);

  console.log(replaced3);
}
