import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokeninterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //request gelir ve request döner
    //req dönmeden token işlemi yapılarak tüm req geçerli sağlanabilir.

    var requestClone=request.clone({setHeaders:{Authorization:'example token'}})

    return next.handle(requestClone);
  }
}
