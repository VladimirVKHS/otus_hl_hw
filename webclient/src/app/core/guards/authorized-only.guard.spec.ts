import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizedOnlyGuard } from './authorized-only.guard';

describe('AuthorizedOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedOnlyGuard]
    });
  });

  it('should ...', inject([AuthorizedOnlyGuard], (guard: AuthorizedOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
