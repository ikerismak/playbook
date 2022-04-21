const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log(explorers);

console.log("------- EJEMPLO 1: FOR EACH PARA CADA NAME----------");
console.log("");
console.log("");

explorers.forEach(element => {

    console.log(element.name);

})




console.log("------- EJEMPLO 2: FOR EACH PARA CADA STACK----------");
console.log("");
console.log("");


explorers.forEach(element2 => {
    console.log(element2.stack);
})



console.log("------- EJEMPLO 3: USAR MAP PARA CREAR UNA NUEVA LISTA DE STACKS ----------");
console.log("");
console.log("");



let explorerStacks = explorers.map(stacks => stacks.stack)

console.log(explorerStacks);




console.log("------- EJEMPLO 4: OBTEN UNA LISTA DE EXPLORERS QUE TENGAN EN SU STACK JS FILTER INCLUDES ----------");
console.log("");
console.log("");

const stackJs = explorers.filter( element3 =>
    element3.stack.includes("js")
)


console.log(stackJs);