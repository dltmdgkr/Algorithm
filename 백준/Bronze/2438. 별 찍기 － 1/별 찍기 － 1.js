const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let ans = "";

for (let i = 0; i < +input; i++) {
  ans += "*";
  console.log(ans);
}
