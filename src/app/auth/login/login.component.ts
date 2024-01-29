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
  time:any = 60;
  showResend:boolean = false;


  constructor(private formBuilder:FormBuilder, private _router:Router, private cookieService: CookieService,){
    this.myForm = this.formBuilder.group({
      dialCode : [''],
      phone : [' '],
    })
  }

  getOtp() {
    var formValues = this.myForm.value;
    this.mobileNumber = formValues.phone;

    console.log("Mobile no.: "+this.mobileNumber)

    this.showLogin = false;
    this.startTimer();

  }

  submitPhone(){
    console.log("Enter submitPhone() and Otp is "+this.otp);
    if(this.otp=='11111'){

      let bookingDetails = this.cookieService.get('bookingDetails');
        if(bookingDetails != "" || bookingDetails != ""){
          this._router.navigate(['/'])
        }else{
          this._router.navigate(['/'])
        }
    }
  }
  resendOtp(){
    this.time=60;
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
