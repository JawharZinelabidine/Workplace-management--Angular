import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './navbarData';
import { SideNavToggle } from '../NavToggle'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  logoutIcon = 'fa fa-sign-out'



  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

  }


  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeNav(): void {
    this.collapsed = false
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

  }

  logout(): void {

    this.router.navigate(['']);


  }

}
