import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(private route: Router) { }

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() currentPath = this.route.url;


  getBodyClass(): string {
    let styleClass = ''
    if (this.currentPath.length > 0 && this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    }
    else if (this.currentPath.length > 0 && this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {

      styleClass = 'body-md-screen'
    }
    else if (this.currentPath.length > 0 && !this.collapsed) {

      styleClass = 'body-md-screen'
    }
    else if (this.currentPath.length === 0) {

      styleClass = 'login-body'
    }

    return styleClass

  }

}
