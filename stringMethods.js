let firstString = "hola pal!"
// get a character
console.log(firstString.charAt(0)); //H
console.log(firstString[0]); //H

//find the index of the "a":
console.log(firstString.indexOf("a"));
//find the last index of the "a":
console.log(firstString.lastIndexOf("a"));

//find the length of the string:
console.log(firstString.length); //note: no (). this is a property, not a method

const extraSpace = "    leading and trailing  space     ";
console.log(`######${extraSpace.trim()}######`);

//chnage casings:
console.log(firstString.toUpperCase());
console.log(firstString.toLowerCase());

//to repeat string many times:
console.log(firstString.repeat(100));

//replace the first instance of a substring:
console.log(firstString.replace("Hola", "Hello"));

//replace all "a" with "e"
console.log(firstString.replaceAll("a", "e"));

//padding:
console.log(firstString.padStart(20, "*"));
console.log(firstString.padEnd(20, "*"));
