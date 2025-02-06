import { TestBed } from '@angular/core/testing';

import { AnimalStateService } from './animal-state.service';

describe('AnimalStateService', () => {
  let service: AnimalStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
