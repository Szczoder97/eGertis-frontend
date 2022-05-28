import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDto } from 'src/app/models/userDto.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  @Input() user!: UserDto;



  ngOnInit(): void {
  }

  onDelete() {
    this.usersService.deleteUser(this.user.id);
  }

  onChangeRole(form: NgForm) {
    const role: string = form.value.role;
    this.usersService.changeUserRole(this.user.id, role);
  }
  
  roleChanged(form: NgForm): boolean {
    return form.value.role !== this.user.role;
  }

}
