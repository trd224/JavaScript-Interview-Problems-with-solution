// 🔹 What is Property Binding in Angular?

// Property Binding is a type of data binding used to bind data from the component (TypeScript) to an HTML element’s property.

// 👉 In simple words:
// Property Binding = Set HTML element properties dynamically from component

// 🔹 Syntax
// [property]="value"

export class AppComponent {
  imageUrl = "https://example.com/image.jpg";
}

// html
// <img [src]="imageUrl">