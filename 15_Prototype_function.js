function sample(username){
      this.username = username;
      this.sayHello  =  function(){
            console.log("hello")
      }
      function sayNumber(){
            console.log("15")
      }
      sayNumber();
}

sample.prototype.age = 13
sample.prototype.SayMyName = function () {
      console.log(this)
}

const user1 = new sample("sonu")

// console.log(user1.age)        // 13

// console.log(user1.SayMyName())   // sample { username: 'sonu', sayHello: [Function (anonymous)] }

// user1.SayMyName();            // ERROR refrence error

// console.log(user1)
// 0.4712922677111051
// sample { username: 'sonu', sayHello: [Function (anonymous)] }

// ********************  Wrong Way  ********************

function sample2(params) {
      console.log('hello')
}

sample.prototype.age = 19

// console.log(sample().age) // ERROR cannot read pro.


