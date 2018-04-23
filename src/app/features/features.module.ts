import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FeaturesRoutingModule
  ],
  declarations: [FeaturesComponent]
})
export class FeaturesModule { }
