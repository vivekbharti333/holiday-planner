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
}
