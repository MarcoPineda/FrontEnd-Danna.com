import { TestBed } from '@angular/core/testing';

import { ServicioClService } from './servicio-cl.service';

describe('ServicioClService', () => {
  let service: ServicioClService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioClService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
