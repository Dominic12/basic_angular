import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  displayedColumns: string[] = ['first_name', 'email', 'last_name'];
  public users: User[];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(val => {
      this.users = val.data;
    });
  }

}
