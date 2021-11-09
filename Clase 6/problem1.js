class Heroe {
    name
    position
    life
    dano
    experience

    constructor (name) {
        this.name = name || 'Heroe';
        this.position = '00';
        this.life = 100;
        this.dano = 5;
        this.experience = 0;
    } }

const heroe = new Heroe ()
     
      console.log (heroe) 

