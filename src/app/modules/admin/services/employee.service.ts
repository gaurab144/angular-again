import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:3000/employee'

  constructor(private _http: HttpClient) { }

  addEmployee(data:any): Observable<any> {
    return this._http.post(this.url, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(this.url);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employee/${id}`,data)
  }

  deleteenmployee(id: number) {
    return this._http.delete(`http://localhost:3000/employee/${id}`);
  }

}