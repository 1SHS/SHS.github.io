const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 32 fahrenheit in the city of Norego, so :insertx: went for a run. When they got to :inserty:, they stared in confusion for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 150 pounds, and it was a hot day.';
const insertX = ['Mr N', 'Dean WoodBarks', 'Larry'];
const insertY = ['Spreyg High School', 'the town of north melas'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }
  
  if (city.value !== '') {
    const cityname = city.value;
    newStory = newStory.replaceAll('Norego', cityname);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(150*0.0714286)} stone`;
    const temperature =  `${Math.round((32-94) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('32 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }
  
  }
  {
  story.textContent = newStory;
  story.style.visibility = 'visible';
}