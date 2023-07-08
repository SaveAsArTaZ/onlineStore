import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  choosedItems: Subject<Product[]> = new Subject();
  constructor() {}
}
