console.log(" EJEMPLOS CON OBJETOS");


console.log("### 1: crea un objeto vacio ###");
console.log("");
const myObjetc = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObjetc)


console.log("### 2: crea un objeto con propiedades ###");
console.log("");
const myObjetc2 = { // Esto es un objeto con propiedades
    name: "Carlo",
    age: 27
  }

console.log(myObjetc2);


console.log("### 3: crea un objeto con diferentes propiedades ###");
console.log("");

const myObject3 = {

    name: "tulio",
    age: 2,
    nicknames: [
        "tulipan",
        "tulancingo",
        "tulish"
    ],
    address: {
        zip_code : "1000",
        street: "Dr. vertiz 11 Benito Juarez",
        city: "CDMX"
    }



};

console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log(myObject3);
console.log(myObject3.name);
console.log(myObject3["address"]);


console.log("### 4: crea un objeto con metodos ###");
console.log("");


const pet = {
    address: "Mineria 2200",
    name: "tulio",
    // Esta es una funcion que se guarda como propiedad 
    sayHello: function(){
          // this.name hace referencia a la propiedad del objeto
          console.log(`${this.name} y ${this.address} te saluda en español!`)

    }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()



console.log("### 5: crea un objeto que recibe parametros ###");
console.log("");

const myPet = {
    name: "woopa",
    
    sayHelloToMyPet: function(yourPet){

        console.log(`${this.name} say's hello to ${yourPet}`)

    }
}



console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Tulio")