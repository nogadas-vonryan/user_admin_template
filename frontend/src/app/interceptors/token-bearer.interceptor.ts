import { HttpInterceptorFn } from '@angular/common/http';

export const tokenBearerInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = localStorage.getItem('authToken');

  if(authToken) {
    const requestClone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    return next(requestClone);
  }

  return next(req);
};
