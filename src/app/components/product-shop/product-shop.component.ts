import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { StatusType } from '../../types/status.type';
import { ProductSharedService } from '../../services/product-shared.service';
import { StatusEnum } from '../../enums/status.enum';

@Component({
    selector: 'product-shop',
    templateUrl: './product-shop.component.html'
})

export class ProductShopComponent implements OnInit {
    public productsData: IProduct[];
    public statusSold: StatusType;

    constructor(private productService: ProductSharedService) {
        this.productsData = new Array<IProduct>();
        this.statusSold = StatusEnum.Sold;
    }

    ngOnInit(): void {
        this.productService.productSharedData
            .subscribe({
                next: (data: IProduct[]) => this.productsData = data,
                error: err => console.log(err)
            });
    }

    public buy(index: number): void {
        this.productsData[index].status = StatusEnum.Sold;
        this.productService.updateProductSharedData(this.productsData);
    }
}