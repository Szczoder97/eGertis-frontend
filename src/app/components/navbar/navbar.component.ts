import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NabvarComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) { 
    this.userSub = new Subscription();
  }

  ngOnInit(): void {
    this.userSub = this.authService.user$.subscribe( user => {
      this.isAuthenticated = user.getToken() !== '' ? true : false;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  
  onLogout() {
    if (this.isAuthenticated) {
      this.authService.logout();
    }
  }
}
