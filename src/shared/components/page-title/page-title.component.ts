import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-title',
  template: `
    <nav aria-label="breadcrumb" class="p-4 cm-box-shadow">
      <ol class="breadcrumb m-0">
        <li class="breadcrumb-item">
          <a routerLink="/">Home</a>
        </li>
        <ng-content></ng-content>
      </ol>
    </nav>
  `,
  styles: [
    '.cm-box-shadow { box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;}\n',
  ],
  providers: [Title],
})
export class PageTitleComponent implements OnInit {
  pageTitle!: string;
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.pageTitle = this.title.getTitle();
  }

  get isHome() {
    return this.pageTitle === 'Home';
  }
}
