import { Product } from './Product.ts'
export class PhysicalProduct extends Product {
    _weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this._weight = weight;
    }

    getPriceWithTax(): number {
        return this.price * 1.10;
    }

    get weight(): string {
        return `${this._weight} kg`;
    }

}