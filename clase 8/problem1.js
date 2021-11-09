/* Teniendo en cuenta la misma conferencia anterior, necesitamos saber si todas las personas registradas trabajan 
con el mismo lenguaje. Es decir, necesitamos que nuestra función devuelva True si todos los lenguajes son iguales, 
o que nos devuelva False si hay por lo menos uno que sea distinto
*/

const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Ruby' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Ruby' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }  
]
let flag = true
var i = 0
var j = i

function trueOrFalse (array) {
    for (i=0;i<list.length;i++) {
    if (list[i].language != list[j].language) {
        flag = false
   
    }
}
console.log (flag) 
} 
    trueOrFalse (list)
    