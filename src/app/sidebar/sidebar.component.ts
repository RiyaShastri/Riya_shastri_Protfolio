import { Component, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  activeLink = 'about';

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void {
  }

  triggerScrollTo(id: any) {
    const config: ScrollToConfigOptions = {
      target: id
    };
    this.activeLink = id;
    this.scrollToService.scrollTo(config);
  }

}
