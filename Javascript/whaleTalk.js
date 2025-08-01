const input = "hello from the sea , user !";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log();
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j)
    if (input[i] === vowels[j]) {
      // console.log("Match");
      resultArray.push(vowels[j]);
    }
  }
}
// console.log(resultArray);
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
