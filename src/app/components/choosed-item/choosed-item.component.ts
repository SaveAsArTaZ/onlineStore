import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/product';
import { ItemComponent } from '../item/item.component';
@Component({
  selector: 'app-choosed-item',
  templateUrl: './choosed-item.component.html',
  styleUrls: ['./choosed-item.component.css'],
})
export class ChoosedItemComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.choosedItems.subscribe((choosedItems: Product[]) => {
      this.container.clear();
      for (let p of choosedItems) {
        let pi = this.container.createComponent(ItemComponent);
        pi.instance.product = p;
      }
    });
  }
}
