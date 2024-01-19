import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { SharedMaterialModule } from 'src/app/shared-material/shared-material.module';


@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
