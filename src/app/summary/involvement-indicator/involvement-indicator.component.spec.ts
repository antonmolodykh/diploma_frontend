import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvementIndicatorComponent } from './involvement-indicator.component';

describe('InvolvementIndicatorComponent', () => {
  let component: InvolvementIndicatorComponent;
  let fixture: ComponentFixture<InvolvementIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvementIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvementIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
