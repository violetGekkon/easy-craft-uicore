import { TestBed } from '@angular/core/testing';

import { EasyCraftUicoreService } from './easy-craft-uicore.service';

describe('EasyCraftUicoreService', () => {
  let service: EasyCraftUicoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyCraftUicoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
