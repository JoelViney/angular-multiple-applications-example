import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsFactory } from './settings-factory';

import { SettingsExampleComponent } from './settings-example.component';

import { DynamicComponentExampleComponent } from './dynamic-component-example.component';

import { ComponentFactoryDirective } from './component-factory-directive';

import { RouteDataExampleComponent } from './routed-data-example.component';

@NgModule({
  imports: [
    RouterModule,

    RouterModule.forChild([
      { path: 'settings-component', component: SettingsExampleComponent },
      { path: 'dynamic-component', component: DynamicComponentExampleComponent },
    ])
  ],
  declarations: [
    SettingsExampleComponent,
    RouteDataExampleComponent,
    DynamicComponentExampleComponent,
    ComponentFactoryDirective,
  ],
  exports: [
    RouteDataExampleComponent,
    ComponentFactoryDirective,
  ],
  providers: [
    SettingsFactory,
  ]
})
export class GlobalModule {}
