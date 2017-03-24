import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    templateUrl: './demo.template.html'
})
export class DemoComponent {
   constructor() {}

   public get component(): string {
       return window.location.pathname.replace(/\//g, '');
   }
}
