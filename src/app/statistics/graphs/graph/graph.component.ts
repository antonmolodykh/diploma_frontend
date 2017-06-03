import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  @Input() header: string;
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
    let min = Math.min(... this.data);
    let max = Math.max(... this.data);
    let delta = max-min;
    for (let i = 0; i < this.data.length; i++) {
      let date = new Date();
      date.setDate(date.getDate()-(this.data.length-i));
      this.data[i] = {
        date: date.getDate() + '.' + date.getMonth(),
        value: this.data[i],
        height: (this.data[i]-min)/(delta/100)*0.7+15
      }
    }
    console.log(this.data);
  }

}
