// takeUntil is an RxJS operator that allows us to stop receiving values from one Observable when another Observable emits a value.

// 🔹 Simple Example (pure RxJS)

// import { interval, Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

// const stop$ = new Subject();

// interval(1000)
//   .pipe(takeUntil(stop$))
//   .subscribe(val => console.log(val));

// setTimeout(() => {
//   stop$.next(); // stops stream
// }, 3000);


// 👉 Output:

// 0
// 1
// 2
// (stops)


// 🔹 What actually happens
// interval emits values continuously
// takeUntil(stop$) listens to stop$
// When stop$ emits →
// stream completes
// subscription ends automatically