console.log("");
console.log("#------Ejemplo 1: crear una clase vacia------#");
console.log("");

class Person {

}

console.log("Ejemplo de clase vacia");
console.log(Person);



console.log("");
console.log("#------Ejemplo 2: Crear un objeto a partir de una clase------#");
console.log("");




class Pet{

}

const myPet1 = new Pet() // Puedo crear muchos objetos de la clase Pet

console.log("Ejemplo de un objeto a partir de una clase");
console.log(myPet1);







console.log("");
console.log("#------Ejemplo 3: Instanciar un objeto con atributos------#");
console.log("");

  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.

class Student {

    constructor(name,age,subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }

}

// Crear un objeto de la clase Student (esto se le llama instanciación)


const student1 = new Student("carlo",12,["node","python"]);
console.log(student1 );






console.log("");
console.log("#------Ejemplo 4: Métodos en los objetos------#");
console.log("");


class Repository {

    constructor(name,author, lenguage, stars){

        this.name = name
        this.author = author
        this.lenguage = lenguage
        this.stars = stars 

    }

    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase

        return `Repository ${this.name} has ${this.stars} stars`
 

    }
}


const myRepo = new Repository("Lista", "Pepe", "js", 12)

console.log(myRepo.getInfo());





console.log("");
console.log("#------Ejemplo 5: Atributos con valores por default------#");
console.log("");


class pullRequest { 

    constructor(repo,title,lines,changed_lines){

        this.repo = repo
        this.title = title
        this.lines = lines
        this.changed_lines = changed_lines

        this.status = "open"

        this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
	}



    getInfo(){

        return `this PR is the repo: ${this.repo} (status : ${this.status}) and was created on ${this.dateCreated}`
    }
    
}


console.log("Ejemplo 5: Atributos con valores por default")

const myPR1 = new pullRequest("launch","mi primer PR",100);
console.log(myPR1.getInfo());
console.log(myPR1);

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new pullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())









console.log("");
console.log("#------Ejemplo 6: Getters para acceder a los atributos del objeto------#");
console.log("");


class Ajolonauta {

    constructor(name,age,stack){


        this.name = name
        this.age = age
        this.stack = stack

        this.exercises_completed = 0
        this.exercises_todo = 99

    }

    // Podemos acceder a los atributos de esta clase
  get getExercisesCompleted() {
    return this.exercises_completed
}
}



console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])

console.log(woopa.getExercisesCompleted)











console.log("");
console.log("#------Ejemplo 7: Setters para modificar los atributos del objeto------#");
console.log("");
console.log("");
console.log("#------Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto------#");
console.log("");