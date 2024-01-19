import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  showPayment:boolean= true;
  paid:boolean = true;
  paymentMethods:any[] = [
    {img:'assets/payment/credit-card.svg', label:'Credit Card',caption:'Credit Card'},
    {img:'assets/payment/paypal.svg', label:'PayPal',caption:'PayPal'},
    {img:'assets/payment/payu.svg', label:'PayU Money',caption:'PayU Money'},
    {img:'assets/payment/paytm.svg', label:'Paytm',caption:'Paytm'},
  ];
  constructor(private _router:Router){}

  submit(){

  }
  showBooking(){
    this._router.navigate(['/home', {data:'booking'}]);
  }
}
