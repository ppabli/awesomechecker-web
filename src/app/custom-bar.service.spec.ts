import { TestBed } from '@angular/core/testing';

import { CustomBarService } from './custom-bar.service';

describe('CustomBarService', () => {
  let service: CustomBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
