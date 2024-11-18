import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and titlecase pipe

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    RouterModule, // For routing with routerLink
    CommonModule  // For *ngFor and titlecase pipe
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = []; // Array to store categories

  async ngOnInit(): Promise<void> {
    try {
      // Fetch categories using Axios and async/await
      const response = await axios.get<string[]>('https://fakestoreapi.com/products/categories');
      this.categories = response.data; // Assign API data to the categories array
    } catch (error) {
      console.error('Error fetching categories:', error); // Log errors if any
    }
  }
}
