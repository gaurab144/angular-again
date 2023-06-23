import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  education: string[] = ['SEE', 'Diploma', 'Intermidate', 'Graduate', 'Master'];
  employeeForm: FormGroup;

  constructor(private _fb: FormBuilder, private _empservice: EmployeeService){
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
    if (this.employeeForm.valid){
      this._empservice.addEmployee(this.employeeForm.value).subscribe({
        next:(val: any) => {
          alert('employee is added')
        },
        error:(err: any) => {
          console.error(err)
        }
      })
    }
  }
}
