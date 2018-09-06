import { masterPComponent } from './masterP-component';
import { masterProutingmodule } from './masterP-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { MasterPComponent } from './master-p/master-p.component';
import { ListingProductComponent } from './listing-product/listing-product.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    masterProutingmodule,
  ],
  declarations: [masterPComponent, MasterPComponent, ListingProductComponent]
})
export class MasterPModule { }