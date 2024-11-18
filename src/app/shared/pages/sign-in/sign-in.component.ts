import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../services/firebase.service';
import toastr from 'toastr';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  email = '';
  password = '';
  signUpName = '';
  signUpEmail = '';
  signUpPassword = '';
  confirmPassword = '';

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  async onSignIn() {
    try {
      const user = await this.firebaseService.signInWithEmailPassword(this.email, this.password);
      toastr.success('Logged in successfully!');
      this.router.navigate(['/']); // Redirect to home page
      window.scrollTo(0, 0); // Scroll to the top of the page
    } catch (error: any) {
      toastr.error(error.message || 'Sign-in failed.');
    }
  }

  async onSignUp() {
    if (this.signUpPassword !== this.confirmPassword) {
      toastr.error('Passwords do not match!');
      return;
    }

    try {
      const user = await this.firebaseService.signUpWithEmailPassword(this.signUpEmail, this.signUpPassword);
      toastr.success('Signed up successfully!');
      this.router.navigate(['/']); // Redirect to home page
      window.scrollTo(0, 0); // Scroll to the top of the page
    } catch (error: any) {
      toastr.error(error.message || 'Sign-up failed.');
    }
  }


  async onResetPassword() {
    try {
      await this.firebaseService.resetPassword(this.email);
      toastr.success('Password reset email sent.');
    } catch (error: any) {
      toastr.error(error.message || 'Failed to send reset email.');
    }
  }
}
