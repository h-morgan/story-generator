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
  
  // Copy storyText so new story generated each time button is pressed
  let newStory = storyText; 

    // Grab a random value from each of the 3 arrays each time
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 * (10* 1/0.7143)) + ' stone';
    let temperature =  Math.round((94 - 32)*5/9) + ' centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;

  // story.textContent = ;
  story.style.visibility = 'visible';

}
