import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent {
  picker: any;
  public bookingForm !: FormGroup;
  public activeUrlSegments: any;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private router: Router,
    // private http: HttpClient
  ) {}

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.bookingForm = this.fb.group({
      city:[''],
      customerName: [''],
      customerMobile: [''],
      countryCode: [''],
      areaFrom: [''],
      areaTo: [''],
      fromDate: [''],
      toDate: [''],
      pickupTime: [''],
      deliveryTime: [''],
      vehicleType: [''],
      vehicleDetailsType: [''],
      vehicleName: [''],
      vehicleBrand: [''],
      createdBy: [''],
      createdbyName: ['']
    });
  }

//   bookDetails(){
//     console.log(this.bookingForm.value);
//     let expiredDate = new Date();
//     expiredDate.setDate(expiredDate.getDate() + 1);
//     this.cookieService.set('bookingDetails', JSON.stringify(this.bookingForm.value), expiredDate);

//     this.activeUrlSegments = this.route.snapshot.url.map(segment => segment.path);
    
//     // Now you can use this.activeUrlSegments as needed, for example:
//     if (this.activeUrlSegments.length > 0) {
//       const firstSegment = this.activeUrlSegments[0];
//       const secondSegment = this.activeUrlSegments[1];

//       console.log('First Segment:', firstSegment);
//       console.log('Second Segment:', secondSegment);

//       this.bookingForm.get('vehicleName')!.setValue(secondSegment); // Non-null assertion here

//       console.log(this.bookingForm.value);

//       this.getBookingDetails();
//   }
// }

bookDetails(){
  console.log("Entyer 1");
  let loginDetails = this.cookieService.get('loginDetails');
  console.log("Entyer 2 : "+loginDetails);
  if (loginDetails === null || loginDetails === ' ') {
    // insert mobile no into form
    // call booking api
    //

    console.log("Entyer 3");
   }else{

    console.log("Entyer 4")

    let expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() + 1);
    this.cookieService.set('bookingDetails', JSON.stringify(this.bookingForm.value), expiredDate);
    console.log("Entyer 5")
    this.activeUrlSegments = this.route.snapshot.url.map(segment => segment.path);
    
    // Now you can use this.activeUrlSegments as needed, for example:
    if (this.activeUrlSegments.length > 0) {
      const firstSegment = this.activeUrlSegments[0];
      const secondSegment = this.activeUrlSegments[1];
      console.log("Entyer 6")
      this.bookingForm.get('vehicleName')!.setValue(secondSegment); // Non-null assertion here
      console.log("Entyer 7")
     this.router.navigate(['/login']);
   }

    this.getBookingDetails();
}
}

getBookingDetails() {
  console.log("enter hai")
  let details = this.cookieService.get('bookingDetails');
  console.log("Cookies : "+details)
  if (details) {
    return JSON.parse(details);
  } else {
    return { 'userId': '', 'fullName': '', 'mobileNo': '', 'memberType': '' };
  }
}

}

