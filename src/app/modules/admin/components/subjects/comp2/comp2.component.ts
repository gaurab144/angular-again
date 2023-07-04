import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit{
  email!: any;
  password!: any;

  constructor(private _service: ServiceService) {}

  ngOnInit(): void {
    this._service.data$.subscribe( (result: { email: any; password: any; }) => {
      this.email= result.email;
      this.password= result.password
    })
  }

}
