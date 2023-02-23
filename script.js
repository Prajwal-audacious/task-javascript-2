"use strict"

// task- 01 = arrow function
let product = (a,b)=>{console.log(a*b)}
product(5,3)


// default parametre 
let Product = (a,b,c=2)=>{
    return console.log(a*b*c)
}

Product(2,3,4)   // if pass all parameter
Product(2,3)     // if we do not pass third parametere it will use default parameter


console.log('nsjax')


// use of rest parameter
let useRest = (...args)=>{
    let arr = args
    console.log(arr)
}

useRest(1,2,3,4,5,67,8,78,56)  // we can pass infinite values in parameter



// usecase of spread parameter

let array = [1,2,3,4,5,32,312,54]

let spread = (arr)=>{
let newArray = arr
return console.log(...newArray)
}   

spread(array)


// use of map 

let mapUse = array.map((x)=>{
    if(x>5){
     console.log(x)
    }
    
})


// use of filter 
let filterUse =  array.filter(x=>{
    if(x<5){
        console.log(x)
    }
    
})