#!/usr/bin/env node

const args = process.argv.slice(2);
const stringArray = [];

for (let j = 0; j < args.length; j += 1) {
  stringArray.push(args[j]);
}
// console.log(stringArray);

// global variable for longest string in input array
let long = 0;
  
  for (let k = 0; k < stringArray.length; k += 1) {
    if (stringArray[k].length > long) {
      long = stringArray[k].length;
    } 
  }
const longest = long;


function drawLine(num) {
  let string = '';
  for (let i = 0; i < num; i += 1) {
    string = string + '\u2500';
  }
  return string;
};
//console.log(drawLine(5));


function drawTopBorder(num) {
  string = '\u250C' + drawLine(num) + '\u2510';
  return string;
};
//console.log(drawTopBorder(5));


function drawMiddleBorder(num) {
  string = '\u251C' + drawLine(num) + '\u2524';
  return string;
};
// console.log(drawMiddleBorder(5));


function drawBottomBorder(num) {
  string = '\u2514' + drawLine(num) + '\u2518';
  return string;
};
// console.log(drawBottomBorder(5));


function drawBarsAround(barString) {
  
    let padding = '';
    for (let l = 0; l < (longest - barString.length); l += 1) {
      padding = padding + ' ';
    }
    string = '\u2502' + barString + padding + '\u2502';
    return string;
}
// console.log(drawBarsAround("HERPA DERPA"));


function boxIt(arr) {
  
  let string = drawTopBorder(longest) + "\n";

  for (let m = 0; m < arr.length; m += 1) {
    if (m !== arr.length - 1) {
      string = string + drawBarsAround(stringArray[m]) + "\n" + drawMiddleBorder(longest) + "\n";
    } else {
      string = string + drawBarsAround(stringArray[m]) + "\n";
    }
  }
  string = string + drawBottomBorder(longest);
  console.log(string);
}
boxIt(stringArray);
