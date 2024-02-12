import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ConstantsService } from '../constants/constants.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  sendLoginOtp(formValue: any): Observable<any> {
    let request: any = {
      payload: {
        countryCode: formValue.countryCode,
        customerMobile: formValue.phone,
      }
    };
    return this.http.post<any>(ConstantsService.Site_Url+ "generateLoginOtp", request);
  }


  verifyLoginOtp(formValue: any, otp:string): Observable<any> {
    let request: any = {
      payload: {
        countryCode: formValue.countryCode,
        customerMobile: formValue.phone,
        customerOtp: otp
      }
    };
    return this.http.post<any>(ConstantsService.Site_Url+"verifyLoginOtp", request);
  }
}
