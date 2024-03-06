function addTwoNumbers(n1, n2){
    //console.log(n1+n2)
}

addTwoNumbers(3, 4)

function loginUserMessage(username = "User"){
    if(!username){
        console.log("Please enetr a valid user name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());
//onsole.log(loginUserMessage("Hitesh"));

function calculateCartPrice(val1, val2, ...num){ //rest operator
    return num;
}
//console.log(calculateCartPrice(200, 300, 400, 5677));

const user ={
    username: "Dyuti",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} & price is ${anyObject.price}`);
}

handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

const myNewArr = [233, 556, 738, 647]

function handleArr(anyArr){
    return anyArr[1]
}

console.log(handleArr(myNewArr));