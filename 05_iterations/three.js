//-------- for of

//---------basic syntax of for of
// for (const element of object) { //-->here element can be named anything and objects refers to array or string anything
    
// }

//---------example 1 : used for array
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(`elements of array is ${num}`);
// }

//----------example 2 : using for string
// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`greeting are ${greet}`);
// }

// Maps datatypes
// const map = new Map()

// map.set("IN" , "INDIA")
// map.set("USA" , "UNITED STATES OF AMERICA")
// map.set("FR","FRANCE")

// console.log(map);

//o/p : 'IN' => 'INDIA',
//      'USA' => 'UNITED STATES OF AMERICA',
//      'FR' => 'FRANCE'

// for (const [key] of map) {
//     console.log(key);
// }
// for (const [key , value] of map) {
//     console.log(key, ":" ,value);
// }

//--------- forof loop for objects

const myobj = {
    'game 1' : 'nfs', 
    'game 2' : 'spiderman'
}

for (const [key , value] of myobj) {
    console.log(key,":",value);    // TypeError: myobj is not iterable
}

