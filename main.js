

// 5-dars o'zgaruvchilar
// let number = 10;
// const borderColor = "red";

// const person = {
//     name: "Samar",
// };

// person.name = "Yusuf";
// console.log(person);

// // old version 

// console.log(clientName);
// var clientName = "Samar";

//6-dars Qa'tiy rejim 
// "use strict";
// const number = 10;
// const clientName = "Samar";

// console.log(number);

//7-dars ma'lumot turlari  JavaScript Data Types

// "use strict";
 // Number
// let number = 5.6; // Data Type = Number 

// console.log(8 / 0); // Infinity 
// console.log("Samar" * 8); //NaN

// String
// const clientName = `Samar`;

// Boolean
// const isMarried = true; // true = xa | To'g'ri
// const isCircleEarth = true; // false = yoq | notog'ri

// null 
// console.log(clientAge);

//undefined 
// let und;
// console.log(und);

// Object 
// const thief = {
//  key: value   
//     age: 30, //numer 
//     jacket: "black", //string 
//     isLonf: false, // boolean 
// };

// console.log(thief.age);

// array
//          0       1         2     3    4   5
// const colors = ["red", "black", "green", 10, [], {}];
// console.log(colors[0]);

// 8-dars foydalanuvchi bilan oddiy muloqot 
// "use strict";

// alert("Hello Javascript");

// const place = confirm(" are you here?");
// console.log(place);

// const currentPlace = prompt("wher are you?", "tashkent");
// console.log(typeof(currentPlace));
// const age = +prompt("how old are you?", "18");
// console.log(age + 10); // "18" + 10 = 1810

// const favouriteColor = [];
// favouriteColor[0] = prompt("What's your favourite color #1", "");
// favouriteColor[1] = prompt("What's your favourite color #2", "");
// favouriteColor[2] = prompt("What's your favourite color #3"), "";
//  console.log(favouriteColor);

// 9-dars Interpolatsiya 
// "use strict";
// const channel = prompt("what's your favourite youtuber");
// console.log(`https://youtube.com/${channel}`); // interpolatsiya 

// const user = "Samar";
// const job = "JavaScript developer";

// console.log(`User name is ${user}, he is ${job}`);

// const client = prompt("hello");
// console.log(client);

//  10-dars Opertorlar  
 
"use strict"

// console.log(6 + "9");

// inc, decr

// let incr = 10;
// let decr = 10;


// console.log(++incr);
// console.log(--decr);

// console.log(10 % 2);

// console.log(5*5 === "25");

// && = va  || yoki 

// const isAge = true;
// const isClose = true;
// const isChecked = false;
  
// console.log(isAge  && isClose && !isChecked );
// console.log(!isChecked);

// console.log(2 + 2 * 2 !== 6);

//  Dostoni vazifasi 
// function calcSum(arr) {
//     if (!arr || arr.length === 0) {
//       return [];
//     }
  
//     let evenSum = 0;
//     let oddSum = 0;
  
//     for (let num of arr) {
//       if (num % 2 === 0) {
//         evenSum += num;
//       } else {
//         oddSum += num;
//       }
//     }
  
//     return [evenSum, oddSum];
//   }
  
//   console.log(calcSum([1, 2, 3, 4, 5])); // Output: [6, 9]

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let worker in salaries) {
//       sum += salaries[worker];
//     }
//     return sum;
//   }
  
//   let salaries = {
//     "Bob": 1700,
//     "John": 6000,
//     "Evelina": 1200
//   };
  
//   console.log(sumSalaries(salaries)); // Output: 8900
console.log(0);










