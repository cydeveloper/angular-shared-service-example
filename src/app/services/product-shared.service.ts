import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IProduct } from '../interfaces/product.interface';
import initialProducts from '../data/initial-products.data';

@Injectable()
export class ProductSharedService {
    private $productBS = new BehaviorSubject<IProduct[]>(initialProducts);
    public productSharedData = this.$productBS.asObservable();

    public updateProductSharedData(data: IProduct[]): void {
        this.$productBS.next(data);
    }
}