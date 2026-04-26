// A Component in Angular is the basic building block of the UI.
// It controls a part of the screen (view) and defines how that part behaves.

// 👉 In simple words:
// Component = HTML (view) + TypeScript (logic) + CSS (style)

import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{name}}</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HelloComponent {
  name = "Rizwan";
}