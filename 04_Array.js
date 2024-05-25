// myarray create a Shallow Copy
let myarray = [0,"sonu",'a',null]
const array = new Array(1,2,3);

// console.log(typeof myarray) // object

// myarray.push(989);
// myarray.pop();

myarray.unshift(9);   // inserted at first position
// console.log(myarray)  // [ 9, 0, 'sonu', 'a', null ]
myarray.shift();      // popped from first position
// console.log(myarray)  // [0,"sonu",'a',null]

// console.log(myarray.includes("sonu"))   // true

const newArr = myarray.join();

// console.log(newArr)         // 0,sonu,a,
// console.log(typeof newArr)  // string

// ======> slice and splice

// slice not change in original array 
// splice change in original array

let arr1 = [1,2,3,4,5];

let sliceArr = arr1.slice(0,3);
// console.log(arr1);       // [ 1, 2, 3, 4, 5 ]
// console.log(sliceArr);   // [ 1, 2, 3 ]

let spliceArr = arr1.splice(0,3);
// console.log(arr1);       // [ 4, 5 ]
// console.log(spliceArr);  // [ 1, 2, 3 ]

const first = [1,2,3];
const second = [4,5,6];
first.push(second);
// console.log(first)         // [ 1, 2, 3, [ 4, 5, 6 ] ] 

//  ****************** Deep Copy of array **************************

// ( 1 ) => [...array] (Spread Operator)

const spreadArray = [...first]
// console.log(spreadArray)    // [ 1, 2, 3, [ 4, 5, 6 ] ]

// first[3][0] = 10
// first[2] = 11

// console.log(first)            // [ 1, 2, 11, [ 10, 5, 6 ] ]
// console.log(spreadArray)      // [ 1, 2, 3, [ 10, 5, 6 ] ]

// (*) Conclusion -> Spread Operator only spread a first layer of Data

// ( 2 ) => structureClone(arr)

const structureArr = structuredClone(first);

// first[3][0] = 10
// first[2] = 11

// console.log(first)            // [ 1, 2, 11, [ 10, 5, 6 ] ]
// console.log(structureArr)     // [ 1, 2, 3, [ 4, 5, 6 ] ]

// ( 3 ) => assign([],arr)

const assignArr = Object.assign([],first);

// first[3][0] = 10
// first[2] = 11

// console.log(first)            // [ 1, 2, 11, [ 10, 5, 6 ] ]
// console.log(assignArr)        // [ 1, 2, 3, [ 10, 5, 6 ] ]


// *********************** flating Arr **********************

const flatArr = first.flat(Infinity);

// console.log(first)            // [ 1, 2, 3, [ 4, 5, 6 ] ]
// console.log(flatArr)          // [ 1, 2, 3, 4, 5, 6 ]


// ****************** Array conversion *****************

// console.log(Array.isArray("sonu"))   // false
// console.log(Array.from("Sonu"))      // [ 'S', 'o', 'n', 'u' ]
// console.log(Array.from({name:"Sonu"}))  // [] ( Important )

// let a = 10 
// let b = 20
// let c = 30

// console.log(Array.of(a,b,c));      // [ 10, 20, 30 ]


