import { FormControl } from "@angular/forms";

export interface IProductForm {
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    price: FormControl<number | null>;
}