import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpRequest } from '@angular/common/http';

import { apiAuthenticationInterceptor } from './api-authentication.interceptor';

describe('apiAuthenticationInterceptor', () => {
  const interceptor: (req: HttpRequest<any>, next: HttpHandler) => apiAuthenticationInterceptor = (req, next) => {
	  return TestBed.runInInjectionContext(() => apiAuthenticationInterceptor(req, next));
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
