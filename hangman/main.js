const animals = [
  "aardvark",
  "albatross",
  "alligator",
  "anteater",
  "antelope",
  "badger",
  "bandicoot",
  "bear",
  "beetle",
  "bird",
  "buffalo",
  "butterfly",
  "caiman",
  "camel",
  "capybara",
  "cassowary",
  "cat",
  "chameleon",
  "cheetah",
  "chicken",
  "chimpanzee",
  "cougar",
  "cow",
  "crocodile",
  "deer",
  "dog",
  "dolphin",
  "donkey",
  "duck",
  "eagle",
  "elephant",
  "falcon",
  "fish",
  "flamingo",
  "fox",
  "frog",
  "gecko",
  "giraffe",
  "goat",
  "goldfish",
  "gorilla",
  "grasshopper",
  "grizzly",
  "hamster",
  "hawk",
  "hedgehog",
  "hippopotamus",
  "horse",
  "hummingbird",
  "hyena",
  "ibis",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "jellyfish",
  "kangaroo",
  "kitten",
  "koala",
  "leopard",
  "lion",
  "lobster",
  "lynx",
  "magpie",
  "manatee",
  "meerkat",
  "mongoose",
  "monkey",
  "moose",
  "narwhal",
  "nightingale",
  "ocelot",
  "octopus",
  "opossum",
  "orca",
  "ostrich",
  "owl",
  "oyster",
  "panda",
  "panther",
  "parrot",
  "peacock",
  "pelican",
  "penguin",
  "pheasant",
  "pig",
  "piranha",
  "platypus",
  "porcupine",
  "puppy",
  "python",
  "quail",
  "rabbit",
  "raccoon",
  "rat",
  "raven",
  "reindeer",
  "rhinoceros",
  "salamander",
  "scorpion",
  "seal",
  "shark",
  "sheep",
  "shrimp",
  "skunk",
  "snail",
  "snake",
  "spider",
  "squirrel",
  "tiger",
  "tortoise",
  "turtle",
  "vulture",
  "walrus",
  "weasel",
  "wildebeest",
  "wolf",
  "wolverine",
  "wombat",
  "zebra"
];

// Choose random animal from array of animals
const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
// Split random animal word into array
const animalLetters = randomAnimal.split("");

$(document).ready(() => {
  console.log(animalLetters);
  let correctCount = 0;
  let wrongCount = 0;
  let gameOver = false;
  const keysPressed = [];

  const winSound = new Audio("./sounds/win.wav");
  const loseSound = new Audio("./sounds/lose.wav");

  // Create divs equal to the length of the random animal word that can have the correct
  // letter appended to them
  for (let i = 0; i < animalLetters.length; i++) {
    $(".guess-area").append(
      $('<div class="guess-line" style="border-bottom: solid black 2px"></div>')
    );
  }

  // Game-end function
  function gameFinished() {
    $(".category").remove();
    $(".alpha-btn").attr("disabled", true);
    $(".alpha-btn").removeClass("in-play");
    $(".end-status").append(
      '<button class="play-again-btn" onClick="window.location.reload()">click here or hit ENTER to play again</button>'
    );
    gameOver = true;
  }

  // End Game Condition check
  function gameEndChecker() {
    if (wrongCount === 6) {
      $(".end-status").append(
        `<h3>YOU LOSE!  The secret word is:  ${randomAnimal}</h3>`
      );
      gameFinished();
      loseSound.play();
      // alert(`YOU LOSE!  The secret word is:  ${randomAnimal}`)
    }
    if (correctCount === animalLetters.length) {
      $(".end-status").append("<h2>YOU WIN!</h2>");
      gameFinished();
      winSound.play();
      // alert(`YOU WIN!`)
    }
  }

  // Check user's input
  function guessChecker(inputValue) {
    // Check if guess is correct
    for (let i = 0; i < animalLetters.length; i++) {
      if (animalLetters[i] === inputValue.toLowerCase()) {
        $(`#letter-${inputValue}`).removeClass("in-play");
        $(`#letter-${inputValue}`).addClass("correct");
        $(".guess-line").eq(i)[0].innerText = `${animalLetters[i].toUpperCase()}`;
        correctCount += 1;
      }
    }

    // Check if guess is wrong
    if (!animalLetters.includes(inputValue.toLowerCase())) {
      $(`#letter-${inputValue}`).removeClass("in-play");
      $(`#letter-${inputValue}`).addClass("incorrect");
      wrongCount += 1;
      $(".img").attr("src", `./images/0${wrongCount}-gallows.jpg`);
    }
  }

  $(".alpha-btn").on("click", event => {
    if (!gameOver) {
      $(event.currentTarget).attr("disabled", true);
      guessChecker($(event.currentTarget).text());
      gameEndChecker();
    }
  });

  $(document).on("keydown", event => {
    const { key } = event;
    if (!keysPressed.includes(key)) {
      if (!gameOver) {
        if (/[a-zA-Z]/.test(key)) {
          keysPressed.push(key);
          $(`#letter-${key.toUpperCase()}`).attr("disabled", true);
          guessChecker(key.toUpperCase());
          gameEndChecker();
        }
      }
    }
    if (gameOver) {
      if (key === "Enter") {
        location.reload();
      }
    }
  });
});
