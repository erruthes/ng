import { TestBed } from '@angular/core/testing';

import { AlunoDeactivateGuard } from './aluno-deactivate.guard';

describe('AlunoDeactivateGuard', () => {
  let guard: AlunoDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunoDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
