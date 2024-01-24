import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent {
  
  currentRoute: string = '';

  constructor(private _service:MainService, private activatedRoute: ActivatedRoute, private router: Router){

    this.activatedRoute.params.subscribe((params: any)=>{
      console.log(params);
      this.currentRoute = router.url;
    }) 
  }

  showBookingDetails:boolean = false;
  showLoginPage: Boolean = false;
  
  imageObject: any[] =[
    {
      image: 'assets/watersports/01.png',
      thumbImage: 'assets/watersports/01.png',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    },
    {
      image: 'assets/watersports/02.png',
      thumbImage: 'assets/watersports/02.png',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    },
    {
      image: 'assets/watersports/03.png',
      thumbImage: 'assets/watersports/03.png',
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
      amount:'1700',
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Videos & Photos', icon:'photos'}
       // {name:'Boat Trips', icon:'directions_boat'},
       // {name:'Pickup & Drop', icon:'transfer_within_a_station'}
      ],
      about: [
        {para:'The activity guide will help you with detailed insight, basic techniques, and safety measure required in the trip beforehand Get comfortable transfers from North Goa and enjoy the long tail boat ride to Grand Island Spot dolphins playing and observe their activities in their natural habitat form Beat the heat by sipping up some refreshing soft drinks and beer during the trip Go for this amazing scuba Diving session at Grand Island and explore the untouched underwater beauty of the Arabian Sea'},
        {para:'DiveIn is one of the most trusted water sports & scuba diving company in Goa.'},
        {para:'Below listed are the inclusions for Water Sports & Scuba package:'}
      ],
      additional: [
        {name:'Location', icon:'map', link:''},
        {name:'Reviews', icon:'hotel_class', link:'show-reviews'},
        {name:'Photos', icon:'photo_library', link:''},
        {name:'Similar', icon:'content_copy', link:''}
      ],
      transfers:[
        { para:'Hotel Pick-Up and Drop-Off from Vagator, Anjuna, Arpora Junction, Baga, Calangute & Candolim.'},
        { para:'45 Minutes Long Tail Boat Ride to Grand Island Goa'}
      ],
      meals:[
        { para:'Snacks on Arrival'},
        { para:'Delicious Lunch'},
        { para:'Soft Drinks and 2 Complimentary Beers'}
      ],
      activities:[
        { para:'Scuba Diving (Up to 15 minutes)'},
        { para:'45 Minutes of Long Tail Boat Ride to Grand Island Goa'},
        { para:'Parasailing (45 Seconds to 1 Minute in the Air)'},
        { para:'Dolphin Sightseeing (Subject to Availability)'},
        { para:'Jet-Ski (Up to 200 Meters)'},
        { para:'Banana Ride (Up to 200 Meters)'},
        { para:'Bumper Ride (Up to 200 Meters)'},
        { para:'Scuba Diving Underwater Videography with GoPro'}
      ]
    }



    backTolist(){
      // this._service.backToList.next('true');
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }
}
