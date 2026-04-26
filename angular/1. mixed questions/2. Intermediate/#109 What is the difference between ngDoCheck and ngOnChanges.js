// 👉 One-Line Interview Answer:
// ngOnChanges is triggered when @Input properties change with new reference values, while ngDoCheck is triggered on every change detection cycle to detect custom or deep changes manually.


// 🔹 ngOnChanges

// 👉 Runs when @Input() value changes (new reference)

// Example

// @Input() name: string = '';

// ngOnChanges(changes: SimpleChanges) {
//   console.log('Input changed:', changes);
// }


// 🔹 Key Points
// Works only with @Input()
// Runs when reference changes
// Automatic detection
// Simple to use





// 🔹 ngDoCheck

// 👉 Runs on every change detection cycle

// Example

// ngDoCheck() {
//   console.log('Change detection running');
// }


// 🔹 Key Points
// Runs frequently (many times)
// Used for deep/custom change detection
// Manual logic required
// Powerful but heavy if misused




// | Feature     | ngOnChanges           | ngDoCheck                    |
// | ----------- | --------------------- | ---------------------------- |
// | Trigger     | @Input changes        | Every change detection cycle |
// | Type        | Automatic             | Manual                       |
// | Performance | Faster                | Slower if overused           |
// | Use case    | Simple input tracking | Deep/custom change detection |
