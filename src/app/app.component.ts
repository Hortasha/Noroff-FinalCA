import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) { }
  
  ngOnInit() {
    if(this.loginService.isAuthorized()) {
      this.router.navigate(['cards']);
    } else {
      this.router.navigate(['login'])
    }
  }
}
