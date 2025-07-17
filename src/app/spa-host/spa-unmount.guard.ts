// src/app/spa-host/spa-unmount.guard.ts
import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpaHostComponent } from './spa-host.component';

@Injectable({ providedIn: 'root' })
export class SpaUnmountGuard
  implements CanDeactivate<SpaHostComponent>
{
  canDeactivate(
    component: SpaHostComponent,
    _current: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
    next: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const nextApp = this.findAppInRoute(next.root);
    if (component.appName === nextApp) {
      return true;
    }
    return component.unmount().pipe(map(() => true));
  }

  // Указываем, что может вернуть строку или null
  private findAppInRoute(
    route: ActivatedRouteSnapshot
  ): string | null {
    if (route.data?.app) {
      return route.data.app as string;
    }
    for (const child of route.children) {
      const found = this.findAppInRoute(child);
      if (found) {
        return found;
      }
    }
    return null;
  }
}
