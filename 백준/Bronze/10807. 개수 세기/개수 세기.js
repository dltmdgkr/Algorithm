const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputTestCase = [];

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  inputTestCase.push(arr);
}

let num = inputTestCase[0];
let N = inputTestCase[1];
let v = inputTestCase[2];

let count = 0;

function solution(num, N, v) {
  for (let i = 0; i < num; i++) {
    if (v == N[i]) {
      count++;
    }
  }
  console.log(count);
}

solution(num, N, v);
