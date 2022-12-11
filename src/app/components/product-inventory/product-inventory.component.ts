import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interfaces/product.interface';
import { ProductSharedService } from '../../services/product-shared.service';
import { IProductForm } from '../../interfaces/product-form.interface';
import { Product } from '../../classes/product.class';

@Component({
    selector: 'product-inventory',
    templateUrl: './product-inventory.component.html'
})

export class ProductInventoryComponent implements OnInit {
    public productsData: IProduct[];
    public form: FormGroup;

    constructor(
        private productService: ProductSharedService,
        private fb: FormBuilder
    ) {
        this.productsData = new Array<IProduct>();

        this.form = this.fb.group<IProductForm>({
            name: new FormControl<string | null>('', Validators.required),
            description: new FormControl<string | null>('', Validators.required),
            price: new FormControl<number | null>(null, Validators.required)
        });
    }

    ngOnInit(): void {
        this.productService.productSharedData
            .subscribe({
                next: (data: IProduct[]) => this.productsData = data,
                error: err => console.log(err)
            });
    }

    public add(values: IProduct): void {
        if (this.form.valid) {
            this.productsData.push(new Product(values.name, values.description, values.price));
            this.productService.updateProductSharedData(this.productsData);
            this.form.reset();
        }
    }

    public delete(index: number): void {
        this.productsData.splice(index, 1);
        this.productService.updateProductSharedData(this.productsData);
    }
}