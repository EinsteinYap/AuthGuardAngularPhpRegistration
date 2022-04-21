import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  // router: any;
  constructor(private dataservice:ApiService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):any {
    // return true;
    const routeurl:string =state.url;
    return this.isLogin(routeurl);
  }

  isLogin(routeurl:string){
    if(this.dataservice.isLoggedIn()){
      return true;
    }
    else{
      this.dataservice.redirectUrl! =routeurl;
      this.router.navigate(['/login'],{queryParams:{returnUrl:routeurl}}
      );
    }
  }
}
