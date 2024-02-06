import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSectionComponent } from './request-section.component';

describe('RequestSectionComponent', () => {
  let component: RequestSectionComponent;
  let fixture: ComponentFixture<RequestSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestSectionComponent],
    });
    fixture = TestBed.createComponent(RequestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
