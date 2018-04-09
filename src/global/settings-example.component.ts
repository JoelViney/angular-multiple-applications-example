import { Component } from '@angular/core';

import { SettingsFactory } from './settings-factory';

@Component({
  templateUrl: './settings-example.component.html'
})
export class SettingsExampleComponent {

  title: string;

  constructor(public _settingsFactory: SettingsFactory) {
    const settings = _settingsFactory.settings;
    this.title = settings.title;
  }

}
