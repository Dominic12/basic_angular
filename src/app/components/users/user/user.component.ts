import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  public user: User | any; /// TODO: Pass the user to this component. Hint: We should input it :)
  ngOnInit(): void {
  }

}
