import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  countries:any[] =[];
  selectedCountry:any ='';
  mobileNumber:string = '';
  showLogin: boolean = true;
  myForm:FormGroup;
  otp:any ='';
  time:any = 30;
  showResend:boolean = false;

  constructor(private formBuilder:FormBuilder, private _router:Router, private cookieService: CookieService,){
    this.myForm = this.formBuilder.group({
      phone : [' '],
    })
  }

  submitPhone(){
    console.log("Enter submitPhone() ");
    if(this.otp=='11111'){

      let bookingDetails = this.cookieService.get('bookingDetails');
        if(bookingDetails != "" || bookingDetails != ""){
          this._router.navigate(['/'])
        }else{
          this._router.navigate(['/'])
        }
    }
  }
  resetTimer(){
    this.time=30;
    this.showResend = false;
  }
  startTimer(){
    setInterval(() => {
      if(this.time > 0) {
        this.time= this.time-1
        if(this.time < 10){
          this.time = '0'+this.time;
        }
      }else{
        this.showResend = true;
      }
    }, 1000);

  }
}
