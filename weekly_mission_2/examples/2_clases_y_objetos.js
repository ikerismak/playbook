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



class MissionCommander {

    constructor(name,mission){

        this.name = name
        this.mission = mission
        this.students = 0 
        this.lives = 0

    }


    get getStudents(){

        return this.students
    }

    get getLives(){
        
        return this.lives
    }
    
    set setStudents(students){

        this.students = students
    }

    set setLives(lives){
        this.lives = lives
      }

}


console.log("Ejemplo 7: Setters para modificar los atributos del objeto")



const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default

console.log("Ejemplo 7: actualizamos los atributos por medio de los setters")

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default









console.log("");
console.log("#------Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto------#");
console.log("");




class Toolbox {

    static getMostUsefulTools(){

        return ["command line", "git", "Text Editor"]
    }
}



console.log("Ejemplo 8: Métodos static")
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function




console.log("");
console.log("#------ HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes ------#");
console.log("");

console.log("");
console.log("#------Ejemplo  9: Herencia entre dos clases ------#");
console.log("");


class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }

  console.log("Ejemplo  9: Herencia entre dos clases")
  const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
  console.log(carloDev)


// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre


class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName)



console.log("");
console.log("#------ Ejemplo 10: Overrinding methods ------#");
console.log("");



class Explorer{
    constructor(name, username, mission){
     this.name = name
     this.username = username
     this.mission = mission
    }
  
    getNameAndUsername(){
     return `Explorer ${this. name}, username: ${this.username}`
    }
  }


  class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
      super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
      this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }
  
    getGeneralInfo(){
      let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
      // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
      return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
  }


const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
    console.log("Ejemplo 10: Overrinding methods")
    console.log(viajero1)
    console.log(viajero1.getNameAndUsername()) // Método de la clase padre
    console.log(viajero1.getGeneralInfo()) // Método de la clase hija