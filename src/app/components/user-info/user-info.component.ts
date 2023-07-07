import { Component } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  faCaretDown = faCaretDown;
  isOpen: boolean = false;
  overlayTrigger() {
    this.isOpen = !this.isOpen;
  }
}
