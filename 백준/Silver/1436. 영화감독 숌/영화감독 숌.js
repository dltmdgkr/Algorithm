let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let count = 1;
let num = 666;

while (input !== count) {
  num++;
  if (num.toString().includes("666")) count++;
}

console.log(num);
