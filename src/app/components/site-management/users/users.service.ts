import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { ChangeRole } from "src/app/models/change-role.model";
import { UserDto } from "src/app/models/userDto.model";

@Injectable({providedIn: 'root'})
export class UsersService {
    private users: UserDto[]  = [];
    public users$: BehaviorSubject<UserDto[]>;

    constructor(private apiService: ApiService) {
        this.users$ = new BehaviorSubject(<UserDto[]>([]));
    }

    initUsers() {
        this.apiService.fetchUsers().subscribe(response => {
            this.users = response.data;
            this.users$.next(response.data);
        });
    }

    getUsers(): Observable<UserDto[]> {
       return this.users$;
    }

    changeUserRole(id: number, role: string) {
        const changeRole = new ChangeRole(id, role);
        this.apiService.changeUserRole(changeRole).subscribe(response => {
            this.users = response.data;
            this.users$.next(this.users);
        });
    }

    deleteUser(id: number) {
        this.apiService.deleteUser(id).subscribe(response => {
            this.users = response.data;
            this.users$.next(this.users);
        });
    }
}