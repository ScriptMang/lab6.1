import { PhysicalProduct } from './models/PhysicalProduct.ts';
import { DigitalProduct } from './models/DigitalProduct.ts';
import { Product } from './models/Product.ts';
import { calculateTax} from './utils/taxCalculator.ts'

const computer = new PhysicalProduct("123456", "computer", 500, 50);
const  software = new DigitalProduct("789113","gannt-chart software", 20, 800);
const productList: Array<Product> = [computer, software]; 


for (let item of productList){
    let weight: string = (item as PhysicalProduct).weight;
    let fileSize: string = (item as DigitalProduct).fileSize;
    
    if (weight !== undefined) {
        console.log( item.displayDetails() + ` weight: ${weight}`);
        item.price = (item as PhysicalProduct).applyDiscount(); // 25% default discount for physical items
        console.log( "finalPrice w/ discount: " + calculateTax(item).toFixed(2));
    }

    if (fileSize !== undefined){
         console.log( item.displayDetails() + ` fileSize: ${fileSize}`);
        console.log( "finalPrice: " + calculateTax(item).toFixed(2));
    }



}