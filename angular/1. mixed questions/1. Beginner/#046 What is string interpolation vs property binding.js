// 🔹 Difference between String Interpolation and Property Binding

// 👉 String interpolation is used to display data inside HTML using {{ }}, while property binding is used to set DOM element properties using [ ].



// 🔹 Comparison Table

// | Feature      | Interpolation (`{{ }}`) | Property Binding (`[ ]`)      |
// | ------------ | ----------------------- | ----------------------------- |
// | Purpose      | Display data            | Set element properties        |
// | Syntax       | `{{ value }}`           | `[property]="value"`          |
// | Binding Type | One-way (TS → HTML)     | One-way (TS → DOM property)   |
// | Use Case     | Text content            | Attributes like src, disabled |


// 🔹 Example

// Interpolation

// <p>{{ name }}</p>

// Property Binding

// <img [src]="imageUrl">
// <button [disabled]="isDisabled">Click</button>