import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductInventoryComponent } from './product-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProductInventoryComponent
    ],
    exports: [
        ProductInventoryComponent
    ]
})

export class ProductInventoryModule { }