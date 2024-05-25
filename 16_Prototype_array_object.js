const object = {
      name:"sonu kumar",
      age:18
}

const arr = [1,2,3,4]

Object.prototype.ObjProto = function(){
      return this
}

Array.prototype.ArrProto = function(){
     return this
}

// console.log(object.ObjProto())  // { name: 'sonu kumar', age: 18 }
// console.log(arr.ObjProto())     //  [ 1, 2, 3, 4 ]

// console.log(arr.ArrProto())     //  [ 1, 2, 3, 4 ]
// console.log(object.ArrProto())  //  ERROR

Array.prototype.Change = function(add){
      return  this.map(data => data+add)
}

console.log(arr.Change(5))  // [ 6, 7, 8, 9 ]