"use strict"

// task- 01 = arrow function
let product = (a, b) => { console.log(a * b) }
product(5, 3)


// default parametre 
let Product = (a, b, c = 2) => {
    return console.log(a * b * c)
}

Product(2, 3, 4)   // if pass all parameter
Product(2, 3)     // if we do not pass third parametere it will use default parameter





// use of rest parameter
let useRest = (...args) => {
    let arr = args
    console.log(arr)
}

useRest(1, 2, 3, 4, 5, 67, 8, 78, 56)  // we can pass infinite values in parameter



// usecase of spread parameter

let array = [1, 2, 3, 4, 5, 32, 312, 54]

let spread = (arr) => {
    let newArray = arr
    return console.log(...newArray)
}

spread(array)


// use of map 

let filterUse = array.filter(x => x>5)

console.log(filterUse)


// use of filter 
let mapUse = array.map(x =>x*2)

console.log(mapUse)


array.forEach((x, i) => {
    console.log(`array[${i}]= ${x}`)
})


let result = array.map((x) => x * 2)
console.log(result)


let pra = 'prajwal ramanwal'
console.log(pra.length)

console.log(String.prototype)

let d = new Date()
console.log(`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}---${d.getHours()}/${d.getMinutes()}`)