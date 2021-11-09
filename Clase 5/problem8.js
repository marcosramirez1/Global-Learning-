/* Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento 
como el primero
El lobo solo puede comer a la oveja que tiene a su derecha

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (ESTE ES EL FRENTE DE LA FILA)
   7      6      5      4      3            2      1


*/

const array = ['sheep7', 'sheep6', 'sheep5', 'sheep4', 'sheep3', 'wolf', 'sheep2', 'sheep 1']

const array1 = array.map (function (item) {
array [item] > 'wolf' 
console.log (array.splice (a , array [item] ))

} )
console.log (array1); 
/*for (i = 0; i < array.length; i++) {
    if (array [i] > 'wolf') 
    const newArray = array.slice (i, i )
    return newArray 

}
*/
