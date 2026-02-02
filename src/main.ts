import { PhysicalProduct } from './models/PhysicalProduct.ts';
import { DigitalProduct } from './models/DigitalProduct.ts';
import { Product } from './models/Product.ts';
import { calculateTax} from './utils/taxCalculator.ts'

const computer = new PhysicalProduct("123456", "computer", 500, 50);
const  software = new DigitalProduct("789113","gannt-chart software", 20, 800);
const productList: Array<Product> = [computer, software]; 

let totalCost: number = 0; 
for (let item of productList){
    console.log(item.displayDetails());
    let weight: string = (item as PhysicalProduct).weight;
    let fileSize: string = (item as DigitalProduct).fileSize;
    
    if (weight !== undefined) {
        console.log(`${item.name} has a weight of ${weight}`);
    }

    if (fileSize !== undefined){
        console.log(`${item.name} has a file-size of ${fileSize}`);
    }
}

console.log(`The total cost items: ${totalCost}`);