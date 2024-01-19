import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cruise',
  templateUrl: './cruise.component.html',
  styleUrls: ['./cruise.component.scss']
})
export class CruiseComponent {
  
  private _albums: any = [];
  showListing:boolean= true;
  showDetails:boolean= false;
  activeUrl: any;
  filters:any = {
    search:'DIVEIN, GOA',
    founded:'2014 Jan',
    Office: 'Vadco',
    type:'Any Home'
  }
  hotels: any = [
    {
      pageUrl:'Dinner Cruise',
      name:'Dinner Cruise',
      location:'Panjim Jetty',
      actualAmount:'1800.00',
      amount:'1000.00',
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
        {icon:'lunch_dining', text:'Meals'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'local_taxi', text:'Transport'},
        
      ]
    },
    {
      name:'Sunset Cruise',
      location:'Panjim Jetty',
      actualAmount:'600.00',
      amount:'500.00',
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
        {icon:'schedule', text:'1 Hour'},
        {icon:'surfing', text:'Music & Dance'},
        {icon:'photos', text:'Sightseeing'},
        
        
      ]
    },
    {
      name:'Party Cruise',
      location:'Calangute/Baina',
      actualAmount:'600.00',
      amount:'500.00',
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
        {icon:'schedule', text:'1 Hour'},
        {icon:'surfing', text:'Music & Dance'},
        {icon:'photos', text:'Sightseeing'},
           
        
      ]
    },
   
    
  ]

  constructor(private _lightbox: Lightbox, private _service:MainService, private router: Router, private route: ActivatedRoute) {
  }

  goToDetail(activitiesUrl: string){
    this.activeUrl = activitiesUrl;

    this.router.navigate([activitiesUrl], { relativeTo: this.route });
  }


  ngOnInit(){
    this._service.backToList.subscribe((res:any)=>{
      this.showListing = true;
    })
  }


 
  
}
