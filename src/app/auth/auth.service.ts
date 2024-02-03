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

<<<<<<< HEAD
  sendOtp(userDetails: any): Observable<any> {
    let request: any = {
      payload: {
        "countryCode":"+91",
        "customerMobile":userDetails.phone
        // requestFor: 'DROPDOWN',
        // token: this.loginUser['token'],
        // createdBy: this.loginUser['loginId'],
        // superadminId: this.loginUser['superadminId'],
      }
    };
    return this.http.post<any>( "generateLoginOtp", request);
  }
=======


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


>>>>>>> 7557cdb220a5fa3816ff290abf7b5893aeb4a195
}
