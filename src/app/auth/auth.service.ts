import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }



  sendLoginOtp(formValue: any): Observable<any> {
    let request: any = {
      payload: {
        countryCode: formValue.countryCode,
        customerMobile: formValue.phone,
      }
    };
    return this.http.post<any>( "http://65.108.75.119:6080/vehicle/generateLoginOtp", request);
  }


  verifyLoginOtp(formValue: any, otp:string): Observable<any> {
    let request: any = {
      payload: {
        countryCode: formValue.countryCode,
        customerMobile: formValue.phone,
        customerOtp: otp
      }
    };
    return this.http.post<any>( "http://65.108.75.119:6080/vehicle/verifyLoginOtp", request);
  }


}
