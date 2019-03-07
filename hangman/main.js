const animals = [
  "alligator",
  "ant",
  "bear",
  "bee",
  "bird",
  "camel",
  "cat",
  "cheetah",
  "chicken",
  "chimpanzee",
  "cow",
  "crocodile",
  "deer",
  "dog",
  "dolphin",
  "duck",
  "eagle",
  "elephant",
  "fish",
  "fly",
  "fox",
  "frog",
  "giraffe",
  "goat",
  "goldfish",
  "hamster",
  "hippopotamus",
  "horse",
  "kangaroo",
  "kitten",
  "lion",
  "lobster",
  "monkey",
  "octopus",
  "owl",
  "panda",
  "pig",
  "puppy",
  "rabbit",
  "rat",
  "scorpion",
  "seal",
  "shark",
  "sheep",
  "snail",
  "snake",
  "spider",
  "squirrel",
  "tiger",
  "turtle",
  "wolf",
  "zebra"
];

const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
const animalLetters = randomAnimal.split("");

const guessedLetters = [];

$(document).ready(() => {
  console.log(animalLetters);

  for (let i = 0; i < animalLetters.length; i++) {
    $(".guess-area").append(
      $('<div class="guess-line" style="border-bottom: solid black 2px"></div>')
    );
  }

  let correctCount = 0;
  // while (correctCount < animalLetters.length) {
    
  // }
  $(".alpha-btn").on("click", event => {
    $(event.currentTarget).addClass("clicked");
    $(event.currentTarget).attr("disabled", true);
    // guessedLetters.push($(event.currentTarget).text())

    const indicesOfLetter = [];
    
    for (let i = 0; i < animalLetters.length; i++) {
      if (animalLetters[i] === $(event.currentTarget).text().toLowerCase()) {
        indicesOfLetter.push(i);
        $(".guess-line").eq(i)[0].innerText = `${animalLetters[i].toUpperCase()}`;   
        correctCount += 1; 
      }    
    };
  });
});
