import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
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
      this.products = this.ProductSort(this.products);
      for (let p of this.products) {
        let pi = this.container.createComponent(ProductItemComponent);
        pi.instance.product = p;
      }
    });
    this.productService.selectedProduct.subscribe((selected: string) => {
      this.container.clear();
      if (selected === 'allCategory') {
        for (let p of this.products) {
          let pi = this.container.createComponent(ProductItemComponent);
          pi.instance.product = p;
        }
      } else {
        let newProduct = this.products.filter((p) => p.type === selected);
        for (let p of newProduct) {
          let pi = this.container.createComponent(ProductItemComponent);
          pi.instance.product = p;
        }
      }
    });
  }
  ProductSort(products: Product[]) {
    return products.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
  }
}
