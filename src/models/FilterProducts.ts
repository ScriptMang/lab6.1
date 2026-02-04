import {Product} from '../models/Product.ts';
export class FilterProduct {
    filterByName: boolean
    filterByPrice: boolean    

    constructor(nameFlag: boolean, priceFlag: boolean) {
        this.filterByName = nameFlag;
        this.filterByPrice = priceFlag;
    }

    sortProducts(productList: Array<Product>): Array<Product> {
       return productList.sort((a: Product, b: Product) => a.price - b.price);
    }
}