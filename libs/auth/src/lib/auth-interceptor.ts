import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Environment } from '@ts/common';

import { tokenVar } from './token-var';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  apiHost: string;
  gqlHost: string;

  constructor(env: Environment) {
    this.apiHost = new URL(env.url.api).host;
    this.gqlHost = new URL(env.url.graphql).host;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = tokenVar();
    const reqHost = new URL(req.url).host;

    if (token && (reqHost === this.apiHost || reqHost === this.gqlHost)) {
      const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });

      return next.handle(modifiedReq);
    } else {
      return next.handle(req);
    }
  }
}
