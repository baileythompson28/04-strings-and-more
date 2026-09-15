let program = "computer programming";
let firstWord = program.slice(0,8);
console.log(firstWord);
let secondWord = program.slice(9); //omit the 2nd arguement to go to the end
console.log(secondWord);

//get the last character:
lastChar = program.slice(-1);
console.log(lastChar);

//seperate the words dynamically:
let first = program.slice (0, program.indexOf(" "));
let second = program.slice(program.indexOf("    ") +1);
console.log(first);
console.log(second);



