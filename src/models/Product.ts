export class Product{
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `sku: ${this.sku} name: ${this.name} price: ${this.price}`;
    }

    getPriceWithTax(): number {
        return this.price * 1.17;
    }
}