const randomizer = (pickMethod, quantity, members) => {
  
  quantity = parseInt(quantity);
  const memberArray = members.split(", ");

  const shuffle = array => {
    let elementsRemaining = array.length,
      temp,
      randomIndex;
    while (elementsRemaining > 1) {
      randomIndex = Math.floor(Math.random() * elementsRemaining--);
      if (randomIndex != elementsRemaining) {
        temp = array[elementsRemaining];
        array[elementsRemaining] = array[randomIndex];
        array[randomIndex] = temp;
      }
    }
    return array;
  };

  const shuffledArray = shuffle(memberArray);

  const byNumOfTeams = (quantity, shuffledArray) => {
    const numOfPeople = shuffledArray.length;
    const maxPerTeam = Math.floor(numOfPeople / quantity);

    let teams = [];
    for (let k = 0; k < quantity; k++) {
      teams[k] = [];
    }

    let personCount = numOfPeople;
    while (personCount > 0) {
      for (let i = 0; i < quantity; i++) {
        if (personCount > 0) {
          teams[i].push(shuffledArray.pop());
          personCount--;
        }
      }
    }
    return teams;
  };

  const byNumOfPeople = (quantity, shuffledArray) => {
    const numOfPeople = shuffledArray.length;
    const maxTeams = Math.ceil(numOfPeople / quantity);

    let teams = [];
    for (let k = 0; k < maxTeams; k++) {
      teams[k] = [];
    }

    let personCount = numOfPeople;
    while (personCount > 0) {
      for (let i = 0; i < maxTeams; i++) {
        if (personCount > 0) {
          teams[i].push(shuffledArray.pop());
          personCount--;
        }
      }
    }
    return teams;
  };
  if (pickMethod === "teamCount") {
    return byNumOfTeams(quantity, shuffledArray);
  } else {
    return byNumOfPeople(quantity, shuffledArray);
  }
};

module.exports = randomizer;
