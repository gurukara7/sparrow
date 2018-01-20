// src/app/auth/token.interceptor.ts
import { Injectable, NgModule } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(this.auth.getToken()){
      request = request.clone({
        setHeaders: {
          eeca1fff00db_token: `${this.auth.getToken()}`
        }
      });
    }
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 403) {
          // not logged in so redirect to login page with the return url
          this.router.navigate(['/login'], { });
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
}

@NgModule({
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
  ]
 })
 export class InterceptorModule { }