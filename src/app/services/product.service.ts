import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { ProductsComponent } from '../components/products/products.component';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  selectedProduct: BehaviorSubject<string> = new BehaviorSubject('');
  private apiUrl: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  public get getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
