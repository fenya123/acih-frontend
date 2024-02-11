import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
  // eslint-disable-next-line max-len,@typescript-eslint/prefer-readonly-parameter-types
  public intercept(request: Readonly<HttpRequest<unknown>>, next: Readonly<HttpHandler>): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({ withCredentials: true }),
    );
  }
}
