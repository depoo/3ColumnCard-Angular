import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LuxuryCardComponent } from './components/luxury-card/luxury-card.component';
import { SedansColumnComponent } from './components/sedans-column/sedans-column.component';
import { SuvsColumnComponent } from './components/suvs-column/suvs-column.component';


import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LuxuryCardComponent,
    SedansColumnComponent,
    SuvsColumnComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LuxuryCardComponent,
    SedansColumnComponent,
    SuvsColumnComponent,
  ]
})
export class ColumCardModule { }
