const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = input.split("\n");

let inputTestCase = [];

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  inputTestCase.push(arr);
}

function solution(testCase) {
  const [a, b, c] = testCase;
  let prize;

  if (a === b && b === c) {
    prize = 10000 + a * 1000;
  } else if (a === b || b === c || a === c) {
    const repeatingNumber = a === b ? a : b === c ? b : c;
    prize = 1000 + repeatingNumber * 100;
  } else {
    prize = 100 * Math.max(a, b, c);
  }

  console.log(prize);
}

inputTestCase.forEach((testCase) => solution(testCase));
