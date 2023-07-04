import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit{

  newForm!: FormGroup;

  constructor(private _service: ServiceService) {}

  ngOnInit(): void {
    this.newForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmmit() {
    console.log(this.newForm.value)
    if (this.newForm.valid) {
      const { email, password} = this.newForm.value;
      this._service.raisedServiceEmitterEvent(email,password)
      this.newForm.reset()
    }
    
  }

}
