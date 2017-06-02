import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-thumbnail',
  templateUrl: './media-thumbnail.component.html',
  styleUrls: ['./media-thumbnail.component.css']
})
export class MediaThumbnailComponent implements OnInit {

  @Input() media: JSON;

  constructor() { }

  ngOnInit() {
  }

}
