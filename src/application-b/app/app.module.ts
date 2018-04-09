import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { Settings } from './settings';

import { GlobalModule } from '../../global/global.module';

import { NavbarComponent } from './navbar.component';

import { HomeComponent } from './home.component';

import { RouteDataCommonPageComponent } from '../../global/routed-data-common-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
  ],
  entryComponents: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    GlobalModule,

    RouterModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'routed-data', component: RouteDataCommonPageComponent, data: { projectName: 'Application B' } }
      ],
      {
        enableTracing: true,
        useHash: false
      }
    ),
  ],
  providers: [
    Settings,
    {provide: 'Settings', useExisting: Settings}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
