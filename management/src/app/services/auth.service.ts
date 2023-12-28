import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  logUser(inputs: { email: string, password: string }) {

    this.router.navigate(['home']);

  }
}
