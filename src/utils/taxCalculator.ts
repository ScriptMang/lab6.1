import {Product} from '../models/Product.ts'

export function calculateTax(item: Product){
    return item.getPriceWithTax();
}