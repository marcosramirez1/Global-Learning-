//Haga una función que reciba un número y retorne un arreglo que tenga el tamaño del número recibido.
//El contenido del arreglo deben ser números desde el 0 hasta el número recibido -1 (0 a n-1)

function miFuncion (number) {
    const array = [];
    for (i=0; i<number; i++) {
     array.push (i);
}
console.log (array);
}
miFuncion (5);

miFuncion (7);

miFuncion (10);