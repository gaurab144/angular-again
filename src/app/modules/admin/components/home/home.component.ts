import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'email', 'education', 'company', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // for edit selecting row data
  selectedEmployee: any = {};

  // for edit form to show
  editForm: FormGroup = new FormGroup({});

  constructor(private _empservice: EmployeeService, private _fb: FormBuilder, private _formDataService: FormDataService) { }

  ngOnInit(): void {
    this.initForm();
    this.getEmployeeList();

    this._formDataService.getFormData().subscribe((formData) => {
      if (formData) {
        this.selectedEmployee = { ...formData };
        this.editForm.patchValue(formData);
      }
    });
  }

  initForm() {
    this.editForm = this._fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      education: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  getEmployeeList() {
    this._empservice.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEmployee(data: any) {
    // this.selectedEmployee = { ...data };
    this._formDataService.setFormData(data)
  }

  deleteEmployee(id: number) {
    this._empservice.deleteenmployee(id).subscribe({
      next: (res) => {
        alert('employee deleted');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  // saveItem() {
  //   console.log(this.selectedEmployee);

  //   if (this.editForm.valid) {
  //     const id = this.selectedEmployee.id;
  //     const updatedData = this.editForm.value;

  //     // Update the selectedEmployee object with the form values
  //     this.selectedEmployee.firstName = updatedData.firstName;
  //     this.selectedEmployee.email = updatedData.email;
  //     this.selectedEmployee.education = updatedData.education;
  //     this.selectedEmployee.company = updatedData.company;

  //     this._empservice.updateEmployee(id, updatedData).subscribe({
  //       next: (res) => {
  //         console.log('Employee updated successfully');

  //         this.selectedEmployee = {};
  //         this.editForm.reset();

  //         // Fetch the updated employee list
  //         this.getEmployeeList();
  //       },
  //       error: (err) => {
  //         console.error('Error updating employee:', err);
  //       }
  //     });
  //   }
  // }

  saveItem() {
    if (this.selectedEmployee) {
      this._empservice.updateEmployee(this.selectedEmployee.id, this.selectedEmployee).subscribe({
        next: (val: any) => {
          alert('employee is updated');

          // Set the form data using the FormDataService
          this._formDataService.getFormData()
          this.getEmployeeList()
          // this.selectedEmployee.reset();
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }
}
