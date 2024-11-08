// your-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',
  template: `
  hi
    <!-- src/app/test/test.component.html -->
    <ngb-accordion activeIds="ngb-panel-0">
      <ngb-panel title="First Panel">
        <ng-template >
          This is the content of the first panel.
        </ng-template>
      </ngb-panel>

      <ngb-panel title="Second Panel">
        <ng-template >
          This is the content of the second panel.
        </ng-template>
      </ngb-panel>
    </ngb-accordion>
  `,
  styles: [
    `
     
    `,
  ],
})
export class YourComponent {}
