import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
