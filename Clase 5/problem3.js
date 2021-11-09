 function suma (numero) {
     let array = [10, 30, 40, 55, 60];
     console.log (array);
 

 

 const newArray = array.forEach(function(item, index) {
    array[index]= item + numero
})



 console.log (array); 
}
suma (20);