/*Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar un mensaje 
para cada persona que asista al evento la próxima vez. Para eso, nuestra tarea es tener 
una función que devuelva un array donde cada posición tiene un objeto 
con una nueva propiedad de nombre “greeting” o “bienvenida”. 
 { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?' }
*/

  const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  const list2 = [
    { firstName: 'Marcos', country: 'Argentina', continent: 'Americas', age: 35, language: 'JavaScript' },
    { firstName: 'Julian', country: 'Croatia', continent: 'Europe', age: 35, language: 'CSS' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  




function Bienvenida (list) {
for (i=0;i<list.length;i++) {
  list[i].greeting =  ("Hi "+list[i].firstName+", what do you like the most about "+list[i].language+"?")
} 
console.log (list);
}

Bienvenida (list1);
Bienvenida (list2);