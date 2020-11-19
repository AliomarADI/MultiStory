import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import {CreateHeroComponent} from '../../create-hero/create-hero.component';
import {CreateWorldComponent} from '../../create-world/create-world.component';

@Injectable({
  providedIn: 'root'
})
export class CheckFillinGInfoGuard implements CanDeactivate<CreateHeroComponent> {
  canDeactivate(component: CreateHeroComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return confirm('Вы точно хотите покуинуть страницу?');
  }



}
