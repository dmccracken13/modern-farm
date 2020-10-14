import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn"
import { createPotato } from "./seeds/potato"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (planArray) => {
    for(row of planArray) {
        for(crop of row) {
            if (crop === 'Asparagus') {
            addPlant(createAsparagus())
            }   
            else if (crop === 'Corn') {
            addPlant(createCorn())
            }   
            else if (crop === 'Potato') {
            addPlant(createPotato())
            }  
            else if (crop === 'Soybean') {
            addPlant(createSoybean())
            } 
            else if (crop === 'Sunflower') {
            addPlant(createSunflower())
            }
            else if (crop === 'Wheat') {
            addPlant(createWheat())
            }         
        }
        
    }
}
