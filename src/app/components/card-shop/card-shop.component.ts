import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css'],
})
export class CardShopComponent {
  faCartShopping = faCartShopping;
  faCircleXmark = faCircleXmark;
  isOpen: boolean = false;
  overlayTrigger() {
    this.isOpen = !this.isOpen;
  }
}
