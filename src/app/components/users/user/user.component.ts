import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Input() public user: User | any;
  ngOnInit(): void {
  }

}
