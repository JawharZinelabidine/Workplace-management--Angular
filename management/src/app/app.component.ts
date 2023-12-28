import { Component, Input, OnInit } from '@angular/core';
import { SideNavToggle } from './NavToggle'
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route: Router) { }

  title = 'HRops';
  isSideNavCollapsed = false;
  screenWidth = 0;
  currentPath: string = this.route.url

  onToggleSideNav(data: SideNavToggle): void {

    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed

  }

  ngOnInit(): void {
    this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentPath = this.route.url.slice(1);
      });
  }


}
