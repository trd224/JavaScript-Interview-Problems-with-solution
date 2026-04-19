// 👉 One-Line Interview Answer:
// shareReplay is an RxJS operator that shares one API call and reuses the same result for all subscribers, including new ones.

// 🔥 What is shareReplay?

// 👉 In simple words:
// It caches the last value and shares it with all subscribers.



// 🔹 Problem without shareReplay ❌

// this.http.get('/api/data').subscribe();
// this.http.get('/api/data').subscribe();

// 👉 API called 2 times ❌




// 🔹 Solution with shareReplay ✅

// data$ = this.http.get('/api/data').pipe(
//   shareReplay(1)
// );




// 🔥 Example with Two Components

// 👉 Scenario:
// We have Component A and Component B
// Both need same API data

// 🔹 1. Service (Important 🔥)

// @Injectable({ providedIn: 'root' })
// export class DataService {

//   data$ = this.http.get('/api/data').pipe(
//     shareReplay(1)
//   );

//   constructor(private http: HttpClient) {}
// }

// 🔹 2. Component A

// export class ComponentA {

//   constructor(private service: DataService) {}

//   ngOnInit() {
//     this.service.data$.subscribe(data => {
//       console.log('A:', data);
//     });
//   }
// }

// 🔹 3. Component B

// export class ComponentB {

//   constructor(private service: DataService) {}

//   ngOnInit() {
//     this.service.data$.subscribe(data => {
//       console.log('B:', data);
//     });
//   }
// }


// 🔥 What happens?

// 👉 Without shareReplay ❌

// Component A → API call  
// Component B → API call  

// ❌ API called 2 times


// 👉 With shareReplay(1) ✅

// Component A → API call  
// Component B → uses cached data  


// ✔ API called only once
// ✔ Both components get same data

// 🔹 New Subscriber Case

// 👉 If Component B loads later:

// ✔ Still gets last cached value
// ✔ No new API call