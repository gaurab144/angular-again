import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  education: string[] = ['SEE', 'Diploma', 'Intermidate', 'Graduate', 'Master'];
  employeeForm: FormGroup;

  constructor(private _fb: FormBuilder){
    this.employeeForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  onFormSubmit(){
    console.log(this.employeeForm.value)
  }
}
