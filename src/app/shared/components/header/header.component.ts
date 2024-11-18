import { Component, effect } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import toastr from 'toastr';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]  // Add CommonModule here
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(private firebaseService: FirebaseService, private router: Router) {
    // Effect to watch for changes in authentication state
    effect(() => {
      const user = this.firebaseService.user();  // Read the current user from signal
      this.isLoggedIn = !!user;
      console.log('User status updated:', this.isLoggedIn); // Log for debugging
    });
  }

  logout() {
    this.firebaseService.logout().then(() => {
      toastr.success('Logged out successfully!');
      this.router.navigate(['/']);  // Redirect to home after logging out
    }).catch((error) => {
      toastr.error('Error logging out: ' + error.message);
    });
  }

  navigateToLogin() {
    if (!this.isLoggedIn) {
      this.router.navigate(['/sign-in']);
    }
  }
}
