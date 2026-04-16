// A Module in Angular is a container that groups related components, directives, pipes, and services together.

// 👉 In simple words:
// Module = Collection of related building blocks

// 🔹 Why Modules are Used
// Organize application into logical parts
// Improve code maintainability
// Enable lazy loading
// Help manage dependencies

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],   // Components
  imports: [BrowserModule],       // Other modules
  providers: [],                 // Services
  bootstrap: [AppComponent]      // Starting component
})
export class AppModule {}


// 🔹 Types of Modules
// Root Module → Main module (AppModule)
// Feature Module → Specific feature (e.g., UserModule)
// Shared Module → Reusable components
// Core Module → Singleton services