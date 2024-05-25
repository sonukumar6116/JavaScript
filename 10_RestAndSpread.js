// **************** SPREAD OPERATOR **************

const arr = [1,2,3,4,5];
const deepCopyArr = [...arr]

// **************** REST OPERATOR **************

function people(a,b,...d) {
      console.log(a,b,d)   // 1 2 [ 3, 4, 5, 6, 7 ] , 1 2 []
}

people(1,2,3,4,5,6,7)
people(1,2)