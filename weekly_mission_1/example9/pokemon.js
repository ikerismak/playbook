// logger.js


class Pokemon {
  
    constructor(name) {
        this.name = name;
    }

    sayHello(){

        console.log(`Mi pokemon ${this.name} te saluda!!`);
    }

    sayMessage(message){

        console.log(`Mi pokemon ${this.name} dice: ${message}`);

    }

}



module.exports = Pokemon














    // exports.sayHello = (message,Pokemon) => {
    //     console.log(`Mi pokemon ${Pokemon} ${message} te saluda!!`)
    //   }
      
    //   // Esta es una función que se guardara en este módulo como verbose
    // exports.sayMessage = (message,Pokemon) => {
    //     console.log(`Mi pokemon ${Pokemon}  dice: ${message}`)
    //   }
      