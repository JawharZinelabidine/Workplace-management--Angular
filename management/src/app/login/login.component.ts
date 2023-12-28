import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  myForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.myForm = this.fb.group({
      email: ["", Validators.email],
      password: ["", [Validators.required]]
    })
  }


  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.authService.logUser(this.myForm.value)
    }
    else console.log(this.myForm)

  }
}
