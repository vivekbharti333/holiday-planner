import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent {
  
  private _albums: any = [];
  showListing:boolean= true;
  showDetails:boolean= false;
  filters:any = {
    search:'DIVEIN, GOA',
    founded:'2014 Jan',
    Office: 'Vadco',
    type:'Any Home'
  }
  hotels: any = [
    {
      name:'Bungee Jumping',
      location:'Vadaval, Goa',
      actualAmount:'4999.00',
      amount:'4500.00',
      guests:'1',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/01.png', thumbImage:'assets/watersports/01.png', caption:'watersports'},
        {image:'assets/watersports/02.png', thumbImage:'assets/watersports/02.png', caption:'watersports'},
        {image:'assets/watersports/03.png', thumbImage:'assets/watersports/03.png', caption:'watersports'},
        {image:'assets/watersports/04.png', thumbImage:'assets/watersports/04.png', caption:'watersports'},
        {image:'assets/watersports/05.png', thumbImage:'assets/watersports/05.png', caption:'watersports'}
      ],
      amenities:[
        {name:'3 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'3 Hours'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'local_taxi', text:'Transport'},
        
      ]
    },
    {
      name:'Dudhsagar Fall Trip',
      location:'Querin, Goa',
      actualAmount:'1999.00',
      amount:'1600.00',
      guests:'1',
      ratings:'4.8',
      img: [
        {image:'assets/watersports/01.png', thumbImage:'assets/watersports/01.png', caption:'watersports'},
        {image:'assets/watersports/02.png', thumbImage:'assets/watersports/02.png', caption:'watersports'},
        {image:'assets/watersports/03.png', thumbImage:'assets/watersports/03.png', caption:'watersports'},
        {image:'assets/watersports/04.png', thumbImage:'assets/watersports/04.png', caption:'watersports'},
        {image:'assets/watersports/05.png', thumbImage:'assets/watersports/05.png', caption:'watersports'}
      ],
      amenities:[
        {name:'3 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'lunch_dining', text:'Meal'},
        {icon:'Music & Dance', text:'Jeep Safari'},
        {icon:'transfer_within_a_station', text:'Hotel Pick-Up & Drop'}, 
      ]
    },

  ]

  constructor(private _lightbox: Lightbox, private _service:MainService) {

  }
  ngOnInit(){
    this._service.backToList.subscribe((res:any)=>{
      this.showListing = true;
    })
  }
}
