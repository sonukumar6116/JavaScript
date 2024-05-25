// ------------- 1 ------------------

// function foo() {
//       let a = 2;
//       if(true){
//             let a = 1;
//             console.log(a);  // a = 1
//       }
//       console.log(a);        // a = 1
// }

// foo();

// ------------- 2 ------------------

// var b = 1;

// function foo(){
//       console.log(b);  // undefined
//       var b = 2;
// }

// console.log(b)  // 1

// foo();

// ------------- 3 ------------------

// function foo(){
//       console.log(b); // ERROR - Refence error (tempral red Zone)
//       let b = 2;
// }

// foo();

// ------------- 4 ------------------

// function foo(a,b) {
// }

// foo(1,2);

// console.log(foo.length) //  foo.length = 2 (no of parameter)

// ------------- 5 ------------------

// function foo(a,b,...d) {
// }

// foo(1,2,3,4);

// console.log(foo.length) //  foo.length = 2 (parameter counted before REST operator)

// ------------- 6 ------------------

// function foo(a,d=1,e) {
// }

// foo(1,2,3);

// console.log(foo.length)  //  foo.length = 1 (parameter counted before any assign value and REST operator)

// ------------- 7 ------------------

// setTimeout(()=>{
//       console.log("setTimeOut")
// },0)

// console.log("Outer")

// printing Order is
// 1 ."Outer",
// 2 ."setTimeOut"

// ------------- 8 ------------------

// async function foo() {
//       return "Hello World"
// }

// let a = foo();

// console.log(a) // Promise { 'Hello World' }

// ********************* Operation *********************************

// ------------- 9 ------------------

// console.log(5+"5"+5)         // 555
// console.log(typeof(5+"5"+5)) // String

// console.log(5+5+"5"+5)         // 1055
// console.log(typeof(5+5+"5"+5)) // String

// console.log("5" + 5 + 5 + "5")         // 5555
// console.log(typeof ("5" + 5 + 5 + "5")) // string

// ------------- 10 ------------------

// console.log(5 + "5" - 5)             // 50
// console.log(typeof(5 + "5" - 5))     // Number

// console.log(5 + "a" - 5)             // NaN
// console.log(typeof(5 + "a" - 5))     // number

// ********************* Comparison ********************************* 

// ------------- 11 ------------------

// console.log(1<2<3)   // true ((1<2)=>(true => 1)<3)
// console.log(3>2>1)   // false ((3>2)=>(true => 1)>1)

// ------------- 12 ------------------

// console.log("a">11)    // false 
// console.log("20">29)   // false 

// (important)

// console.log(null>0)      // false ( 0 > 0 )
// console.log(null==0)     // false ( null > 0 )
// console.log(null>=0)     // true  ( 0 >= 0 )

// * The reason is that (an equality check ==) and (comparison > < >= <=) 
//   work differently .
// * Comparison convert null to a number

// console.log(undefined == 0)     // false 
// console.log(undefined > 0)      // false 
// console.log(undefined < 0)     // false  

// ********************* Convertion *********************************

// ------------- 13 ------------------

// let score = null

// let value = Number(score)

// console.log(value)           // 0
// console.log(typeof value)    // undefiened

// ------------- 14 ------------------

// let score = undefined

// let value = Number(score)

// console.log(value)           // NaN
// console.log(typeof value)    // number

// ------------- 15 ------------------

// let score = undefined

// let value = String(score)

// console.log(value)           // undefiend
// console.log(typeof value)    // string

// ------------- 16 ------------------

// let score = null

// let value = String(score)

// console.log(value)           // null
// console.log(typeof value)    // string

// ------------- 17 ------------------

// console.log(+true)           // 1
// console.log(+"")             // 0

// ------------- 18 ------------------

// let x = 3;
// let y = x++;

// console.log("x : ",x," y : ",y);   // x :  4  y :  3

// let a = 3;
// let b = ++a;

// console.log("a : ",a," b : ",b);   // a :  4  b :  4

// ------------- 19 ------------------

// let arr1 = [1, 2];
// let arr2 = [1, 2];

// console.log(arr1 === arr2)      // false
// console.log(arr1 == arr2)       // false


