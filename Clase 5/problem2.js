const array1 = ([1, 2, 3, 4, 5, 6]);
const array2 = ([0, 1, 2, 3]);


function deleteElements (array) {
    var lengthArray = array.length
    if (lengthArray > 5)  {
        
     array.splice (lengthArray - 3, lengthArray);
     console.log (array, "Este es el nuevo array"); 
 }
    else  {
        console.log ("Solo recibe arreglos con mas de 5 elementos");
    }
    
}
deleteElements (array1);
deleteElements (array2); 