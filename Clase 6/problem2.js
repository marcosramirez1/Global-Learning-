/*Hubo una conferencia de programación hace poco y necesitamos saber quienes fueron las personas 
que estuvieron en el evento.
Sabemos que la información está guardada en un array de objetos.
Necesitamos saber cuántas personas de “Europa” asistieron */



const list = [
      { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
      { firstName: 'Carla', country: 'Tahiti', continent: 'Asia', age: 28, language: 'JavaScript' },
      { firstName: 'Maria' , country: 'Taiwan', continent: 'Asia'  , age: 35, language: 'HTML' } ,
      { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' } 
      ];
      
      var counter = 0
      
      for (i = 0; i < list.length; i++) {
            if (list[i].continent == 'Asia') {
                  counter++;     
            }
      }
      console.log (counter)