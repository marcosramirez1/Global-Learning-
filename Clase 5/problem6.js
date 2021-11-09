/* Dado un arreglo de números enteros, encuentre la menor suma posible entre ellos
minSum([7,4,2,3]) ==> return (5)*/

const array = [1, 4, 2, 3, 7, 1]; 
var fede = 1000;



for (i=0; i< array.length; i++) {
   const marcos = array [i] 
    for (j = 0; j < array.length; j++) {
        if (i!=j) {
           const marce = marcos + array [j]; 
           if (marce < fede) {
            fede = marce; 
           } 

        }
        
    }
    
} 
console.log (fede);
