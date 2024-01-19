import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuList:any =[
    {icon:'home',label:'home'},
    {icon:'task_alt',label:'Doc Verification'},
    {icon:'article',label:'Terms'},
    {icon:'live_help',label:'Need Help'},
    {icon:'hotel_class',label:'Rate us'},
    {icon:'power_settings_new',label:'Logout'}
  ]
}
