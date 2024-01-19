import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { WatersportsdetailedpageComponent } from './pages/hotels/watersportsdetailedpage/watersportsdetailedpage.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, ReviewsComponent, WatersportsdetailedpageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
