import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-involvement-indicator',
  templateUrl: './involvement-indicator.component.html',
  styleUrls: ['./involvement-indicator.component.css']
})
export class InvolvementIndicatorComponent implements OnInit {

  @Input() involvement: number;

  indicatorColors = [
    '#f44336',
    '#ffee58',
    '#cddc39',
    '#4caf50'
  ];
  colorIndex = 0;

  constructor() { }

  ngOnInit() {
    this.colorIndex = Math.floor(this.involvement/10);
    if (this.colorIndex > this.indicatorColors.length-1) this.colorIndex = this.indicatorColors.length-1;
  }

}
