import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public submitted = false;


  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }


  get form(): any {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    if (this.loginForm.invalid) {
      alert('invalid form');
      return;
    }

    this.authService.login(this.form.email.value, this.form.password.value).subscribe(val => {
      console.log(val);
    });


  }

}
