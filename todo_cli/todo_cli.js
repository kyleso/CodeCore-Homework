const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = []; // array of objects
const welcome = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   Welcome to Todo CLI!                                          ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃   (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;
const menu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;
console.log(welcome);

const main = answer => {
  // View Todos
  const view = () => {
    let result = "";
    todos.forEach((element, index) => {
      result += `• ${index} ${element.checkbox} ${element.todo}\n`;
    });

    if (todos[0] === undefined) {
      console.log(`\nList is empty!`);
    } else {
      console.log("\n" + result);
    }
    console.log(menu);
    start();
  };

  // Add new Todo
  const add = () => {
    rl.question(`\nAdd a to-do to your list:\n>> `, input => {
      todos.push({ checkbox: "[ ]", todo: input });

      console.log(menu);
      start();
    });
  };

  // Complete a todo by checking it off
  const complete = answer => {
    completeIndex = parseInt(answer[1]);
    todos[completeIndex].checkbox = `[✓]`;

    console.log(`\nCompleted "${todos[completeIndex].todo}"\n`);
    console.log(menu);
    start();
  };

  // Delete a todo
  const remove = answer => {
    deleteIndex = parseInt(answer[1]);
    console.log(`\nDeleted "${todos[deleteIndex].todo}"\n`);
    todos.splice(deleteIndex, 1);
    console.log(menu);
    start();
  };

  // Say goodbye and quit the application
  const quit = () => {
    console.log(`\nSee you soon! 😄\n`);
    rl.close();
  };

  switch (true) {
    case answer === "v":
      view();
      break;
    case answer === "n":
      add();
      break;
    case answer[0] == "c" && parseInt(answer[1]) >= 0:
      complete(answer);
      break;
    case answer[0] === "d" && parseInt(answer[1]) >= 0:
      remove(answer);
      break;
    case answer === "q":
      quit();
      break;
    default:
      console.log(`\nInvalid input, please try again!\n`);
      start();
      break;
  }
};
const start = () => rl.question(`What would you like to do?\n>> `, main);
start();
