import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary = undefined;

  constructor(private requests: RequestsService) { }

  ngOnInit() {
    this.requests.statisticsSummary()
    .then(response => {
      this.summary = response;
      console.log(response);
    })
    .catch(error => {
      console.log("HUJ");
      console.log(error);
    });
  }

}
