//Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 11, 23, 5, 3)

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2024-01-14")

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


console.log(myDate.toLocaleString('defaut',{
    weekday: "long"
}))

