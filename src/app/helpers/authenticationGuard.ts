import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root' // ADDED providedIn root here.
  })
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('jwtToken')) {
            // we Are logged so let's change the route
            return true;
        }

        // not logged go to the login page.
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}