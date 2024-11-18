import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [
    CommonModule,   // Required for directives like *ngFor
    RouterModule    // Required for routerLink
  ],
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  category: string = ''; // To store the category name
  products: any[] = [];  // Array to store products in the category

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    // Retrieve the category from the route parameters
    this.category = this.route.snapshot.paramMap.get('category') || '';

    // Fetch products in the specific category
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${this.category}`);
      this.products = response.data; // Assign API data to the products array
    } catch (error) {
      console.error('Error fetching products:', error); // Handle errors
    }
  }
}
