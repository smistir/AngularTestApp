import { TestBed, inject } from '@angular/core/testing';

import { TestItemService } from './test-item.service';

describe('TestItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestItemService]
    });
  });

  it('should be created', inject([TestItemService], (service: TestItemService) => {
    expect(service).toBeTruthy();
  }));
});
