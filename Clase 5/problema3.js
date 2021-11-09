//Teniendo un arreglo numérico, tenemos que sumarle un número (por parámetro) a cada elemento de nuestro arreglo
const array = [0, 1, 2, 3, 4, 5];

function sumar (number) {
    const set = array.forEach (function (item, index) {
 array [index] = item + number
    } )
    console.log (array);
}

sumar (9);