class User{
      #dob
      constructor(username,dob){
            this.username=username;
            this.#dob=dob;
      }

      #getUserName(){
            return this.username;
      }

      getUserPrivateMethod(){
            return this.#getUserName();
      }

      getUserPrivatePro(){
            return this.#dob
      }

      getUserAge(){
            return this.dob;
      }
}

const user = new User("sonu",2002);

// console.log(user)            // User { username: 'sonu' }
// console.log(user.dob)        // undefined
// console.log(user.#dob)       // ERROR NOT ACCEPTABLE OUT OF THE CLASS PRIVATE PROPERTY

// console.log(user.getUserAge())               // undefined
// console.log(user.getUserPrivatePro())        // 2002

// console.log(user.getUserName())              // ERROR user.getUserName is not a function
// console.log(user.#getUserName())             // ERROR Private field '#getUserName' must be declared in an enclosing class

// console.log(user.getUserPrivateMethod());    // sonu