// Singleton (Contructor)

const singletonObj = new Object();
const singletonObj2 = Object.create({} || null);

singletonObj2.name = "monu kumar"

// Object Literals

const mySymbol = Symbol("key1");

let myObj = {
      "full name": "shivansh sonu",
      name: "sonu Kumar",
      age: 25,
      [mySymbol]: "mykey1"
}

// console.log(myObj.name);
// console.log(myObj["name"])
// console.log(myObj["full name"])
// console.log(myObj[mySymbol]) ( Important )

// Object.freeze(myObj);
// myObj.name = "monu";
// console.log(myObj);
// {
//       'full name': 'shivansh sonu',
//        name: 'sonu Kumar',
//        age: 25,
//        [Symbol(key1)]: 'mykey1'
// }

var array;
// **************** Convert into Array  *************

// const newArr = Object.entries(myObj);
// console.log(newArr)
// [
//       ['full name', 'shivansh sonu'],
//       ['name', 'sonu Kumar'],
//       ['age', 25]
// ]

// const newArr = Object.keys(myObj);
// console.log(newArr)            // [ 'full name', 'name', 'age' ]

// const newArr = Object.values(myObj);
// console.log(newArr)             // [ 'shivansh sonu', 'sonu Kumar', 25 ]

var deep;

// **************** Deep Copy *************

const newObject = {
      name: "sonu kumar",
      email: "sonu@",
      location: {
            district: "kota",
            state: "rajasthan"
      }
}

const spreadObj = { ...newObject };

// newObject.name = "monu Kuamr"
// spreadObj.location.district = "patna"

// console.log(newObject);
// {
//       name: 'sonu kumar',
//       email: 'sonu@',
//       location: { district: 'patna', state: 'rajasthan' }
// }

// console.log(spreadObj);
// {
//       name: 'sonu kumar',
//       email: 'sonu@',
//       location: { district: 'patna', state: 'rajasthan' }
// }

const assignObj = Object.assign({}, newObject);

// newObject.name = "monu Kuamr"
// assignObj.location.district = "patna"

// console.log(newObject);
// {
//       name: 'sonu kumar',
//       email: 'sonu@',
//       location: { district: 'patna', state: 'rajasthan' }
// }

// console.log(assignObj);
// {
//       name: 'sonu kumar',
//       email: 'sonu@',
//       location: { district: 'patna', state: 'rajasthan' }
// }

const structureObj = structuredClone(newObject);

// newObject.name = "monu Kuamr"
// structureObj.location.district = "patna"

// console.log(newObject);
// {
//       name: 'sonu kumar',
//       email: 'sonu@',
//       location: { district: 'patna', state: 'rajasthan' }
// }

// console.log(structureObj);
// {
//       name: 'sonu kumar',
//       email: 'sonu@',
//       location: { district: 'patna', state: 'rajasthan' }
// }

