import { TestBed, async, inject } from '@angular/core/testing';

import { GuestOnlyGuard } from './guest-only.guard';

describe('GuestOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestOnlyGuard]
    });
  });

  it('should ...', inject([GuestOnlyGuard], (guard: GuestOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
