import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-watercombodetailed',
  templateUrl: './watercombodetailed.component.html',
  styleUrls: ['./watercombodetailed.component.scss']
})
export class WatercombodetailedComponent {
  showBookingDetails:boolean = false;
  imageObject: any[] =[
    {
      image: 'assets/hotels/1.webp',
      thumbImage: 'assets/hotels/1.webp',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    },
    {
      image: 'assets/hotels/1.webp',
      thumbImage: 'assets/hotels/1.webp',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    },
    {
      image: 'assets/hotels/1.webp',
      thumbImage: 'assets/hotels/1.webp',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    }
  ]

  details:any =
    {
      name:'Scuba & Water Sports Combo',
      location:'Calangute/Baina',
      ratings:'4.5',
      rated:'1.5k',
      telephone:'09087007744',
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Videos & Photos', icon:'photos'},
        {name:'Boat Trips', icon:'directions_boat'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'}
      ],
      about: [
        {para:'The first company to book all your water sports activities online. It saves a lot of time when you plan your travel and adventure activities way ahead of time. Dive in offers various water sports activities and adventure island trips. Also, it helps you explore the unexplored places in Goa. We are just a call away to help you plan your trip. Explore from the huge list of things to do in Goa'},
        {para:'DiveIn is one of the most trusted water sports & scuba diving company in Goa.'}
      ],
      additional: [
        {name:'Location', icon:'map'},
        {name:'Reviews', icon:'hotel_class'},
        {name:'Photos', icon:'photo_library'},
        {name:'Similar', icon:'content_copy'}
      ]
    }

    constructor(private _service:MainService){

    }

    backTolist(){
      this._service.backToList.next('true');
    }
}
