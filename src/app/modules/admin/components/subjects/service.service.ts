import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


private  dataEmitter = new Subject<{email:any, password: any}>();


data$= this.dataEmitter.asObservable();

  constructor() { }

  raisedServiceEmitterEvent(email: any, password: any){
    this.dataEmitter.next({email,password})
  }
}
