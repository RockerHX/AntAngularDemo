import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzdemoButtonComponent } from './nzdemo-button/nzdemo-button.component';
import { NzdemoIconComponent } from './nzdemo-icon/nzdemo-icon.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'general-button', component: NzdemoButtonComponent },
  { path: 'general-icon', component: NzdemoIconComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
