import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductSharedService } from './services/product-shared.service';
import { ProductInventoryModule } from './components/product-inventory/product-inventory.module';
import { ProductShopModule } from './components/product-shop/product-shop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductInventoryModule,
    ProductShopModule
  ],
  providers: [
    ProductSharedService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }