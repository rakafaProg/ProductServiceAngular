export class Product {
    id: number;
    name: string;
    minAmount: number;
    maxAmount:number;
    inStock: number;
    price: number;

    constructor(pId, pName, pMinAmuont, pMaxAmount, pInStock, pPrice ) {
        this.id = pId;
        this.name = pName;
        this.minAmount = pMinAmuont;
        this.maxAmount = pMaxAmount;
        this.inStock = pInStock;
        this.price = pPrice;
    }
}
