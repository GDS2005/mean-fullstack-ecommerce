import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { Product, ProductResults } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent implements OnInit {
  
  product: Product = {
    name: '',
    description: '',
    price: 0
  };

  constructor (private productService: ProductService, private router: Router) {}

  ngOnInit(): void {

  }

  addProduct() {
    const newProduct: Product = {
      name: 'Product Name',
      description: 'Product Description',
      price: 99.99
    };

    this.productService.create(newProduct).subscribe(
      response => {
        console.log('Product added successfully:', response);
        // Handle success
      },
      error => {
        console.error('Error adding product:', error);
        // Handle error
      }
    );
  }
}
