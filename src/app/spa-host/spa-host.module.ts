import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpaHostComponent } from './spa-host.component';
import { SpaUnmountGuard } from './spa-unmount.guard';

const routes: Routes = [
  { path: '', component: SpaHostComponent, canDeactivate: [SpaUnmountGuard] }
];

@NgModule({
  declarations: [SpaHostComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SpaHostModule {}
