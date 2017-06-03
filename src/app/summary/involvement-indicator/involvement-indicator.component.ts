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
  index = 0;
  tips = [
    'это очень низкий показатель',
    'это низкий показатель',
    'это хороший показатель',
    'это отличный показатель'
  ]

  constructor() { }

  ngOnInit() {
    this.index = Math.floor(this.involvement/10);
    if (this.index > this.indicatorColors.length-1) this.index = this.indicatorColors.length-1;
  }

}
