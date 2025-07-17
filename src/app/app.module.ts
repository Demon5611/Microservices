// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Single-SPA: ваша стратегия переиспользования маршрутов
import { MicroFrontendRouteReuseStrategy } from '../../src/single-spa/route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,                // корневой компонент
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,            // маршруты для /vue-app, /react-app, /angular-app
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: MicroFrontendRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]     // точка входа
})
export class AppModule { }
