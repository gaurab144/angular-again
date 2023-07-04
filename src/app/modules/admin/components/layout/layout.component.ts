import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  myForm!: FormGroup;

  get address(): FormArray {
    return this.myForm.get('address') as FormArray
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:'',
      email: '',
      address: this.fb.array([
        this.fb.group({
          wodaNo:'',
          palika:'',
          state:''
        })
      ])
    }) 
   }


   removeAddress(i: any) {
    this.address.removeAt(i);
  }


  addArray() {
    this.address.push(this.fb.group({
      wodaNo:'',
      palika:'',
      state:''
  }))
  }

  onSubmmit() {
    console.log(this.myForm.value)
  }
}
