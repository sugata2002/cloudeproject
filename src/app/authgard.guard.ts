import { CanActivateFn } from '@angular/router';
import { ApiComponent } from './api/api/api.component';
import { inject } from '@angular/core';
// import { Emitters } from './emmiters/emitters';


export const authgardGuard: CanActivateFn = (route, state) => {
  let api  = inject (ApiComponent)
  return api.islogin  ;
};
