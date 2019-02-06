const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const args = process.argv.slice(2);

const welcome = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   Welcome to Todo CLI!                                                     ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃   (v) View • (n) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;
const menu = `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   (v) View • (n) New • (cX) Complete • (dX) Delete • (s) Save • (q) Quit   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`;
console.log(welcome);

let fileData = "";
if (args.length) {
  fileData = JSON.parse(fs.readFileSync(`./${args[0].toString()}`, "utf8"));
}

const todos = fileData.length ? fileData : [];

const main = answer => {
  // View Todos
  const view = () => {
    let result = "";
    todos.forEach((element, index) => {
      if (element.completed === true) {
        result += `• ${index} [✓] ${element.title}\n`;
      } else {
        result += `• ${index} [ ] ${element.title}\n`;
      }
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
      todos.push({ completed: false, title: input });
      console.log(menu);
      start();
    });
  };

  // Complete a todo by checking it off
  const complete = answer => {
    completeIndex = parseInt(answer[1]);
    todos[completeIndex].completed = true;

    console.log(`\nCompleted "${todos[completeIndex].title}"\n`);
    console.log(menu);
    start();
  };

  // Delete a todo
  const remove = answer => {
    deleteIndex = parseInt(answer[1]);
    console.log(`\nDeleted "${todos[deleteIndex].title}"\n`);
    todos.splice(deleteIndex, 1);
    console.log(menu);
    start();
  };

  const save = path => {};

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
  }
};
const start = () => rl.question(`What would you like to do?\n>> `, main);
start();
