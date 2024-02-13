const accountId = 144553
let accountEmail = "abc@email.com" 
var accountPassword = "122345"
accountCity = "Jammu"     // not recomended

let accountState

//Not Allowed
//accountId = 2


/*
Js didn't have a concept of scope while it was using var, that's why the var was introduced
Prefer not to use var
because of issue in block scope & functional scope
*/

accountEmail= "dyu@email.com"
accountPassword = "12345"
accountCity = "Jaipur"

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])