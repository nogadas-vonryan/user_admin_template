import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authRole = localStorage.getItem('authRole');

  if(authRole != 'admin') {
    return router.createUrlTree(['dashboard']);
  }
  
  return true;
};
