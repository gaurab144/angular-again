import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  constructor(private auth: AuthService) {}
  
  toggleSidebar(){
    this.toggleSideBar.emit();
  }
  
  LogOut(){
    this.auth.logout();
  }

}
