const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname:{
            firstname: "Dyuti",
            lastname: "Sharma"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e"}
const obj3 = {6:"d",7:"e"}

//const obj4 = Object.assign(obj1, obj2)
const obj4 = {...obj1, ...obj2}
//console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)
//console.log(obj5);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "js hindi",
    price : "999",
    couserInstructor:"hitesh"
}

//Obj Destructuring
const {couserInstructor: instructor} = course
//console.log(instructor);

// {
//     "coursename": "js hindi",
//     "price": "999",
//     "couserInstructor":"hitesh"
// }