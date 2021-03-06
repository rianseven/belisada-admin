import { masterPComponent } from './masterP-component';
import { MasterProutingmodule } from './masterP-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { MasterPComponent } from './master-p/master-p.component';
import { ListingProductComponent } from './listing-product/listing-product.component';
import { ProposeComponent } from './propose/propose.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    MasterProutingmodule,
  ],
  declarations: [masterPComponent, MasterPComponent, ListingProductComponent, ProposeComponent],
})
export class MasterPModule { }
