import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent {
  picker: any;
  public bookingForm !: FormGroup;
  public activeUrlSegments: any;
  public loginDetails: any;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private mainService: MainService,
    private router: Router,
    private toastr: ToastrService,
    // private http: HttpClient
  ) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.bookingForm = this.fb.group({
      city: [''],
      customerName: [''],
      customerMobile: [''],
      countryCode: [''],
      areaFrom: [''],
      areaTo: [''],
      fromDate: [''],
      toDate: [''],
      pickupTime: [''],
      deliveryTime: [''],
      vehicleQuantity: [''],
      vehicleType: [''],
      vehicleDetailsType: [''],
      vehicleName: [''],
      vehicleBrand: [''],
    });
  }

  bookDetails() {
    console.log("Entyer 1");
    let loginDetails = this.cookieService.get('loginDetails');
    console.log("Entyer 2 : " + loginDetails);
    if (loginDetails == null || loginDetails == ' ') {

      this.forNotLogin();
    } else {
      // this.forLogin();
      this.forNotLogin();
    }
  }

  // getBookingDetails() {
  //   console.log("enter hai")
  //   let details = this.cookieService.get('bookingDetails');
  //   console.log("Cookies : " + details)
  //   if (details) {
  //     return JSON.parse(details);
  //   } else {
  //     return { 'userId': '', 'fullName': '', 'mobileNo': '', 'memberType': '' };
  //   }
  // }

  forLogin() {
    this.activeUrlSegments = this.route.snapshot.url.map(segment => segment.path);
    if (this.activeUrlSegments.length > 0) {
      const firstSegment = this.activeUrlSegments[0];
      const secondSegment = this.activeUrlSegments[1];

      this.bookingForm.get('vehicleName')!.setValue(secondSegment); // Non-null assertion here

      //get login details from cookies
      const bookingDetailsString = this.cookieService.get('loginDetails');
      this.loginDetails = JSON.parse(bookingDetailsString);

      this.bookingForm.get('customerMobile')!.setValue(this.loginDetails['customerMobile']);
    }
    this.doBooking();

  }

  forNotLogin() {
    this.activeUrlSegments = this.route.snapshot.url.map(segment => segment.path);
    if (this.activeUrlSegments.length > 0) {
      const firstSegment = this.activeUrlSegments[0];
      const secondSegment = this.activeUrlSegments[1];

      this.bookingForm.get('vehicleName')!.setValue(secondSegment); // Non-null assertion here

      let expiredDate = new Date();
      expiredDate.setDate(expiredDate.getDate() + 1);
      this.cookieService.set('bookingDetails', JSON.stringify(this.bookingForm.value), expiredDate);

      this.router.navigate(['/login']);
    }

  }

  doBooking(){         
    this.mainService.doBooking(this.bookingForm.value)
      .subscribe({
        next: (response: any) => {
          if (response['responseCode'] == '200') {
            if (response['payload']['respCode'] == '200') {
             
              this.cookieService.delete('bookingDetails', '/');
              this.router.navigate(['/'])
              
            } else {
              this.toastr.error(response['payload']['respMesg'], response['payload']['respCode']);
            }
          } else {
            this.toastr.error(response['responseMessage'], response['responseCode']);
          }
        },
       error: (error: any) => this.toastr.error('Server Error', '500'),
        
      });
  }



}

