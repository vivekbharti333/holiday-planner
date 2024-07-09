import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { ConstantsService } from '../constants/constants.service'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  backToList:any = new Subject();
  

  constructor(
    private http: HttpClient,
  ) { }

  doBooking(bookingValue: any): Observable<any> {
    console.log("Booking Values : "+bookingValue.areaFrom);
    let request: any = {
      payload: {
        // vehicleType:"WATER-SPORT",
        // vehicleDetailsType: bookingValue.vehicleName,
        // vehicleName: bookingValue.vehicleName,
        // vehicleBrand: bookingValue.vehicleName,
        // customerMobile: bookingValue.customerMobile,
        // countryCode: bookingValue.countryCode,
        // areaFrom: bookingValue.areaFrom,
        // areaTo: bookingValue.areaTo,
        // fromDate: bookingValue.fromDate,
        // toDate: bookingValue.toDate
      }
    };
    return this.http.post<any>( ConstantsService.Site_Url+"vehicleBookingByApp", request);
    // return this.http.post<any>( "http://65.108.75.119:6080/vehicle/generateLoginO", request);
  }

}
