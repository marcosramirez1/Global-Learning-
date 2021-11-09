var arr1 = [1, 2]
var arr2 = [1, 8]

function arrayPlusArray(arr1, arr2) {
const newArray = arr1.concat (arr2)
var j = 0
    for (i=0;i<newArray.length;i++) {
         j+=newArray[i]; 
    
    }
    console.log (j);
}
arrayPlusArray (arr1, arr2)
 
