let array = [2,3,4,5]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element);
}

array.forEach(element => {
    //console.log(element);
});

array.forEach((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
})

// while (condition) {   
// }

// do {
// } while (condition);

// for (const val of array) {
//     console.log(val);
// }

//--------------------------------------------Maps-------------------------------------------------------------------

const map = new Map()
map.set('IN', "India")
map.set('US', 'United States')
map.set('Fr', 'France')

for (const [key,value] of map) {
    console.log(key, ':-' , value);
}

const myObj = {
    game1 : 'NFS',
    game2 : 'SpiderMan'
}

// for (const game of myObj) {
//     console.log(game);
// }

for (const key in myObj) {
    console.log(`${key} : ${myObj[key]}`);
}


// For of loop accesses values directly and not works for objects but works for maps

// For in loop accesses keys directly and works for objects but not for maps


