const name = "Dyuti"
const repoCount = 50

console.log(name + repoCount + " Value"); //not recommended

console.log(`Hello my my name is ${name} and my repo-count is ${repoCount}`);

const gameName = new String('Dyuti');
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