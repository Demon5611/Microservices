// src/main.ts
import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { start as singleSpaStart } from 'single-spa';   
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { AppModule } from './app/app.module';
import { PlatformLocation } from '@angular/common';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

singleSpaStart();

const appId = 'container-app';  // можно любое уникальное имя

platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule)
  .then(moduleRef => {
    // чтобы Angular знал, в какой зоне он внутри single-spa
    NgZone.isInAngularZone = () =>
      // @ts-ignore
      window.Zone.current._properties[appId] === true;

    const zone = moduleRef.injector.get(NgZone);
    // tslint:disable-next-line:no-string-literal
    zone['_inner']._properties[appId] = true;

    // привязываем PlatformLocation к той же зоне
    const location = moduleRef.injector.get(PlatformLocation) as any;
    location.setNgZone(zone);
  })
  .catch(err => console.error(err));
