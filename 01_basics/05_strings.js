const name = "Dyuti"
const repoCount = 50

console.log(name + repoCount + " Value"); //not recommended

console.log(`Hello my my name is ${name} and my repo-count is ${repoCount}`);

const gameName = new String('Dyuti-Sharma');
/*String {'Dyuti'} //as key-value pairs not array
0: "D"
1: "y"
2: "u"
3: "t"
4: "i"
length: 5

*/

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length); 

const newString = gameName.substring(0,4); //only positive values
console.log(newString)

const newString2 = gameName.slice(-8,2); //both +ve & -ve values
console.log(newString2)

const newString3 = "          Dyuti         "
console.log(newString3)
console.log(newString3.trim()) //trims blank spaces

const url = "https://dyutified.com/dyuti%20sharma" 
console.log(url.replace('%20', '-'));

console.log(url.includes('dyuti'))

console.log(gameName.split('-'));