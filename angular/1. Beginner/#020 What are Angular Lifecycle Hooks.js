// 🔹 What are Angular Lifecycle Hooks?

// Angular Lifecycle Hooks are special methods that Angular calls at different stages of a component’s life.


// 🔹 Main Lifecycle Hooks
// 1. ngOnChanges

// 👉 Called when input properties change

// ngOnChanges() {
//   console.log("Input changed");
// }


// 2. ngOnInit

// 👉 Called once after component is initialized

// ngOnInit() {
//   console.log("Component initialized");
// }


// 3. ngDoCheck

// 👉 Called during every change detection cycle

// ngDoCheck() {
//   console.log("Change detected");
// }


// 4. ngAfterContentInit

// 👉 After content (ng-content) is initialized

// 5. ngAfterContentChecked

// 👉 After content is checked

// 6. ngAfterViewInit

// 👉 After component view (HTML) is initialized

// 7. ngAfterViewChecked

// 👉 After view is checked

// 8. ngOnDestroy

// 👉 Before component is destroyed (cleanup)

// ngOnDestroy() {
//   console.log("Cleanup");
// }




// 🔹 Lifecycle Flow (Order)
// 1 ngOnChanges
// 2 ngOnInit
// 3 ngDoCheck
// 4 ngAfterContentInit
// 5 ngAfterContentChecked
// 6 ngAfterViewInit
// 7 ngAfterViewChecked
// 8 ngOnDestroy


// 🔹 Important Use Cases
// API calls → ngOnInit
// Detect input changes → ngOnChanges
// Cleanup → ngOnDestroy