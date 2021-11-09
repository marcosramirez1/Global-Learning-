// Hay un arreglo con varios números donde todos son iguales excepto uno
// Haga una función que lo identifique


const array = [1,1,1,1,2,1,1,1];
function findUniq (array) { 
const newArray = array.find (function(item) {
 return (array.indexOf(item) == array.lastIndexOf(item));
 
})
console.log (newArray) 
}
findUniq (array)





