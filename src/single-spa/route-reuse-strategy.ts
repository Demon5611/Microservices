
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class MicroFrontendRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void { }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return (
      future.routeConfig === curr.routeConfig ||
      (!!future.data.app && future.data.app === curr.data.app)
    );
  }
}
