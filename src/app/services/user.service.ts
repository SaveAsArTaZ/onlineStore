import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  p: Product[] = [];
  choosedItems: BehaviorSubject<Product[]> = new BehaviorSubject(this.p);
  constructor() {}
}
