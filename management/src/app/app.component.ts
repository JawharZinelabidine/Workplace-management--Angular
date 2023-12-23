import { Component, Input } from '@angular/core';
import { SideNavToggle } from './NavToggle'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HRops';
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {

    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed

  }


}
