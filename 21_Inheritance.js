class User{
      constructor(name,email){
            this.name=name;
            this.email=email
      }

      UserMethod(){
            console.log(this)  
      }
}

class Teacher extends User{
      constructor(name,email,Proffesion){
            super(name,email)
            this.Proffesion=Proffesion
      }

      TeacherMethod(){
            console.log(this) 
      }
}

const  Teacher1 = new Teacher("sonu","@gmail","CSE")
const  user1 = new User("monu","@email")

// console.log(Teacher1)       // Teacher { name: 'sonu', email: '@gmail', Proffesion: 'CSE' }

// Teacher1.TeacherMethod()    // Teacher { name: 'sonu', email: '@gmail', Proffesion: 'CSE' }
// user1.UserMethod()          // User { name: 'monu', email: '@email' }

// Teacher1.UserMethod()      // Teacher { name: 'sonu', email: '@gmail', Proffesion: 'CSE' }
// user1.TeacherMethod()     // ERROR NOT A FUNCTION

