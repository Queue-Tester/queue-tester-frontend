import { TestBed } from '@angular/core/testing';

import { RequestSectionService } from './request-section.service';

describe('RequestSectionService', () => {
  let service: RequestSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
