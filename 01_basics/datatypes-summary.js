/*
    1. Primitive -> They are called by Value, Value is copied instead of memory reference 
        7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail = undefined


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigInt = 128867686932018464759293n
/*
    2. Reference (Non Primitive)
        Array, Objects, Functions
 */

//Dynamically Type

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "dyuti",
    age: 22
}

const myFunction = function () {
    console.log("Hello world")
}

console.log(typeof outSideTemp); //object
console.log(typeof heros); //object
console.log(typeof myFunction); //function Object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

let myName = "Dyutified" //Primitive => goes to stack

let anotherName = myName
anotherName = "DyutiFul"

console.log(anotherName);
console.log(myName);

let user = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = user

userTwo.email = "user2@google.com"

console.log(user);
console.log(userTwo);
