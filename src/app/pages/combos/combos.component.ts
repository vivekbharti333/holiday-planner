import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})
export class CombosComponent {
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
      name:'Scuba, Watersports & Grand Island',
      location:'Calangute/Baina',
      actualAmount:'2500.00',
      amount:'1700.00',
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
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'6 Hours'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'follow_the_signs', text:'Guide'},
        {icon:'local_taxi', text:'Transport'},
        
      ]
    },
    {
      name:'Advance Water Sports',
      location:'Calangute/Baina',
      actualAmount:'1800.00',
      amount:'1500.00',
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
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Boat Trips', icon:'directions_boat'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hours'},
        {icon:'follow_the_signs', text:'Guide'},
        {icon:'surfing', text:'Water Sports'},
        {icon:'person', text:'10+ Yrs'},
      ]
    },
    {
      name:'5 Water Sports',
      location:'Calangute/Baina',
      actualAmount:'1500.00',
      amount:'1200.00',
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
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Boat Trips', icon:'directions_boat'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hours'},
        {icon:'follow_the_signs', text:'Guide'},
        {icon:'surfing', text:'Water Sports'},
        {icon:'person', text:'10+ Yrs'},
      ]
    },
    
    {
      name:'Parasailing & Jetski',
      location:'Calangute/Baina',
      actualAmount:'2000.00',
      amount:'1400.00',
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
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Boat Trips', icon:'directions_boat'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hours'},
        {icon:'follow_the_signs', text:'Guide'},
        {icon:'surfing', text:'Water Sports'},
        {icon:'person', text:'10+ Yrs'},
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
