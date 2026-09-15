//strict equality (===)
//talk about the equals sign:
// = assignment (stores a value in a variable)
// == compares vallues but ignores data type
// === compares values and data types

const pi = 3.14
console.log("==")
if(pi == "3.14"){
    console.log("thats pi!!")
} else{
    console.log("thats not pi")
}

console.log("==")
if(pi === "3.14"){
    console.log("thats pi!!")
} else{
    console.log("thats not pi")
}

//inequality:
console.log("!=")
if(pi != "3.14"){
    console.log("thats not pi")
} else{
    console.log("thats pi!")
}

// strict inequality:
console.log("!==")
if(pi !== "3.14"){
    console.log("thats not pi")
} else{
    console.log("thats pi!")
}