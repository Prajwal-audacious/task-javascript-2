"use strict";

let data = [
  { name: "Prajwal", age: 25, salary: 2500 },
  { name: "Deepak", age: 24, salary: 2600 },
  { name: "Ram", age: 22, salary: 2800 },
  { name: "Shaam", age: 25, salary: 3000 },
];

// using for loop

for (let i = 0; i <= data.length - 1; i++) {
  let str = `Hello My Name Is ${data[i].name}, I am ${data[i].age} Year Old And I Earn ${data[i].salary}₹`;
  console.log(str);
}

console.log(
  "-------------------------------------------------------------------------------"
);
// using map method

let data2 = data.map((x) => {
  let str = `Hello My Name Is ${x.name}, I am ${x.age} Year Old And I Earn ${x.salary}₹`;
  return str;
});
data2.forEach((x) => console.log(x));

/*we can also directy console string inside the map method there is no need to use additional for each

let data2 = data.map(x=>{
      let str = `Hello My Name Is ${x.name}, I am ${x.age} Year Old And I Earn ${x.salary}₹`
      console.log(str)
})

*/

// reduce and map method chaining to console total salary

let totalSalary = data
  .map((x, i) => x.salary)
  .reduce((acc, item) => (acc += item));
console.log(totalSalary);

// assignment 2

let tarik = new Date();
let string = `Today is ${tarik.getDate()}/${tarik.getMonth()}/${tarik.getFullYear()}  And The current Time is (${tarik.getHours()}:${tarik.getMinutes()}:${tarik.getSeconds()} ${
  tarik.getHours() >= 12 ? "PM" : "AM"
})`;
console.log(string);

let sampArr = [9, 5, 7, 2, 3, 4, 8, 1, 6];
sampArr.sort((a, b) => b - a);
console.log(sampArr);

console.log("hello" == "Hello");

console.log(
  "---------------------------Task-2--------------------------------------"
);

// task 2 /

let sampStr = "A Quick Brown Fox Jumps Over The Lazy Dog";
let sta = "sbbggssdakjsdsajkfcjssaaa";

let count = (str) => {
  let lowerCase = str.toLowerCase().split(" ").join("");
  console.log(lowerCase);
  for (let i = 0; i < lowerCase.length; i++) {
    let counting = 0;
    for (let j = 0; j < lowerCase.length; j++) {
      if (lowerCase[i] === lowerCase[j]) {
        counting++;
      } else {
        continue;
      }
    }
    console.log(`${lowerCase[i]}:${counting}`);
    counting = 0;
  }
  
};

count(sampStr);
count(sta);

// task 3



let mostFrequent = arr=>{
      const frequencyMap = {};
      let maxElement=arr[0];
      let maxCount=1;
      for(let i=0;i<arr.length;i++){
            const element =arr[i];
            if(frequencyMap[element]){
                  frequencyMap[element]++;
            }else{
                  frequencyMap[element]=1;
            }
            if(frequencyMap[element]>maxCount){
                  maxElement=element;
                  maxCount=frequencyMap[element];
            }
      }
      return maxElement;
}



let replace = (demo)=>{
  let str = demo;
  let arr = []
  let letter = str.toLowerCase().split(' ').join('')
  for(let i=0;i<letter.length;i++) arr.push(letter[i])
  arr.sort()
  let X = mostFrequent(arr)
  let mainStr = demo.replaceAll(X,"$").replaceAll(X.toUpperCase(),"$")
  return console.log(mainStr)
  
}

replace(sampStr)
