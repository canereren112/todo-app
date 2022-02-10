import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor {
  private _localStorage: Storage;

  constructor(private _localStorageRefService: LocalStorageRefService) {
     this._localStorage = _localStorageRefService.localStorage
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
     const token  =    this._localStorage.getItem("token");
    if (token ) {
      request = request.clone({
        setHeaders: {
          
          Authorization: `Bearer ${token}`,

        },
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
         // this.userService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}