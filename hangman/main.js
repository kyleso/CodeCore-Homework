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

// Choose random animal from array of animals
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
// Split random animal word into array
const animalLetters = randomAnimal.split("");

$(document).ready(() => {

  // Create divs equal to the length of the random animal word that can have the correct
  // letter appended to them
  for (let i = 0; i < animalLetters.length; i++) {
    $(".guess-area").append(
      $('<div class="guess-line" style="border-bottom: solid black 2px"></div>')
    );
  }

  let correctCount = 0;
  let wrongCount = 0;
  let imageCounter = 1;
  
  $(".alpha-btn").on("click", event => {
    $(event.currentTarget).attr("disabled", true);

    // Check if guess is correct
    
    for (let i = 0; i < animalLetters.length; i++) {
      if (animalLetters[i] === $(event.currentTarget).text().toLowerCase()) {
        $(event.currentTarget).removeClass('in-play');
        $(event.currentTarget).addClass("correct");
        $(".guess-line").eq(i)[0].innerText = `${animalLetters[i].toUpperCase()}`;   
        correctCount += 1; 
      }   
    };

    // Check if guess is wrong
    if (!animalLetters.includes($(event.currentTarget).text().toLowerCase())) {
      $(event.currentTarget).removeClass('in-play');
      $(event.currentTarget).addClass("incorrect");
      wrongCount += 1;
      imageCounter += 1;
      $('.img').attr('src', `./images/0${imageCounter}-gallows.jpg`);
    }

    // End Game Conditions
    if (wrongCount === 6) {
      $('.end-status').append(`<h3>YOU LOSE!  Secret word: ${randomAnimal}</h3>`);
      gameFinished();
    }
    if (correctCount === animalLetters.length) {
      $('.end-status').append('<h2>YOU WIN!</h2>');
      gameFinished();
    }

    // Game-end function
    function gameFinished() {
      $('.category').remove();
      $('.alpha-btn').attr('disabled', true);
      $('.alpha-btn').removeClass('in-play');
      $('.end-status').append('<button class="play-again-btn" onClick="window.location.reload()">Play Again?</button>')
    }
  });
});


