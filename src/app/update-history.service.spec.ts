import { TestBed } from '@angular/core/testing';

import { UpdateHistoryService } from './update-history.service';

describe('UpdateHistoryService', () => {
  let service: UpdateHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
