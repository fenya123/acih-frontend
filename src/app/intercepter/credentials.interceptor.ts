import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
  intercept(request: Readonly<HttpRequest<unknown>>, next: Readonly<HttpHandler>): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({ withCredentials: true }),
    );
  }
}
