// 👉 One-Line Interview Answer:
// @HostBinding binds properties to the host element, and @HostListener listens to events on the host element in an Angular directive or component.


// 🔹 What is @HostBinding?

// 👉 It is used to bind a property to the host element (component itself).

// Example

// import { Directive, HostBinding } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   @HostBinding('style.color') color = 'red';
// }


// 👉 Here:

// Host element = element where directive is applied
// Text color becomes red automatically






// 🔹 What is @HostListener?

// 👉 It is used to listen to events on the host element

// Example

// import { Directive, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appHover]'
// })
// export class HoverDirective {

//   @HostListener('mouseenter')
//   onMouseEnter() {
//     console.log('Mouse Entered');
//   }

//   @HostListener('mouseleave')
//   onMouseLeave() {
//     console.log('Mouse Left');
//   }
// }





// 🔥 Let’s understand with a real example

// We will create a directive and apply it on a component.



// 🔹 1. Create Directive

// 👉 This directive changes background color on hover

// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appHoverEffect]'
// })
// export class HoverEffectDirective {

//   @HostBinding('style.backgroundColor') bgColor = '';

//   @HostListener('mouseenter')    //@HostListener; it must be a valid DOM event name like click, mouseenter, mouseleave, keydown, etc.
//   onEnter() {
//     this.bgColor = 'lightblue';
//   }

//   @HostListener('mouseleave')
//   onLeave() {
//     this.bgColor = '';
//   }
// }


// 🔹 2. Create Component

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-demo',
//   template: `
//     <div class="box">
//       I am Demo Component
//     </div>
//   `
// })
// export class DemoComponent {}


// 🔹 3. Apply Directive on Component

// 👉 Now we apply directive on the component’s HTML element   

// <app-demo appHoverEffect></app-demo>




// | Feature   | HostBinding              | HostListener             |
// | --------- | ------------------------ | ------------------------ |
// | Purpose   | Bind property to host    | Listen to events         |
// | Works on  | Style, class, attributes | Click, hover, key events |
// | Direction | Data → UI                | UI → Logic               |
