let a = 10
const b = 20
var c = 30


if (true) {
    let a = 10
    const b = 20
   // var c = 30
   //console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Dyuti"
    function two(){
        const website = "youtube"
        console.log(username);
    }

    //console.log(website);

    two()
}

//one()


const addTwo = function(num){
    return num +2
}

addTwo(5)


