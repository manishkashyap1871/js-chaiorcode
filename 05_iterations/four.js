// --------forin loop 

// basic syntax

// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
//     const element = object[key];
// }

const myobj = {
    js : 'javascript',
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}
 
for (const key in myobj) {
    console.log(key);    
}
// o/p : js
//       cpp
//       rb
//       swift
for (const key in myobj) {
    console.log(`${key} is the shortcut for ${myobj[key]}`);    
}
//o/p: 
// js is the shortcut for javascript
// cpp is the shortcut for c++
// rb is the shortcut for ruby
// swift is the shortcut for swift by apple

// can for in used in array let's check
const programming = ["js","cpp","py","java"]
for (const key in programming) {
    console.log(key);
}
// o/p:
// 0
// 1
// 2
// 3
for (const key in programming) {
    console.log(programming[key]);
}
//o/p:
// js
// cpp
// py
// java
