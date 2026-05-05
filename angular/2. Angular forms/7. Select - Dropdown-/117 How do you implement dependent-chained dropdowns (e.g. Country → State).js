// A dependent (chained) dropdown in Angular means the value of the second dropdown (State) depends on the first dropdown (Country). When the user changes Country, the State list is updated dynamically.

// ✅ 1. Simple Example (Template-driven / ngModel)
// 🔹 HTML
// <select [(ngModel)]="selectedCountry" (change)="onCountryChange()">
//   <option *ngFor="let c of countries" [value]="c.name">
//     {{ c.name }}
//   </option>
// </select>

// <select [(ngModel)]="selectedState">
//   <option *ngFor="let s of states" [value]="s">
//     {{ s }}
//   </option>
// </select>
// 🔹 TS
// countries = [
//   { name: 'India', states: ['Rajasthan', 'Maharashtra', 'Gujarat'] },
//   { name: 'USA', states: ['California', 'Texas', 'Florida'] }
// ];

// selectedCountry = '';
// selectedState = '';
// states: string[] = [];

// onCountryChange() {
//   const country = this.countries.find(c => c.name === this.selectedCountry);
//   this.states = country ? country.states : [];
//   this.selectedState = ''; // reset state
// }
// ✅ 2. Reactive Form Approach (Recommended)
// 🔹 HTML
// <form [formGroup]="form">
//   <select formControlName="country" (change)="onCountryChange()">
//     <option *ngFor="let c of countries" [value]="c.name">
//       {{ c.name }}
//     </option>
//   </select>

//   <select formControlName="state">
//     <option *ngFor="let s of states" [value]="s">
//       {{ s }}
//     </option>
//   </select>
// </form>
// 🔹 TS
// form = this.fb.group({
//   country: [''],
//   state: ['']
// });

// countries = [
//   { name: 'India', states: ['Rajasthan', 'Maharashtra', 'Gujarat'] },
//   { name: 'USA', states: ['California', 'Texas', 'Florida'] }
// ];

// states: string[] = [];

// onCountryChange() {
//   const selectedCountry = this.form.value.country;

//   const country = this.countries.find(c => c.name === selectedCountry);

//   this.states = country ? country.states : [];

//   this.form.patchValue({ state: '' });
// }
// 🚀 3. Better Approach (Using valueChanges – Auto Reactive)
// 🔹 TS (Advanced)
// ngOnInit() {
//   this.form.get('country')?.valueChanges.subscribe(value => {
//     const country = this.countries.find(c => c.name === value);

//     this.states = country ? country.states : [];

//     this.form.get('state')?.setValue('');
//   });
// }

// 👉 No manual (change) needed