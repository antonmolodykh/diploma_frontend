import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  authenticated = false;

  constructor(private requests: RequestsService) { }

  ngOnInit() {
    this.requests.accountMy()
    .then(response => {
      this.authenticated = true;
    })
    .catch(error => {
      console.log(error)
    });
  }

}
