// Hereda del padre y le agrega cosas:

class Animal {
    constructor(patas, claseAnimal) {
        this.patas = patas;
        this.claseAnimal = claseAnimal;
    }

    movimiento() {
        console.log('Este animal se mueve en ' + this.patas + ' patas, pertenece al grupo de l@s ' + this.claseAnimal);
    }
}

// Con "extends" va a heredar lo que tiene "Animal":
class Pajaro extends Animal {
    constructor(patas, claseAnimal) {
        super(patas, claseAnimal);
    }

    volar() {
        console.log(' y además vuela.');
    }
}

// Podemos extender una clase que ya está extendida:
class Hornero extends Pajaro {
    constructor(patas, claseAnimal, volar) {
        super(patas, claseAnimal, volar)
    }
    hacerNido() {
        console.log(' y además hace niditos.');
    }
}

class OsoHormiguero extends Animal {
    constructor(patas, claseAnimal) {
        super(patas, claseAnimal)
    }

    comerHormigas() {
        console.log(' y además come hormigas.');
    }
}

let canario = new Pajaro(2, 'aves');
console.log(canario.movimiento(), canario.volar());

let juancito = new OsoHormiguero(4, 'mamíferos');
console.log(juancito.movimiento(), juancito.comerHormigas());

let hornerin = new Hornero(2, 'aves');
console.log(hornerin.movimiento(), hornerin.volar(), hornerin.hacerNido());