func1();
function func1(params) {
      console.log('first')
}
func1();

func2();  // ERROR
const func2 = function () {
      console.log('second')
}
func2();

func3();  // ERROR
const func3 = () => {
      console.log("four")
}
func3();

// ******************** IMPLICITE AND EXPLICITE RETURN ********************

// IMPLICITE
const first = () => (4);

// EXPLICITE
const second = () => {
      return 4;
}

// ******************** ARGUMENT AND PARAMETER RETURN ********************

function sample(a,b,c) {  // Important parameter
      console.log(a,b,c)
}

sample(1,2,3) // Important argument


