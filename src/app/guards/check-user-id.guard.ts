import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckUserIdGuard implements CanActivate {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!route.queryParams.userId) {
      return this.router.navigate(['home'], { relativeTo: this.activatedRoute, queryParams: {userId: 1}});
    }
    return true;
  }

}
