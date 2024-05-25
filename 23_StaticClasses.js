// there are multiple type we can use Static 
// NOTE: its use on a Class not on a ClassObject 

class CreateUser{
      constructor(username,email){
            this.username=username
            this.email=email
      }

      // type 1  
      static name = "Good Morning"
      static gmail = this.email // undefined

      static getClassAge(){
            return this.age
      }

      // type 3 (static Block Method)
      static{
            this.greet = "Good Morning";

            this.greeting = function(){
                  return `hello ${this.greet}`;
            }

            this.returnThis = function(){
                  return this;
            }
      }

      getUserName(){
            return this.username;
      }
}

// type 2
CreateUser.age = 18
CreateUser.ClassName = function(){
      return this.name;
}

const user1 = new CreateUser("sonu","gmail");


// console.log(CreateUser.name)           // Good Morning
// console.log(CreateUser.gmail)          // undefined
// console.log(CreateUser.age)            // 18

// console.log(CreateUser.getClassAge())  // 18

console.log(CreateUser.greet)           // Good Morning
console.log(CreateUser.greeting())      // hello Good Morning

console.log(CreateUser.returnThis())
// [class Good Morning] {
//       name: 'Good Morning',
//       gmail: undefined,
//       greet: 'Good Morning',
//       greeting: [Function (anonymous)],
//       returnThis: [Function (anonymous)],
//       age: 18,
//       ClassName: [Function (anonymous)]
// }

// console.log(user1.age)              // undefined
// console.log(user1.getClassAge())    // ERROR  user1.getClassAge is not a function


