#!/usr/bin/env node
const names = process.argv.slice(2);
// global variable for longest string in input array
let longest = 0;
  for (let k = 0; k < names.length; k++) {
    if (names[k].length > longest) {
      longest = names[k].length;
    } 
  };

function drawLine(num) {
  let string = '';
  for (let i = 0; i < num; i++) {
    string += '\u2500';
  }
  return string;
};

function drawTopBorder(num) {
  return `\u250C${drawLine(num)}\u2510`;
};

function drawMiddleBorder(num) {
  return `\u251C${drawLine(num)}\u2524`;
};

function drawBottomBorder(num) {
  return `\u2514${drawLine(num)}\u2518`
};

function drawBarsAround(name) {
  
    let padding = '';
    for (let l = 0; l < (longest - name.length); l++) {
      padding += ' ';
    }
    return `\u2502${name}${padding}\u2502`
};

function boxIt(arr) {
  
  let string = `${drawTopBorder(longest)}\n`;

  for (let m = 0; m < arr.length; m++) {
    if (m !== arr.length - 1) {
      string += `${drawBarsAround(names[m])}\n${drawMiddleBorder(longest)}\n`;
    } else {
      string += `${drawBarsAround(names[m])}\n`;
    }
  }
  string += drawBottomBorder(longest);
  return string;
};
console.log(boxIt(names));



// other way to do boxIt()

// for (let index = 0; index < arr.length; index++) {
// string += m !== arr.length - 1 ? conv_str(true, m) :  conv_str(false, m); }

// function conv_str(cnd, m) {
//   return cnd ? `${drawBarsAround(args[m])}\n${drawMiddleBorder(longest)}\n` : `${drawBarsAround(args[m])}\n`
// }



/*
let csvArray = [["names", "house"], ["Jon Snow", "Stark"],]
*/
