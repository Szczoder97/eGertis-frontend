import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { Register } from 'src/app/models/register.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  registerMode: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onChangeMode() {
    this.registerMode = !this.registerMode;
  }

  onSubmit(form: NgForm) {
    if(this.registerMode) {
      const registerCredentials: Register = {
        email: form.value.email,
        password: form.value.password,
        name: form.value.name,
        surname: form.value.surname
      }
      this.authService.register(registerCredentials).subscribe(serviceResponse => {
        console.log(serviceResponse);
      })
    } else {
      const credentials: Login = {
      email: form.value.email,
      password: form.value.password
    }
    this.authService.login(credentials).subscribe(serviceResponse => {
      console.log(serviceResponse);
      if (serviceResponse.success) {
        console.log(serviceResponse.success);
        this.router.navigate(['/orders']);
      }
    });
    } 
  }
}
