// 🔹 What is Resolve Guard in Angular?

// 👉 Resolve is a route guard used to fetch data before a route is activated so that the component loads with ready data.

// 🔹 Why It Is Used
// Preload data before navigation
// Avoid empty/loading state in UI
// Improve user experience





// 🔹 Example

// import { Injectable } from '@angular/core';
// import { Resolve } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class DataResolver implements Resolve<any> {

//   resolve(): Observable<any> {
//     return this.http.get('/api/data');
//   }
// }

// Route Configuration

// {
//   path: 'dashboard',
//   component: DashboardComponent,
//   resolve: { data: DataResolver }
// }


// Access Data in Component

// import { ActivatedRoute } from '@angular/router';

// constructor(private route: ActivatedRoute) {
//   console.log(this.route.snapshot.data['data']);
// }



// 🔹 Key Points
// Runs before route loads
// Fetches required data
// Passes data to component