import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formDataSubject = new BehaviorSubject<any>(null);

  constructor() { }

  setFormData(data: any) {
    this.formDataSubject.next(data);
  }

  getFormData() {
    return this.formDataSubject.asObservable();
  }
}

// In the above code, we use the BehaviorSubject from RxJS to create an observable that holds the form data. The setFormData() method is used to update the form data, and the getFormData() method returns the observable to subscribe to and get the form data.