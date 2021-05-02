import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  loginForm?: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    //   password: [null, [Validators.required, Validators.minLength(6)]]
    // })
  }

  // login() {
  //   const {email, password} = this.loginForm?.value;
  //   console.log(email);
  //   console.log(password);

  //   // this.authService.loginUser(email, password);
  // }
}
