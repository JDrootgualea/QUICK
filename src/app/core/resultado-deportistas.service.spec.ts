import { TestBed } from '@angular/core/testing';

import { ResultadoDeportistasService } from './resultado-deportistas.service';

describe('ResultadoDeportistasService', () => {
  let service: ResultadoDeportistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoDeportistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
