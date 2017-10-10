import { TestBed, inject } from '@angular/core/testing';

import { ContatoServiceService } from './contato-service.service';

describe('ContatoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoServiceService]
    });
  });

  it('should be created', inject([ContatoServiceService], (service: ContatoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
