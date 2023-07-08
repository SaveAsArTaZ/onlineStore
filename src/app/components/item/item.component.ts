import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() product!: Product;
  ngOnInit(): void {}
}
