function User(user, pass) {
      this.user = user;
      this.pass = pass;
}

User.prototype.userPrototype = function () {
      return this
}

function Teacher(user, pass, proffesion) {
      User.call(this, user, pass);
      this.proffesion = proffesion;
}

Teacher.prototype.teacherPrototype = function () {
      return this
}

const user1 = new User("monu", 5678)
// console.log(user1)                       // User { user: 'monu', pass: 5678 }

const teacher1 = new Teacher("sonu", 123, "ME");
// console.log(teacher1)                    // Teacher { user: 'sonu', pass: 123, proffesion: 'ME' }

// console.log(user1.userPrototype())       // User { user: 'monu', pass: 5678 }
// console.log(user1.teacherPrototype())    //ERROR NOT A FUNCTION

// console.log(teacher1.userPrototype())    // ERROR not a function
