const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const inputTestCase = [];

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  inputTestCase.push(arr);
}

const a = inputTestCase[0][0];
const b = inputTestCase[0][1];
const c = inputTestCase[1][0];

function solution(a, b, c) {
  let h = Math.floor((a * 60 + b + c) / 60);
  if (h >= 24) {
    h -= 24;
  }
  let m = b + c < 60 ? b + c : (b + c) % 60;
  console.log(h, m);
}

solution(a, b, c);
