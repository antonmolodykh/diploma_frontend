import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-signer',
  templateUrl: './signer.component.html',
  styleUrls: ['./signer.component.css']
})
export class SignerComponent implements OnInit {

  profile = undefined;

  constructor(private requests:RequestsService) { }

  ngOnInit() {
    this.requests.profileChange.subscribe(profile => {
      this.profile = profile
    });
  }

  register() {
  	this.requests.accountRegister("antonmolodykh96@gmail.com", "root", "1941381288.3e5151f.cc5925e7d7ba41e5b9c38fdf799c3473")
  	.then(response => {
  		console.log(response);
  	})
  	.catch(error => {
  		console.log(error);
  	})
  }

}
