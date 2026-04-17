// Subject is an RxJS observable that allows us to multicast values to multiple subscribers and manually emit values using next().

// BehaviorSubject is a special type of Subject that stores the latest value and immediately emits that value to new subscribers.



// 👉 Subject emits values only after subscription, while BehaviorSubject stores the latest value and immediately sends it to new subscribers.


// Simple difference:
// Subject
// No initial value
// New subscribers get only future values
// BehaviorSubject
// Requires an initial value
// New subscribers get latest (last) value instantly


// Example:

import { Subject, BehaviorSubject } from 'rxjs';

// Subject
const sub = new Subject();
sub.next(1);
sub.subscribe(x => console.log("Subject:", x)); // ❌ nothing printed
sub.next(2); // ✅ prints 2

// BehaviorSubject
const bsub = new BehaviorSubject(0);
bsub.next(1);
bsub.subscribe(x => console.log("BehaviorSubject:", x)); // ✅ prints 1 immediately
bsub.next(2); // ✅ prints 2



// 🔹 Key Difference 🔥
// Subject → No memory
// BehaviorSubject → Remembers last value