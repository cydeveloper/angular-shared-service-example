import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductShopComponent } from './product-shop.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProductShopComponent
    ],
    exports: [
        ProductShopComponent
    ]
})

export class ProductShopModule { }