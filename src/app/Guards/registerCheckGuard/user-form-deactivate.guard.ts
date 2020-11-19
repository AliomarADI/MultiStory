import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {RegisterPageComponent} from '../../register-page/register-page.component';

@Injectable({
  providedIn: 'root'
})
export class UserFormDeactivateGuard implements CanDeactivate<RegisterPageComponent> {
  canDeactivate(
    component: RegisterPageComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.hasUnsavedData() ||  confirm('У вас остались не сохраненные данные! Покинуть страницу?');
  }

}
