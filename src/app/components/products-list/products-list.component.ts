import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { ProductResults } from '../../interfaces/product';
import { ProductsItemComponent } from '../products-item/products-item.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AsyncPipe, ProductsItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  public productsResults$!: Observable<ProductResults>;

  constructor(private service: ProductService) {}

  ngOnInit(): void{
    this.productsResults$ = this.service.getProductList();
  }

  update(name: string){
    console.log(name)
  }
  delete(name: string){
    console.log(name)
  } 
}
