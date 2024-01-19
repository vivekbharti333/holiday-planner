import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
  private _albums: any = [];
  showListing:boolean= true;
  showDetails:boolean= false;
  filters:any = {
    search:'Manhattan, USA',
    checkin:'23rd Jul',
    checkout: '27th Jul',
    type:'Any Home'
  }
  list:any = [
    {
      name:'White Heaven Villa',
      location:'City Circle, Manhattan',
      amount:'120.00',
      guests:'2',
      ratings:'4.2',
      img: [
        {url:'assets/hotels/1.webp', caption:'hotel'},
        {url:'assets/hotels/2.webp', caption:'hotel'},
        {url:'assets/hotels/3.webp', caption:'hotel'}
      ],
      amenities:[
        {name:'WiFi', icon:'wifi'},
        {name:'AC', icon:'airware'},
        {name:'TV', icon:'tv'},
        {name:'Kitchen', icon:'restaurant'},
        {name:'Geyser', icon:'mode_heat'}
      ]
    },
    {
      name:'White Heaven Villa',
      location:'City Circle, Manhattan',
      amount:'120.00',
      guests:'2',
      ratings:'4.2',
      img: [
        {url:'assets/hotels/1.webp', caption:'hotel'},
        {url:'assets/hotels/2.webp', caption:'hotel'},
        {url:'assets/hotels/3.webp', caption:'hotel'}
      ],
      amenities:[
        {name:'WiFi', icon:'wifi'},
        {name:'AC', icon:'airware'},
        {name:'TV', icon:'tv'},
        {name:'Kitchen', icon:'restaurant'},
        {name:'Geyser', icon:'mode_heat'}
      ]
    },
    {
      name:'White Heaven Villa',
      location:'City Circle, Manhattan',
      amount:'120.00',
      guests:'2',
      ratings:'4.2',
      img: [
        {url:'assets/hotels/1.webp', caption:'hotel'},
        {url:'assets/hotels/2.webp', caption:'hotel'},
        {url:'assets/hotels/3.webp', caption:'hotel'}
      ],
      amenities:[
        {name:'WiFi', icon:'wifi'},
        {name:'AC', icon:'airware'},
        {name:'TV', icon:'tv'},
        {name:'Kitchen', icon:'restaurant'},
        {name:'Geyser', icon:'mode_heat'}
      ]
    },
    {
      name:'White Heaven Villa',
      location:'City Circle, Manhattan',
      amount:'120.00',
      guests:'2',
      ratings:'4.2',
      img: [
        {url:'assets/hotels/1.webp', caption:'hotel'},
        {url:'assets/hotels/2.webp', caption:'hotel'},
        {url:'assets/hotels/3.webp', caption:'hotel'}
      ],
      amenities:[
        {name:'WiFi', icon:'wifi'},
        {name:'AC', icon:'airware'},
        {name:'TV', icon:'tv'},
        {name:'Kitchen', icon:'restaurant'},
        {name:'Geyser', icon:'mode_heat'}
      ]
    }
  ]

  constructor(private _lightbox: Lightbox, private _service:MainService) {

  }
  ngOnInit(){
    this._service.backToList.subscribe((res:any)=>{
      this.showListing = true;
    })
  }

  // open(index: number): void {
  //   // open lightbox
  //   this._lightbox.open(this._albums, index);
  // }

  // close(): void {
  //   // close lightbox programmatically
  //   this._lightbox.close();
  // }
}
