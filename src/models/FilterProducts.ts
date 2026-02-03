import {Product} from '../models/Product.ts';

class FilterProduct {
    filterByName: boolean
    filterByPrice: boolean    

    constructor(nameFlag: boolean, priceFlag: boolean) {
        this.filterByName = nameFlag;
        this.filterByPrice = priceFlag;
    }

    sortProducts(productList: Array<Product>): Array<Product> {
        for (let i= 0; i < productList.length; i++) {
            let elemA: Product = productList[i] || new Product("123456", "placeholderA", 4); 
            for (let j=i+1;  j < i; j--) {
                if (this.filterByPrice) {
                    let elemB: Product = productList[j] || new Product("450385", "placeholderB", 34);
                    if (elemB.price > elemA.price) {
                        let tempElem = elemB;
                        productList[j] = elemA;
                        productList[i] = tempElem;
                    }
                }
            }
        }
       return productList;
    }
    
}