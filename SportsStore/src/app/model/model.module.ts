import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
  declarations: [],
  providers: [ProductRepository, StaticDataSource],
  imports: [],
  bootstrap: []
})
export class ModelModule { }
