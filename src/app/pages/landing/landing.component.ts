import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  tabName:string ='';
  activeTabIndex:number=0;
  constructor(private _route:ActivatedRoute){

  }

  ngOnInit(){
    this._route.params.subscribe((params:any)=>{
      if(params.data == 'booking'){
        this.activeTabIndex = 1;
      }
    })
  }
}
