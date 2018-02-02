import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzdemoButtonComponent } from './nzdemo-button/nzdemo-button.component';
import { NzdemoIconComponent } from './nzdemo-icon/nzdemo-icon.component';
import { NzdemoGridComponent } from './nzdemo-grid/nzdemo-grid.component';
import { NzdemoAffixComponent } from './nzdemo-affix/nzdemo-affix.component';
import { NzdemoBreadcrumbComponent } from './nzdemo-breadcrumb/nzdemo-breadcrumb.component';
import { NzdemoDropdownComponent } from './nzdemo-dropdown/nzdemo-dropdown.component';
import { NzdemoMenuComponent } from './nzdemo-menu/nzdemo-menu.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'general-button', component: NzdemoButtonComponent },
  { path: 'general-icon', component: NzdemoIconComponent },
  { path: 'general-grid', component: NzdemoGridComponent },
  { path: 'general-affix', component: NzdemoAffixComponent },
  { path: 'general-breadcrumb', component: NzdemoBreadcrumbComponent },
  { path: 'general-dropdown', component: NzdemoDropdownComponent },
  { path: 'general-menu', component: NzdemoMenuComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
