import { TestBed } from '@angular/core/testing';

import { ServicioOrdenService } from './servicio-orden.service';

describe('ServicioOrdenService', () => {
  let service: ServicioOrdenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioOrdenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
