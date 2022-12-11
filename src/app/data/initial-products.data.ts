import { IProduct } from '../interfaces/product.interface';
import { Product } from '../classes/product.class';

const initialProducts: IProduct[] = [
    new Product('Product 1', 'My product 1 description..', 48.99),
    new Product('Product 2', 'My product 2 description..', 80.00),
    new Product('Product 3', 'My product 3 description..', 75.40)
];

export default initialProducts;