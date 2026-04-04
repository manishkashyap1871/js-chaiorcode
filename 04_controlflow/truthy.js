// falsy values : false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values : "0" , 'false' , " " ,[],  {} , function(){}

// let us understand these more by some example


//-----------example 1
// const useremail = ""
// if(useremail){
//     console.log("got user email");
// }else{
//    console.log( "don't have user email");
// }

// //----------example 2
// if(useremail.length===0){
//     console.log("array is empty");
// }

// // example 3
// const emptyobj = {}
// if(Object.keys(emptyobj).length===0){
//     console.log("empty object");
    
// }

// ------------------------Nullish coalescing operator (??) : null udefined

let val1;
// val1 = 5 ?? 10 // -> 5
// val1 = null ?? 10 // -> 10
// val1 = undefined ?? 15 // -> 15
val1 = null ?? 12 ?? 10 //-> 12 : first valid value should be choosed
// console.log(val1);

// --------------------------Terniary operator

// condition ? true : false
const iceteaprice = 100
iceteaprice <=80 ? console.log("price is 100") : console.log("price are more than 80");




