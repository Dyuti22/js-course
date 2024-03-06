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
val1 = undefined ?? 12
val1 = null ?? 10 ?? 100
console.log(val1);