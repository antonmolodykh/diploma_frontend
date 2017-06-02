import { Component, OnInit } from '@angular/core';
import { RequestsService } from "../requests.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private requests:RequestsService) { }
  
  emailValue: string;
  passwordValue: string;

  ngOnInit() {
  }

  login() {
    this.requests.accountLogin(this.emailValue, this.passwordValue)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

}
