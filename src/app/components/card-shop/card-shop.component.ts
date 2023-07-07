import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.css'],
})
export class CardShopComponent {
  faCartShopping = faCartShopping;
  isOpen: boolean = false;
  overlayTrigger() {
    this.isOpen = !this.isOpen;
  }
}
