import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { WatersportsComponent } from '../watersports/watersports.component';
import { CruiseComponent } from '../cruise/cruise.component';
import { AdventuresComponent } from '../adventures/adventures.component';
import { CombosComponent } from '../combos/combos.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { DetailedComponent } from '../hotels/detailed/detailed.component';


const routes: Routes = [
  {path:'', component:LandingComponent},
  { path: 'home/:tabName', component: LandingComponent, children: [
    {path: ':hotelName', component: DetailedComponent}
  ]},
  // { path: 'home/:tabName/:hotelName', component: DetailedComponent},
  {path:'show-list', component:HotelsComponent},
  {path:'show-list-watersports', component:WatersportsComponent},
  {path:'show-list-watersports/:hotelName', component: DetailedComponent},
  {path:'show-list-cruises', component:CruiseComponent},
  {path:'show-list-adventures', component:AdventuresComponent},
  {path:'show-list-combos', component:CombosComponent},
  {path:'show-reviews', component:ReviewsComponent},
  {path:'water-sports-in-baga', component:DetailedComponent},
  {path:'water-sports-in-calangute', component:DetailedComponent},
  {path:'water-sports-in-candolim', component:DetailedComponent},
  {path:'water-sports-in-baina', component:DetailedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
