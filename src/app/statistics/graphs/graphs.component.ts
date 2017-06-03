import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../requests.service'

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  statistics: JSON;
  periodOptions = [
    {value: 7, viewValue: 'неделю'},
    {value: 30, viewValue: '30 дней'},
    {value: 180, viewValue: '6 месяцев'},
    {value: 365, viewValue: 'год'},
    {value: 0, viewValue: 'всё время'}
  ]
  period = 7;

  constructor(private requests:RequestsService) { }

  getStatistics() {
    this.statistics = undefined;
    this.requests.statistics(this.period)
    .then(response => {
      this.statistics = response;
    })
    .catch(error => {
      console.log(error)
    });
  }

  ngOnInit() {
    this.getStatistics();
  }

}
