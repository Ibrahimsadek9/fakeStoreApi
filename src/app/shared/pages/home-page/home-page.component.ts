import { Component } from '@angular/core';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { LandingComponent } from '../../components/landing/landing.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
            LandingComponent,
            CategoriesComponent,
            AboutUsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
