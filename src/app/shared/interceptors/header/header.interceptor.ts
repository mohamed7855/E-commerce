import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  if (typeof localStorage != 'undefined') {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      req = req.clone({
        setHeaders: { token: userToken },
      });
    }
  }

  return next(req);
};
