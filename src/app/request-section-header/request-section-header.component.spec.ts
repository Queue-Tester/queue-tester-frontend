import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSectionHeaderComponent } from './request-section-header.component';

describe('RequestSectionHeaderComponent', () => {
  let component: RequestSectionHeaderComponent;
  let fixture: ComponentFixture<RequestSectionHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestSectionHeaderComponent]
    });
    fixture = TestBed.createComponent(RequestSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
