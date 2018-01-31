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

@NgModule({
  declarations: [
    AppComponent,
    NzdemoLayoutComponent,
    NzdemoButtonComponent
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
