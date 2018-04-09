import { Component } from '@angular/core';

import { SettingsFactory } from './settings-factory';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

  title: string;

  constructor(public _settingsFactory: SettingsFactory) {
    const settings = _settingsFactory.settings;
    this.title = settings.title;
  }

}
