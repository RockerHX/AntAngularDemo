import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';

import { NzdemoLayoutComponent } from './nzdemo-layout/nzdemo-layout.component';
import { NzdemoButtonComponent } from './nzdemo-button/nzdemo-button.component';
import { NzdemoIconComponent } from './nzdemo-icon/nzdemo-icon.component';
import { NzdemoGridComponent } from './nzdemo-grid/nzdemo-grid.component';
import { NzdemoAffixComponent } from './nzdemo-affix/nzdemo-affix.component';
import { NzdemoBreadcrumbComponent } from './nzdemo-breadcrumb/nzdemo-breadcrumb.component';
import { NzdemoDropdownComponent } from './nzdemo-dropdown/nzdemo-dropdown.component';
import { MenuComponent } from './menu/menu.component';
import { NzdemoMenuComponent } from './nzdemo-menu/nzdemo-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NzdemoLayoutComponent,
    NzdemoButtonComponent,
    NzdemoIconComponent,
    NzdemoGridComponent,
    NzdemoAffixComponent,
    NzdemoBreadcrumbComponent,
    NzdemoDropdownComponent,
    MenuComponent,
    NzdemoMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
