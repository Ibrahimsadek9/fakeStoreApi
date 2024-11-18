# ProductCatalog
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Purpose of project
This is a simple e-commerce project that uses Firebase for user authentication and integrates with [FakeStoreAPI](https://fakestoreapi.com/) to display products and categories.

## Setup and Installation
1-Install dependencies: Run the following command to install the required dependencies:
  -npm install

2-Firebase Setup:
  -Create an account on Firebase: Firebase Sign-Up (https://firebase.google.com/)
  -Create a project on Firebase by following this guide (https://firebase.google.com/docs/web/setup) for step-by-step instructions.

3-Generate Firebase Service: Generate a service to interact with Firebase in your Angular project:
  -ng g s shared/services/firebase

4-Firebase Configuration in firebase.service.ts:
<!--
import { Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // Firebase configuration
  private firebaseConfig = {
    apiKey: 'YOUR_API_KEY',  // Replace with your API Key
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
    measurementId: 'YOUR_MEASUREMENT_ID',
  };

  // Initialize Firebase App
  private app = initializeApp(this.firebaseConfig);

  // Firebase Auth instance
  private auth = getAuth(this.app);

  // Signal to hold the user state
  public user = signal<User | null>(null);

  constructor() {
    // Monitor authentication state changes
    onAuthStateChanged(this.auth, (user) => {
      this.user.set(user);

      // Sync user state with localStorage for persistence
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  async signUpWithEmailPassword(email: string, password: string): Promise<User> {
    this.validateInputs(email, password);

    try {
      const response = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user.set(response.user);
      return response.user;
    } catch (error) {
      console.error('Error during sign-up:', error);
      throw error;
    }
  }

  async signInWithEmailPassword(email: string, password: string): Promise<User> {
    this.validateInputs(email, password);

    try {
      const response = await signInWithEmailAndPassword(this.auth, email, password);
      this.user.set(response.user);
      return response.user;
    } catch (error) {
      console.error('Error during sign-in:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.user.set(null);
      console.log('User logged out successfully.');
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }

  async resetPassword(email: string): Promise<void> {
    if (!this.validateEmail(email)) {
      throw new Error('Invalid email format. Example: example@gmail.com');
    }

    try {
      await sendPasswordResetEmail(this.auth, email);
      console.log('Password reset email sent successfully.');
    } catch (error) {
      console.error('Error during password reset:', error);
      throw error;
    }
  }

  private validateInputs(email: string, password: string): void {
    if (!this.validateEmail(email)) {
      throw new Error('Invalid email format. Example: example@gmail.com');
    }
    if (!this.validatePassword(password)) {
      throw new Error('Password must be at least 6 characters long.');
    }
  }

  private validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  private validatePassword(password: string): boolean {
    return password.length >= 6;
  }
}
-->
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

