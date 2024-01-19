import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(private router: Router, private route: ActivatedRoute){

  }

  goToDetailedPage(hotelName: string){
    this.router.navigate([hotelName], { relativeTo: this.route });
  }

  goToService(link: string){

    this.router.navigate([link], {relativeTo: this.route})
  }

  name:string = 'Sam';
  location:string = 'Jaipur, Rajasthan';

  navOpen:boolean = false;
  hotelsOffers: any[] =[
    { 
      
      heading:"Water Sports in Goa",
      description:"Experience actual meaning of awesome",
      watersports:[
        {
          pageUrl:'water-sports-in-calangute',
          img:'01.png', name:'Calangute Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'}
          ]
        },
        {
          pageUrl:'water-sports-in-baga',
          img:'02.png', name:'Baga Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'water-sports-in-candolim',
          img:'03.png', name:'Candolim Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'water-sports-in-baina',
          img:'04.png', name:'Baina Beach Water Sports', location:'South Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'advance-WaterSports-in-baga',
          img:'05.png', name:'Arpora Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'advance-WaterSports-in-baga',
          img:'01.png', name:'Anjuna Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        }
      ]
    },
    {
      heading:"Cruising And Yatch Experience In Goa",
      description:"Cruising And Yatch Experience In Goa",
      watersports:[
        {
          pageUrl:'advance-WaterSports-in-baga',
          img:'01.png', name:'Party Cruise in Goa', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'}
          ]
        },
        {
          img:'02.png', name:'Sunset Cruise in Goa', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          img:'03.png', name:'Dinner Cruise In Goa', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          img:'04.png', name:'Yatch Experience In Goa', location:'South Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        }
        
      ]
    },
    {
      heading:"Exclusive Deals",
      description:"Grab exiting deals on your holiday bookings",
      watersports:[
        {
          img:'01.png', name:'Calangute Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'}
          ]
        },
        {
          img:'02.png', name:'Baga Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          img:'03.png', name:'Candolim Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          img:'04.png', name:'Baina Beach Water Sports', location:'South Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          img:'05.png', name:'Arpora Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          img:'01.png', name:'Anjuna Beach Water Sports', location:'North Goa', amount:'1000',
          features:[
            {icon:'schedule', text:'6 Hours'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            {icon:'local_taxi', text:'Transport'},
          ]
        }
      ]
    }
  ];
  
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
  services: any[]=[
    {icon:'surfing', name:'WaterSports', link:'show-list-watersports'},
    {icon:'directions_boat', name:'Cruises', link:'show-list-cruises'},
    {icon:'scuba_diving', name:'Adventures', link:'show-list-adventures'},
    {icon:'surfing', name:'Combos', link:'show-list-combos'},

  ];


}



