const fs = require("fs");

const table = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "));

let total = 0;
let gradeTotal = 0;

for (let [a, b, c] of input) {
  if (c === "P") continue;
  total += b * table[c];
  gradeTotal += +b;
}

console.log(total / gradeTotal);
