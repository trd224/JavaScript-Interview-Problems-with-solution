// Interview Answer:

// Angular animations are a feature in Angular that allows us to add smooth transitions and visual effects (like fade, slide, etc.) to elements using a built-in animation system.


// 🔹 What it means (simple)
// Used to make UI interactive and smooth
// Helps in show/hide, move, resize elements
// Works using Angular’s animation API


// import { trigger, state, style, transition, animate } from '@angular/animations';

// @Component({
//   selector: 'app-demo',
//   template: `
//     <div [@fade]="isVisible ? 'show' : 'hide'">Hello</div>
//     <button (click)="toggle()">Toggle</button>
//   `,
//   animations: [
//     trigger('fade', [
//       state('show', style({ opacity: 1 })),
//       state('hide', style({ opacity: 0 })),
//       transition('show <=> hide', animate('500ms'))
//     ])
//   ]
// })
// export class DemoComponent {
//   isVisible = true;

//   toggle() {
//     this.isVisible = !this.isVisible;
//   }
// }


// 🔹 Key concepts
// trigger → defines animation name
// state → defines styles
// transition → change between states
// animate → timing (speed)