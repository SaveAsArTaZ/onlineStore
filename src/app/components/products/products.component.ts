import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  OnInit,
} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts.subscribe((products: Product[]) => {
      this.products = products;
      this.container.clear();
      for (let p of this.products) {
        let pi = this.container.createComponent(ProductItemComponent);
        pi.instance.product = p;
      }
      // console.log(this.products);
    });
  }
}
