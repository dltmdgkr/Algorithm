const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const inputTestCase = [];

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  inputTestCase.push(arr);
}

let N = inputTestCase[0][0];
let M = inputTestCase[0][1];

let basketArray = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  let [int, end, num] = input[i].split(" ").map(Number);
  for (let j = int; j <= end; j++) {
    basketArray[j - 1] = num;
  }
}
console.log(basketArray.join(" "));
