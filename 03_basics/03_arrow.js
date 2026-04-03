const user = {
    username : "manish",
    price : 99,
    welcomemessage : function(){
        console.log(`${this.username} , welcome to this website`); //this used for refercing the current context
        console.log(this); // this return all the context of the obejct "user"
         
    }
}
// user.welcomemessage() // -> manish , welcome to this website
// user.username="hitesh" // here we are switching the context 
// user.welcomemessage() //-> hitesh , welcome to this website

// console.log(this); // -> this give "{}"" because in node global environment current context is empty , but if we run this in browser it will give "window" as output because in browser window in global object
 
// -------------- Now let us understand the difference between the function and object

//-----------------normal function
 
// function chai(){
//     let username = "manish"
//     console.log(this.username);
// }
// chai() //-> undefined because "this" context can be work within objects only not function 

//-----------------normal function (another method of defining function)

// const chai = function(){
//     let username = "manish";
//     console.log(this.username);  // output -> undefined => because "this" context can be work within objects only
//     // console.log(this); // this will give a very big output   
// }
// chai() 


//----------- arrow function
const chai = () =>{
    let username = "manish";
    //console.log(this.username);  // -> undefined
    console.log(this);  // -> {}
    
}
chai()

// basic differnce between the arrow function and normal function is that in both cases when we run "console.log(this.username);" then o/p -> undefined but when we run "console.log(this);" output are diffrents  

//--- basic syntax of arrow function () => {}

// we can define arrow function by two ways :

//---first(basic arrow function)
// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(2,3));

//---second (implicit return)
// const addtwo = (num1,num2) => num1+num2 // not need of "return" keyword because here we don't use "{}" , so basically we use return when we have use "{}"
// console.log(addtwo(5,7));
// const myname = (name) => ({username:"manish"}) //here we treating object as element 




