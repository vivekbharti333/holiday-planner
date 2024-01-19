import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  backToList:any = new Subject();
  constructor() { }
}
