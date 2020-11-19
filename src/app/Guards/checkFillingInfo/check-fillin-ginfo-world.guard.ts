import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {CreateWorldComponent} from '../../create-world/create-world.component';

@Injectable({
  providedIn: 'root'
})
export class CheckFillinGInfoWorldGuard implements CanDeactivate<CreateWorldComponent> {
  canDeactivate(component: CreateWorldComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('Вы точно хотите покуинуть страницу?');
  }



}
