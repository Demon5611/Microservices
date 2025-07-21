// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'vue-app',
    loadChildren: () =>
      import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: '@somename/vue-app' }
  },
  {
    path: 'react-app',
    loadChildren: () =>
      import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: '@somename/react-app' }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
