import { TestBed } from '@angular/core/testing';

import { ResponseSectionService } from './response-section.service';

describe('ResponseSectionService', () => {
  let service: ResponseSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
