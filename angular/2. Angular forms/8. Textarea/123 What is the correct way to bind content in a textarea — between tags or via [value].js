// In Angular (and HTML in general), the correct way to bind a <textarea> is by putting the value between the tags or using Angular forms — NOT [value].

// ❌ Wrong way: [value] on textarea
// <textarea [value]="message"></textarea>

// 👉 This is NOT recommended in Angular because:

// It does not properly support two-way binding
// It can break updates when value changes dynamically
// Angular forms ignore it in most cases
// ✅ Correct way 1: Interpolation between tags (basic HTML style)
// <textarea>{{ message }}</textarea>

// ✔ Works, but:

// read-only behavior in many cases
// not good for user input binding
// ✅ Correct way 2 (BEST): Angular binding
// 🔹 Template-driven
// <textarea [(ngModel)]="message" name="message"></textarea>
// 🔹 Reactive form
// <textarea formControlName="message"></textarea>

// ✔ This is the correct Angular way



// 🧠 Why [value] is wrong for textarea?

// Because <textarea> is a special form control:

// It does NOT behave like <input>
// Its value is stored in inner text, not attribute

// So Angular handles it through:

// ngModel
// FormControl
// or inner content binding



// 💡 Simple explanation

// | Method            | Correct?   | Why                    |
// | ----------------- | ---------- | ---------------------- |
// | `[value]`         | ❌ No       | Not supported properly |
// | `{{ message }}`   | ⚠️ Partial | display only           |
// | `[(ngModel)]`     | ✅ Yes      | proper 2-way binding   |
// | `formControlName` | ✅ Yes      | reactive form standard |
