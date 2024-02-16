import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from '../services/user.service';

export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const activateRoute = inject(ActivatedRoute);

  console.log(userService.isLoggedin());
  if(userService.isLoggedin()) {
    console.log('User already exists');
    router.navigate(['/main'], {relativeTo: activateRoute.root});
  }
  return true;

}
