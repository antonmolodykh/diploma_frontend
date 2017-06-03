import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  @Input() header: string;
  @Input() data: any[];

  isExpanded = false;
  months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл' ,'авг' ,'сен' ,'окт' ,'ноя', 'дек']

  constructor() { }

  ngOnInit() {
    let min = Math.min(... this.data);
    let max = Math.max(... this.data);
    let delta = max-min;
    for (let i = 0; i < this.data.length; i++) {
      let date = new Date();
      date.setDate(date.getDate()-(this.data.length-i));
      this.data[i] = {
        date: date.getDate() + ' ' + this.months[date.getMonth()],
        value: this.data[i],
        height: (this.data[i]-min)/(delta/100)*0.7+15
      }
    }
    console.log(this.data);
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded)  
  }

}
