import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HeaderComponent } from './shared/components/header/header.component';
import { LandingComponent } from './shared/components/landing/landing.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FirebaseService } from './shared/services/firebase.service';
import { SignInComponent } from './shared/pages/sign-in/sign-in.component';
import { ProductCategoriesComponent } from './shared/pages/product-categories/product-categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, // Add RouterModule here
    SignInComponent,
    HeaderComponent,
    LandingComponent,
    CategoriesComponent,
    ProductCategoriesComponent,
    AboutUsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product-Catalog';

  constructor(private firebaseService: FirebaseService) {}
}
