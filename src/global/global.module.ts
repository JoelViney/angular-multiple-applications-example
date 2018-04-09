import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsFactory } from './settings-factory';

import { WelcomeComponent } from './welcome.component';

import { ComponentPageComponent } from './component-page.component';

import { ComponentFactoryDirective } from './component-factory-directive';

import { RouteDataCommonPageComponent } from './routed-data-common-page.component';

@NgModule({
  imports: [
    RouterModule,

    RouterModule.forChild([
      { path: 'component', component: ComponentPageComponent },
    ])
  ],
  declarations: [
    WelcomeComponent,
    ComponentPageComponent,
    ComponentFactoryDirective,
    RouteDataCommonPageComponent,
  ],
  exports: [
    WelcomeComponent,
    ComponentFactoryDirective,
    RouteDataCommonPageComponent,
  ],
  providers: [
    SettingsFactory,
  ]
})
export class GlobalModule {}
