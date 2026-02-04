import { Product } from './Product.ts'

interface DiscountableProduct {
    applyDiscount():number;
}

export class PhysicalProduct extends Product implements DiscountableProduct {
    _weight: number;
    _quantity: number;

    constructor(sku: string, name: string, price: number, weight: number, quantity: number) {
        super(sku, name, price);
        this._weight = weight;
        this._quantity = quantity;
    }

    getPriceWithTax(): number {
        return this.price * 1.10;
    }

    applyDiscount(): number {
        return  this.price - (this.price * .25);
    }

    get weight(): string {
        return `${this._weight} kg`;
    }

}