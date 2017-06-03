import { Component, OnInit } from '@angular/core';
import { RequestsService } from "../requests.service";
import { Router } from "@angular/router/";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private requests:RequestsService, protected router: Router) { }
  
  emailValue: string;
  passwordValue: string;

  ngOnInit() {
  }

  login() {
    this.requests.accountLogin(this.emailValue, this.passwordValue)
    .then(response => {
      console.log(response);
      this.router.navigate(['']);
    })
    .catch(error => {
      console.log(error);
    })
  }

}
