import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { FormDataService } from '../../services/form-data.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  education: string[] = ['SEE', 'Diploma', 'Intermediate', 'Graduate', 'Master'];
  employeeForm: FormGroup;

  get colors(): FormArray{
    return this.employeeForm.get('colors') as FormArray
  }

  constructor(private _fb: FormBuilder, private _empservice: EmployeeService, private _formDataService: FormDataService){
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
      colors: this._fb.array([
        this._fb.group({
          rgb:'',
          // bw:'',
        })
      ])
    });

  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      this._empservice.addEmployee(this.employeeForm.value).subscribe({
        next: (val: any) => {
          alert('employee is added');
          
          // Set the form data using the FormDataService
          this._formDataService.setFormData(this.employeeForm.value);
          this.employeeForm.reset();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

removeColor(i: any) {
  this.colors.removeAt(i)
}

addArray() {
  this.colors.push(this._fb.group({rgb:''}))
}
  
}
