import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  filters:any =[]
  bookings: any = [
    {
      name:'Hyundai Elantra',
      id:'CZ23244525',
      location:'Old city church, Manhattan, New York',
      start:'Sat, 15 June, 5:30pm',
      end:'Tue, 18 June, 10:30pm',
      amount:'190.00',
      img: 'assets/car.png'
    },
    {
      name:'Hyundai Elantra',
      id:'CZ23244525',
      location:'Old city church, Manhattan, New York',
      start:'Sat, 15 June, 5:30pm',
      end:'Tue, 18 June, 10:30pm',
      amount:'190.00',
      img: 'assets/car.png'
    },
    {
      name:'Hyundai Elantra',
      id:'CZ23244525',
      location:'Old city church, Manhattan, New York',
      start:'Sat, 15 June, 5:30pm',
      end:'Tue, 18 June, 10:30pm',
      amount:'190.00',
      img: 'assets/car.png'
    }
  ];
  navOpen:boolean = false;

  openNav(){
    this.navOpen = true;
  }
}
