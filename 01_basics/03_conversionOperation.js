//--------------------------------------
let score = "33abc"  
score = "33abc"
//score = "true"
//score = null

//---conversion of any data into number
console.log(typeof score)
 
let valueInNumber = Number(score) // used to convert any datatype in number 

//console.log(typeof valueInNumber)
//console.log(valueInNumber) // 33 -> 33 , 33abc -> Nan , true -> 1 , null-> object

//-------------------------------------

// conversion of data into boolean type
let isLoggedIn = 1
//console.log(isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn) //used to convert any data into boolean type
//console.log(booleanIsLoggedIn)

//-------------------------------------

//************************* Operations ******************** */

let value = 33
let NegValue = -value
//console.log(NegValue);

//-------------------------------------

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%2);

//-------------------------------------

//-->string addtion

// let str1 = "hello"
// let str2 = " manish"
// str3 = str1 + str2

// console.log(str3);

//-------------------------------------

//- now here comes problem when when we add to different types of datatypes together
// console.log("1"+2);
// console.log(1+"2");
// console.log(1+2);
// console.log("1"+2+2);
// console.log(1+2+"2");
//here comes the rule behind it -> first digit decides the type of data type for the rest of the operation

//--------------------------------------

//---postfix and prefix increment

gamecounter = 100
let postfix_gamecounter = gamecounter++
let prefix_gamecounter =  ++gamecounter
console.log(postfix_gamecounter);
console.log(postfix_gamecounter)

//link to study : https://tc39.es/ecma262/multipage/abstract-operations





