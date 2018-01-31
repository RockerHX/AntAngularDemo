import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzdemoButtonComponent } from './nzdemo-button/nzdemo-button.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'general-button', component: NzdemoButtonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
