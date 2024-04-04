const userEmail = []

if(userEmail){
    console.log("got email");
}else{
    console.log("don't have email");
}

//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", "false", " ", [], {}, function(){}

//+++++++++++++++++++++++++++++++ Nullish Coalescing Opwrator (??) : null undefined ++++++++++++++++++++++++++++++//

let val1;
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 12
console.log(val1);
val1 = null ?? 10 ?? 100  // 1st of all the values which is not null or undefined
console.log(val1);