import { IProduct } from '../interfaces/product.interface';
import { StatusType } from '../types/status.type';
import { StatusEnum } from '../enums/status.enum';

export class Product implements IProduct {
    public id: number;
    public status: StatusType;
    constructor(
        public name: string,
        public description: string,
        public price: number
    ) {
        this.id = Math.floor(Math.random() * (999 - 100) + 100);
        this.status = StatusEnum.ForSale;
    }
}