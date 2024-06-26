const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => +item);

const inputTestCase = [];

for (let i = 0; i < input.length; i++) {
  const inputValue = input[i];
  inputTestCase.push(inputValue);
}

const number = inputTestCase[0];

function solution(number) {
  let str = "";

  for (let i = 1; i <= number / 4; i++) {
    str += "long ";
  }

  console.log(`${str}int`);
}

solution(number);
