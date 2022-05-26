import { NgModule } from '@angular/core';
import { Cart } from './cart.model';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
  declarations: [],
  providers: [ProductRepository, StaticDataSource, Cart],
  imports: [],
  bootstrap: []
})
export class ModelModule { }
