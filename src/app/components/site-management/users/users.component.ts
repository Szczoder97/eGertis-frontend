import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDto } from 'src/app/models/userDto.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserDto[] = [];
  userSub: Subscription;

  constructor(private usersService: UsersService) {
    this.userSub = this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
   }

  ngOnInit(): void {
    this.usersService.initUsers();
  }

}
