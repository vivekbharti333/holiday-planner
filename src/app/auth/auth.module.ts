import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import {NgxMatIntlTelInputComponent} from 'ngx-mat-intl-tel-input';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedMaterialModule,
    NgxMatIntlTelInputComponent
  ]
})
export class AuthModule { }
