// 👉 One-Line Interview Answer:
// toSignal() converts an Observable into a Signal, while toObservable() converts a Signal into an Observable.


// 🔥 What are toSignal() and toObservable()?

// 👉 In simple words:

// toSignal() → RxJS ➝ Signal
// toObservable() → Signal ➝ RxJS




// 🔹 toSignal() (Observable → Signal)

// 👉 Used when you want to use RxJS data in Signals

// import { toSignal } from '@angular/core/rxjs-interop';

// data$ = this.http.get('/api/data');

// dataSignal = toSignal(data$, { initialValue: [] });   
// <p>{{ dataSignal() }}</p>

// ✔ No subscribe needed
// ✔ Works like signal



// 🔹 toObservable() (Signal → Observable)

// 👉 Used when you want to use signal in RxJS

// import { toObservable } from '@angular/core/rxjs-interop';

// count = signal(0);

// count$ = toObservable(this.count);
// count$.subscribe(value => console.log(value));

// ✔ Works with RxJS operators


// | Function       | Conversion          |
// | -------------- | ------------------- |
// | toSignal()     | Observable → Signal |
// | toObservable() | Signal → Observable |



// 🔹 When to use?

// ✔ toSignal():

// Use API data in UI easily
// Replace subscribe with signals

// ✔ toObservable():

// Use signals with RxJS operators
// Combine with streams





// initialValue is required in toSignal() because a Signal must always have a value, while an Observable may not emit immediately.

// 🔥 Why initialValue is needed?

// 👉 In simple words:

// Signal → always has value ✔
// Observable → may emit later ❌

// 👉 So Angular needs a default value until data arrives.



// 🔹 Problem without initialValue ❌
// data$ = this.http.get('/api/data');
// dataSignal = toSignal(data$);

// 👉 API takes time → no value yet
// 👉 Signal needs value immediately → ❌ error / undefined issue


// 🔹 With initialValue ✅
// dataSignal = toSignal(data$, { initialValue: [] });

// ✔ Signal gets default value
// ✔ Later updates when API responds
