import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  constructor(private userService: UserService) {}
  @Input() product!: Product;
  addItem(): void {
    let newItems: Product[] = this.userService.choosedItems.getValue();
    console.log(newItems);
    newItems.push(this.product);
    this.userService.choosedItems.next(newItems);
    console.log(newItems);
  }
}
