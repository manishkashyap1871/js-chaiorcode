//-----> function intialisation
function saymyname(){
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}

// saymyname //--> it is just a reference of function : does not give any output just used for referencing
//saymyname() // --> it is execution of function 

function addtwonum(number1,number2){ //here number1 & number2 are parameters
    console.log(number1+number2);
}

// const result = addtwonum(2,4) //here 2 & 3 are arguments
// console.log("result",result); // output -> result undefined

// here comes the real problem -> we have not stored num1+num2 anywhere 

function addtwonum(num1,num2){
    return num1+num2
}
//const result = addtwonum(3,5)
// console.log("results :",result); // here we first return the reuslt in the function so it can be passed in the result

function loginuser(username /*= "sam"*/){ // here this "sam" is default value it can be used inplace of below if condition
    if(/* !username */ username===undefined){ // this if condition is used for checking whether the username is enter or not 
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuser());

//-----to handle mutiple input at a time
function calculationcartprice(val1,val2,...num1){ //here "..." is a rest operator to handle multiple inputs at the same time
    return num1
}
//console.log(calculationcartprice(200,400,500)); //when we use val1, val2 in parameters then it staring 2 values are stored in these two and rest is return in num1


//---------handling obejct inputs by function
const user ={
    username : "manish",
    price : 199
}

function handleobject(anyobject){
    console.log(`name is ${anyobject.username} and price is ${anyobject.price}`);    
}

//handleobject(user) //-this work on custom already exist output
//now handling function by generating new input
// handleobject({
//     username : "adhyan",
//     price : 100
// })


//---function to return the 2nd element of the array

const myArray = [200,300,400,500,600]

function returnSecondElement(getarray) {
    return getarray[1]
}

// console.log(returnSecondElement(myArray)); 
//console.log(returnSecondElement([1000,900,800,700,600]));