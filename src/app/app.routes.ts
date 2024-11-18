import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { SignInComponent } from './shared/pages/sign-in/sign-in.component'; // Import SignInComponent
import { ProductCategoriesComponent } from './shared/pages/product-categories/product-categories.component';
import { CartComponent } from './shared/pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },  // Display HomePageComponent when the route is "/"
  { path: 'sign-in', component: SignInComponent },  // SignInComponent for "/sign-in"
  { path: 'products/category/:category', component: ProductCategoriesComponent },
  {path : 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
