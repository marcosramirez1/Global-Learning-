/*Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país 
de el primer desarrollador de cierto lenguaje que se haya inscripto.
return ('Python')==> Victoria from Puerto Rico was the first Python developer in the conference
return ('C#')==> There are no C# developers in the conference */


const list1 = [
  { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Java' },
  { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];
let flag = false;
function search (language) {
  
    for (i=0;i<list1.length;i++) {
      if (list1[i].language == language) {
        flag = true
         return console.log (""+list1[i].firstName+" from "+list1[i].country+" was the first "+list1[i].language+" developer in the conference");
      }
}
if (flag == false) {
  return console.log ( "There are no "+language+" developers in the conference")

}
}
search ('Java')