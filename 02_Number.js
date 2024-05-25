let a = 100
let b = new Number(100)

let othernum = 23.899
// console.log(othernum.toPrecision(2))            // 24
othernum = 123.899
// console.log(othernum.toPrecision(2))           // 1.2e + 2

const hundred = 100000000
// console.log(hundred.toLocaleString('en-IN'))            // 10,00,00,000
// console.log(typeof hundred.toLocaleString('en-IN'))     // string

// console.log(Math.random())      // [ 0 , 1 ) 

// ====> formula for getRandom no between [a,b]
// let randomnum = a + Math.floor(Math.random() * (b - a + 1)) 
