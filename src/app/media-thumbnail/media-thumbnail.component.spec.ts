import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaThumbnailComponent } from './media-thumbnail.component';

describe('MediaThumbnailComponent', () => {
  let component: MediaThumbnailComponent;
  let fixture: ComponentFixture<MediaThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
