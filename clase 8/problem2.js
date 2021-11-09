/*Teniendo en cuenta la misma conferencia anterior, necesitamos saber quienes son los desarrolladores con mayor edad.
return ==>
[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
*/
var mayorEdad = 0

const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 60, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 65, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 65, language: 'PHP' },
  ]; 
  var newArray = []
  for (i=0;i<list1.length;i++) {
        if (list1[i].age > mayorEdad) {
        mayorEdad = list1[i].age;
        
      }  
    }
    for (j=0;j<list1.length;j++) {   
        if (list1[j].age == mayorEdad)   {
          newArray.push (list1[j])
       }
      
      }

       console.log (newArray); 
  
  
