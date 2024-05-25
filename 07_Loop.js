const Obj = {
      name: "sonu kumar",
      email: "kumar@gmail.com"
}

const arr = [1, 2, 3, 4, Obj];

const map = new Map();
map["hello"] = "world",
map["computer"] = "lenovo"
map.set("sonu", "kumar");

// console.log(map) 
// {
//       'sonu' => 'kumar',
//       heelo: 'world',
//       computer: 'leneovo'
// }

// ******************** for of ********************

// for (const item of arr) {no
//       console.log(item)
// }
// 1 2 3 4 { name: 'sonu kumar', email: 'kumar@gmail.com' }

// for (const item of Obj) {
//       console.log(item)
// }
// ERROR not iterable on object Important for of Not iterable on Object

// for (const item of map) {
//       console.log(item)
// }
// [ 'sonu', 'kumar' ]

// ******************** for in ********************

// for (const key in arr) {
//       console.log(arr[key])
// }

// for (const key in Obj) {
//       console.log(key ,":-" , Obj[key])
// }
// name :- sonu kumar
// email :- kumar@gmail.com

// for (const key in map) {
//       console.log(key, ":-", map[key])
// }
// hello :- world
// computer :- lenovo

// ******************** for ********************

// for (let index = 0; index < arr.length; index++) {
//        console.log(arr[index])
// }
