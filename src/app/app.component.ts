import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'portfolio - Riya Shastri';
  isSidebarOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  toggleSidebar() {
    if (!this.isSidebarOpen) {
      this.document.body.classList.add('mobile-nav-active');
      this.isSidebarOpen = true;
    } else {
      this.document.body.classList.remove('mobile-nav-active');
      this.isSidebarOpen = false;
    }
  }
}
