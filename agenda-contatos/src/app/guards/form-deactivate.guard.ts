import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from '../form/form.component'
import { IformDeactivate } from '../form/iform-deactivate'

@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuard implements CanDeactivate<IformDeactivate> {
  canDeactivate(
    component: IformDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return component.podeDesativar(); 
      
  } 
  
}
