// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)

// const OtherNumber = 1000
// console.log(OtherNumber.toFixed(1))

// const ontherNumbers = 123.3232
// console.log(ontherNumbers.toPrecision(4))
// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++maths++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));

// console.log("absolute value "  + Math.round(4.6))
// console.log("ceil vaue " + Math.ceil(4.3))
// console.log("floor value " + Math.floor(4.8))
// console.log("minimun value " + Math.min(4,3,5,6))

// important part of this session

console.log(Math.random())// always give the value in 0 - 1
console.log((Math.random()*10)+1); // sift the left one steps here is problem 0 can come in the firs step

console.log(Math.floor(Math.random()*10)+1); // avoid that zero we can add the one writen fucntion

const min  = 10;
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min); // sometimes we need to value range value the we have to follow this methode
