// # when we decalre as literals -> not singleton
// # when we declare as constructor -> singleton

// # Method to initialise the objects

Object.create // it is constructor method to create a object
// following is the another method :
const mysym = Symbol("key1")
const jsuser ={
    name :  "manish",
    "full name" : "manish kashyap", // this value can never be accessed by "." beacuse it is declared as string key
    [mysym] : "key1", // correct syntax to initialise a symbol in a object
    age : 23,
    email : "manish@gmail.com",
    isLoggedin : true,
    lastLoginDays : ["monday","saturday"]
}

// #method of accesing the obejct values 

/* Method 1  -> not much correct method of accessing */ console.log(jsuser.name); // here when we getting output with the help of "." then don't need to treat as string
/* Method 2  -> right nethod should be used */ console.log(jsuser["name"]); // this method treat the key as string
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
console.log(jsuser);

// change cam be made in obejct easily but the key should not be freezed -> after freezing a key no changes can be possible in it
// jsuser.email = "manish@gpt.com"
// console.log(jsuser.email);
// Object.freeze(jsuser)
// jsuser.email = "manish@microsoft.com" // this change can not be possible because of freezing of objects 
// console.log(jsuser.email);

jsuser.greeting = function(){
    console.log(`hello user,${this["full name"]}`);
    
}
//console.log(jsuser.greeting());






 




