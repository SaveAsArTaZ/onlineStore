import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  public get getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
