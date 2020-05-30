import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  
  @Injectable()
  export class HttpInterceptorService implements HttpInterceptor {
    req: HttpRequest<any>;
  
    constructor() { }
  
    intercept(request: HttpRequest<any>, next: HttpHandler) {
          this.req = request.clone({
            setHeaders: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
  
      return next.handle(this.req);
    }
  }
  