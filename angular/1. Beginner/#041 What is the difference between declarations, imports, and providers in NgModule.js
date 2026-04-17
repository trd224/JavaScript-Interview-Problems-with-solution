// 🔹 Difference between declarations, imports, and providers in NgModule

// 👉 declarations are used to register components, directives, and pipes, imports are used to bring in other modules, and providers are used to register services for dependency injection.


// 🔹 Comparison Table

// | Property     | Purpose                | Used For                        |
// | ------------ | ---------------------- | ------------------------------- |
// | declarations | Declare app components | Components, Directives, Pipes   |
// | imports      | Import other modules   | Angular modules (Forms, Router) |
// | providers    | Register services      | Services (DI)                   |



// 🔹 Example

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { DataService } from './data.service';

// @NgModule({
//   declarations: [AppComponent],  // components
//   imports: [BrowserModule, FormsModule], // modules
//   providers: [DataService], // services
//   bootstrap: [AppComponent]
// })
// export class AppModule {}



// 🔹 Key Points
// declarations → UI elements
// imports → external modules
// providers → services (DI system)