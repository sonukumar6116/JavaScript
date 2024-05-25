function hello() {
      let name = "sonu kumar"
      // console.log(this)   // {}
}

hello();

// console.log(this)  {}

const obj = {
      name:"sonu kumar",
      age:12,
      sayMyName : function(){
            console.log(this)    // { name: 'sonu kumar', age: 12, sayMyName: [Function: sayMyName] }
            console.log(`my name is ${this.name}`)    // my name is sonu kumar
      },
      callMyAge : ()=>{
            console.log(this);          // {}
            console.log(`${this.age}`)  // undifined
      },
      anotherArrow : ()=>{
            let company = "Google";
            console.log(this)          // {}
            console.log(company)       // Google
      }
}

// obj.sayMyName();
// obj.callMyAge();
// obj.anotherArrow();