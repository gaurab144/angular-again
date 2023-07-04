import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  providers: [ServiceService]
})
export class SubjectsComponent {
  newSet: any

  constructor(private _service: ServiceService) { }

  private newTime = new Observable(
    item => {
      setTimeout(() => {
        item.next('red')
      }, 1000)

      setTimeout(() => {
        item.next('blue')
      }, 2000)

      setTimeout(() => {
        item.next('kali')
      }, 3000)
    }
  ).subscribe(
    (res) => {
      console.log(res)
      this.newSet = res
    }
  );
}
