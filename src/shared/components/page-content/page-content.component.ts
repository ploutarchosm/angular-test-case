import { Component } from '@angular/core';

@Component({
  selector: 'app-page-content',
  template: `
    <div class="page p-4">
      <ng-content></ng-content>
    </div>
  `,
})
export class PageContentComponent {}
