//singleton
//Object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Dyuti",
    age: 23,
    location: "noida",
    email: "dyuti@google.com",
    isLoggedIn: false,
    lastLogindays : ["Monday","Tuesday"],
    "full name": "Dyuti Sharma",
    [mySym]: "myValue1"
}

// console.log(JsUser.name)
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "dyuti@netflix.com"
//Object.freeze(JsUser);
JsUser.email = "dyuti@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());