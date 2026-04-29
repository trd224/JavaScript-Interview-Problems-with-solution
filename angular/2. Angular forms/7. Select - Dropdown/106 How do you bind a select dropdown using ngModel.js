// A select dropdown is bound using ngModel by attaching it to the <select> element and using value or [ngValue] on <option>.

// ✅ Example (Template-driven Form)
// TS
// export class AppComponent {
//   countries = ['India', 'USA', 'UK'];

//   selectedCountry = 'USA'; // ✅ default selected
// }
// HTML
// <form #form="ngForm">

//   <select name="country" [(ngModel)]="selectedCountry">
//     <option value="">Select Country</option>

//     <option *ngFor="let country of countries" [value]="country">
//       {{ country }}
//     </option>
//   </select>

//   <p>Selected: {{ selectedCountry }}</p>

// </form>
// ✅ Output
// Selected: USA
// ✅ Example with Objects (Important)
// TS
// export class AppComponent {
//   users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' }
//   ];

//   selectedUser = this.users[0]; // ✅ default object
// }
// HTML
// <select name="user" [(ngModel)]="selectedUser">
//   <option *ngFor="let user of users" [ngValue]="user">
//     {{ user.name }}
//   </option>
// </select>

// <p>Selected: {{ selectedUser.name }}</p>
// ⚡ One-line (your style)

// Use [(ngModel)] on <select> and [value]/[ngValue] on <option> to bind dropdown values.