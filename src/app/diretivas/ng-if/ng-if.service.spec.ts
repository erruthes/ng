import { TestBed } from '@angular/core/testing';

import { NgIfService } from './ng-if.service';

describe('NgIfService', () => {
  let service: NgIfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
