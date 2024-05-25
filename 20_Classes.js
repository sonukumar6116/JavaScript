// class typeOf => Function

class user{
      constructor(username,email){
            this.username=username;
            this.email=email;
            // console.log(this) // user { username: 'sonu', email: '@gmail' }
      }

      // methods
      getUserName(){
            return this.username;
      }

      getUserEmail(){
            return this.email;
      }
};

const user1 = new user("sonu","@gmail");

// console.log(user1)                   // user { username: 'sonu', email: '@gmail' }
// console.log(user1.getUserEmail())    // @gmail 

// *********************  Another Way of doing this ******************

function User(username,email){
      this.username = username;
      this.email = email;
      // console.log(this);     // User { username: 'monu', email: '@email' }
}

User.prototype.getUserName=function(){
      return this.username;
}

User.prototype.getUserEmail=function(){
      return this.email;
}

const user2 = new User("monu","@email")

// console.log(user2)                   // User { username: 'monu', email: '@email' }
// console.log(user2.getUserEmail())    // @email