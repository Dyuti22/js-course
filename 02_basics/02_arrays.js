const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

// const  all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);

const all_new_heroes = [...marvel_heros, ...dc_heros]  ////... ->spread operator
//console.log(all_new_heroes);

const another_array = [1,2,3 [4,5,6], 7, [6,7,[8,9]]]

const real_another_array = another_array.flat