import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (typeof document !== 'undefined') {
    if (localStorage.getItem('userToken')) {
      return true
    }
  }
  let _Router: Router = inject(Router)
  _Router.navigate(['/login'])
  return false;
};
