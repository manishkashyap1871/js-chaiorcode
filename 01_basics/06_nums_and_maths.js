//-----------------NUMBERS---------------------------

// const score = 400 // here it automatically specify the type of data type i.e. number
// console.log(score); 

// const balance = new Number(100) // here the user specifying the type of datatype i.e. number
// console.log(balance) 
// console.log(balance.toString()); // to convert balance into string type
// console.log(balance.toFixed(2)); // to represent the decimal digits
 
// // # use of toPrecision() -> it focus on only provided number of digits in rounding off them
// const num = 23.6936836
// console.log(num.toPrecision(3)); // the answer will be 23.7

// const num2 = 123.69
// console.log(num2.toPrecision(3)); // the answer will be 124 because it focuses on only starting 3 digits that is given by user

// // sometimes user have problem in finding the number of zeroes in 1000000000000 this type of numbers so for solving this problem we use "toLocaleString(type of standard)"
// const hundreds = 1000000000000000
// console.log(hundreds.toLocaleString()); // standardly it gives output according to us standard
// console.log(hundreds.toLocaleString('en-IN')); // NOW it gives output according to indian system


//-------------------------Maths-------------------------
// console.log(Math);
// console.log(Math.abs(-4)); // it return only absolute value without any sign
// console.log(Math.round(4.6)); // it round off the digit near to its
// console.log(Math.ceil(4.1)); // it return the above round off value of decimal value given 
// console.log(Math.floor(4.9)); // it retrun the lower round off value of given deciaml value
// console.log(Math.min(1,2,3,4,5,6,)); // it helps to find the minimum value in the given array
// console.log(Math.max(1,2,3,4,5,5,6,7)); // it hep to find the maximum value in the given array

// # maths.random() -> it used to provide random value , by default it gives value ranging between 0 & 1 

console.log(Math.random()); // it only provide random values between 0 & 1

// now let us take an example of that we want a random output of number ranging between 10 and 20
// for this there is formula 
// { (maths.random() * (max-min+1)) + min }
// here , max = 20 min = 10
console.log(Math.round(((Math.random()*(20-10+1))+10))); // now it only give output range between 10 & 20









   

