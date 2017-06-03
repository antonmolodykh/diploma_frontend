import { Component, OnInit, Input } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary = undefined;
  maxLikeOfHour = 0;
  @Input() profile = undefined;

  constructor(private requests: RequestsService) { }

  ngOnInit() {
    this.requests.profileChange.subscribe(profile => {
      this.profile = profile
      console.log('GOT PROFILE')
    });
    this.requests.statisticsSummary()
    .then(response => {
      this.summary = response;
      this.summary.best_hour = this.summary.hours.indexOf(Math.max(... this.summary.hours));
      this.maxLikeOfHour = Math.max(... this.summary.hours);
      console.log(response);
    })
    .catch(error => {
      console.log("HUJ");
      console.log(error);
    });
  }

}
