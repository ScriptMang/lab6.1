import { PhysicalProduct } from './models/PhysicalProduct.ts';
import { DigitalProduct } from './models/DigitalProduct.ts';
import { Product } from './models/Product.ts';
import { calculateTax} from './utils/taxCalculator.ts';
import { FilterProduct } from './models/FilterProducts.ts';

const computer = new PhysicalProduct("123456", "computer", 500, 50, 10);
const  software = new DigitalProduct("789113","gannt-chart software", 20, 800);
const productList: Array<Product> = [computer, software]; 


for (let item of productList){
    let weight: string = (item as PhysicalProduct).weight;
    let fileSize: string = (item as DigitalProduct).fileSize;
    let quantity: number = (item as PhysicalProduct).quantity;

    if (weight !== undefined) {
        console.log( item.displayDetails() + ` quantity: ${quantity}` + ` weight: ${weight}`);
         const oldPrice = item.price;
        item.price = (item as PhysicalProduct).applyDiscount(); 
        console.log( "finalPrice w/ discount: " + calculateTax(item).toFixed(2));
        item.price = oldPrice;
    }

    if (fileSize !== undefined){
         console.log( item.displayDetails() + ` fileSize: ${fileSize}`);
        console.log( "finalPrice: " + calculateTax(item).toFixed(2));
    }
}
console.log();
 const filterByPrice = new FilterProduct(false, true);
 const sortedList =  filterByPrice.sortProducts(productList);
 console.log("Sorted Product-List: ");
 sortedList.forEach(elem => {
    let weight: string = (elem as PhysicalProduct).weight;
    let fileSize: string = (elem as DigitalProduct).fileSize;

    if (weight !== undefined) {
        let quantity: number = (elem as PhysicalProduct).quantity;
        console.log(elem.displayDetails()+ ` quantity: ${quantity} ` + ` weight: ${weight}`);
    }

    if (fileSize !== undefined) {
         console.log(elem.displayDetails() + ` fileSize: ${fileSize}`);
    }
});