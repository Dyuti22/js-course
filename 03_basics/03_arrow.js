const user = {
    username : "Dyuti",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

//console.log(this); //In browser, `this` returns Window, but not in node

// function chai() {
//     let username = 'Dyuti'
//     console.log(this);
// }
// chai()


const chai =  () => {
    let username = 'Dyuti'
    console.log(this);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

//const addTwo = (num1, num2) => (num1+num2)
const addTwo = (num1, num2) => ({username : "Hitesh"})

console.log(addTwo());



