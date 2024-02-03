import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

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


  constructor(
    private formBuilder:FormBuilder,
    private _router:Router, 
    private cookieService: CookieService,
    private authService: AuthService)
    {
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

  public getOtp1() {
    // this.isLoading = true;
    var formValues = this.myForm.value;
    this.mobileNumber = formValues.phone;
    this.authService.sendOtp(this.myForm.value)
      .subscribe({
        next: (response: any) => {
          if (response['responseCode'] == '200') {
            if (response['payload']['respCode'] == '200') {
              console.log("ok hai")
              // this.toastr.success(response['payload']['respMesg'], response['payload']['respCode']);
              // this.addDonationForm.reset();
              // this.setValueInForm();
              // this.isLoading = false;
            } else {
              // this.toastr.error(response['payload']['respMesg'], response['payload']['respCode']);
              // this.isLoading = false;
            }
          } else {
            // this.toastr.error(response['responseMessage'], response['responseCode']);
            // this.isLoading = false;
          }
        },
        // error: (error: any) => this.toastr.error('Server Error', '500'),
        
      });
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
