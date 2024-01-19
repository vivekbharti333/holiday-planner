import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder:FormBuilder, private _router:Router){
    this.myForm = this.formBuilder.group({
      phone : [' '],
    })
  }

  submitPhone(){
    if(this.otp=='11111'){
      this._router.navigate(['/home'])
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
