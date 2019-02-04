const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [
  { checkbox: `[ ]`, todo: "Buy groceries" },
  { checkbox: `[✓]`, todo: `Call doctor` }
]; // array of objects

// [{checkkbox: `[ ]`, todo: 'Buy groceries'}, {checkbox: `[✓]`, todo: `Call doctor`}]

const welcome = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   Welcome to Todo CLI!                                          ┃
┃                                                                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                                 ┃
┃   (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;

const menu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                 ┃
┃   (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;
console.log(welcome);

const start = answer => {
  // View Todos
  const view = () => {
    let result = "";
    todos.forEach((element, index) => {
      result += `• ${index} ${element.checkbox} ${element.todo}\n`;
    });
    console.log("\n" + result);
    console.log(menu);
    rl.question(`What would you like to do?\n>> `, start);
  };

  // Add new Todo
  const add = () => {
    rl.question(`Add a to-do to your list:\n>> `, input => {
      todos.push({ checkbox: "[ ]", todo: input });

      console.log(menu);
      rl.question(`What would you like to do?\n>> `, start);
    });
  };

  // Complete a todo by checking it off
  const complete = answer => {
    completeIndex = parseInt(answer[1]);
    todos[completeIndex].checkbox = `[✓]`;

    console.log(`\nCompleted "${todos[completeIndex].todo}"\n`);
    console.log(menu);
    rl.question(`What would you like to do?\n>> `, start);
  };

  // Delete a todo
  const remove = answer => {
    deleteIndex = parseInt(answer[1]);
    console.log(`\nDeleted "${todos[deleteIndex].todo}"\n`);
    todos.splice(deleteIndex, 1);
    console.log(menu);
    rl.question(`What would you like to do?\n>> `, start);
  };

  // Say goodbye and quit the application
  const quit = () => {
    console.log(`\nSee you soon! 😄\n`);
    rl.close();
  };

  // Validating user input

  // if (
  //   answer.length > 2 ||
  //   answer[0] !== "v" ||
  //   answer[0] !== "n" ||
  //   answer[0] !== "c" ||
  //   answer[0] !== "d" ||
  //   answer[0] !== "q" ||
  //   typeof parseInt(answer[1]) !== "number"
  // ) {
  //   console.log(`Invalid input, please try again`);
  //   console.log(menu);
  //   rl.question(`What would you like to do?\n>> `, start);
  // }

  switch (true) {
    case answer === "v":
      view();
      break;
    case answer === "n":
      add();
      break;
    case answer[0] == "c":
      complete(answer);
      break;
    case answer[0] === "d":
      remove(answer);
      break;
    case answer === "q":
      quit();
    default:
      //do nothing
      break;
  }
};
rl.question(`What would you like to do?\n>> `, start);
