import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from '../home/home.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { DetailedComponent } from '../hotels/detailed/detailed.component';
import { NgImageSliderModule } from 'ng-image-slider-v16';
import { LightboxModule } from 'ngx-lightbox';
import { SharedMaterialModule } from 'src/app/shared-material/shared-material.module';
import { BookingComponent } from '../booking/booking.component';
import { AccountComponent } from '../account/account.component';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BookingDetailsComponent } from '../hotels/booking-details/booking-details.component';
import { WatersportsComponent } from '../watersports/watersports.component';
import { WatercombodetailedComponent } from '../watersports/watercombodetailed/watercombodetailed.component';
import { CruiseComponent } from '../cruise/cruise.component';
import { CombosComponent } from '../combos/combos.component';
import { AdventuresComponent } from '../adventures/adventures.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    BookingComponent,
    AccountComponent,
    DetailedComponent,
    HotelsComponent,
    NavbarComponent,
    BookingDetailsComponent,
    WatersportsComponent,
    WatercombodetailedComponent,
    CruiseComponent,
    CombosComponent,
    AdventuresComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedMaterialModule,
    LightboxModule,
    NgImageSliderModule,
  ]
})
export class LandingModule { }
