import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { AccountModel } from 'src/app/models/account.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() onLoginUser: EventEmitter<boolean>;
  form: FormGroup;

  constructor(private loginService: LoginService) {
    this.onLoginUser = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onLogin(formValues: AccountModel) {
    if(this.loginService.login(formValues.username, formValues.password)) {
      this.loginService.startSession();

      this.onLoginUser.emit(true);
    }
  }

}
