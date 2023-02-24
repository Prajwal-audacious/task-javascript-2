"use strict";

let data = [
  { name: "Prajwal", age: 25, salary: 2500 },
  { name: "Deepak", age: 24, salary: 2600 },
  { name: "Ram", age: 22, salary: 2800 },
  { name: "Shaam", age: 25, salary: 3000 },
];

// using for loop   

for(let i=0;i<=data.length-1;i++){
  let str = `Hello My Name Is ${data[i].name}, I am ${data[i].age} Year Old And I Earn ${data[i].salary}₹`
  console.log(str)
}

console.log('-------------------------------------------------------------------------------')
// using map method 

let data2 = data.map(x=>{
      let str = `Hello My Name Is ${x.name}, I am ${x.age} Year Old And I Earn ${x.salary}₹`
      return str
})
data2.forEach(x=>console.log(x))

/*we can also directy console string inside the map method there is no need to use additional for each

let data2 = data.map(x=>{
      let str = `Hello My Name Is ${x.name}, I am ${x.age} Year Old And I Earn ${x.salary}₹`
      console.log(str)
})

*/


// reduce and map method chaining to console total salary 

let totalSalary= data.map((x,i)=>x.salary).reduce((acc,item)=>acc+=item)
console.log(totalSalary)


// assignment 2

let tarik = new Date()
let string =  `Today is ${tarik.getDate()}/${tarik.getMonth()}/${tarik.getFullYear()}  And The current Time is (${tarik.getHours()}:${tarik.getMinutes()}:${tarik.getSeconds()} ${tarik.getHours()>=12?"PM":"AM"})`
console.log(string)