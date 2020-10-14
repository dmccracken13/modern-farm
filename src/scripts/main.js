import { addPlant, usePlants } from "./field.js"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { plantSeeds } from "./tractor.js"



const yearlyPlan = createPlan()
console.log(yearlyPlan)

// console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

// const cornSeed = createCorn()
// console.log(cornSeed)
 
addPlant(asparagusSeed)
console.log(addPlant)

const newPlant = usePlants()
console.log(newPlant)

const = plantSeeds()
console.log()
