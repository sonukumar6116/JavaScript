function func(username,email){
      this.username = username;
      this.email = email;
      function sayMyName() {
            // console.log("innner ->",this) // global
      }
      sayMyName();
      // console.log("outer ->",this)  //  func { username: 'Monu', email: '@email' } 
}

const user1 = new func("Sonu","@gmail")
// console.log(user1)    // func { username: 'sonu', email: '@gmail' }
const user2 = new func("Monu","@email")
// console.log(user2)   // func { username: 'Monu', email: '@email' }

