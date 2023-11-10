import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
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
