const { readFileSync, writeFileSync } = require("fs");
console.group("start");
const firstText = readFileSync("./content/first.txt", "utf-8");
const secondText = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
   "./content/result-sync.txt",
   `Here the result : ${firstText}, ${secondText}`, { flag: "a" }
);

console.log("don with this task");
console.log("starting the next one");
