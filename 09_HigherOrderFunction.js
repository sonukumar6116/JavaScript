const arr = [
      {
            first: "sonu",
            middle: "Kumar",
            last: ""
      },
      {
            district: "kota",
            state: "rajasthan"
      },
      {
            phone: "mi",
            computer: "lenovo"
      }
]

const forEachOutput = arr.forEach( (item) => {
      // console.log(item)
})

// { first: 'sonu', middle: 'Kumar', last: '' }
// { district: 'kota', state: 'rajasthan' }
// { phone: 'mi', computer: 'lenovo' }

// console.log(forEachOutput)   // undefined

const arr1 = [1, 2, 3, 4, 5]

const filterOutput = arr1.filter(item => item > 2)
// console.log(filterOutput)    //  [ 3, 4, 5 ]

const mapOutput = arr1.map(item => item)
// console.log(mapOutput)      //  [1, 2, 3, 4, 5]

const reducerOutput = arr1.reduce((preItem,item)=>preItem+item,0)
// console.log(reducerOutput)  //  15