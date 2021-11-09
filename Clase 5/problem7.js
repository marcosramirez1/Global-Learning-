/*Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes
adjacentElementsProduct ([9,5,10,2,24,-1]) ==> return (50)
*/
const array = ([9,5,10,2,24,-1]); 
var fede = 1;

for (i=0; i < array.length; i++) {
    const marcos = array [i] 
    const marce = marcos * array [i + 1]; 
           if (marce > fede) {
            fede = marce; 
           } 
        
    }
console.log (fede);