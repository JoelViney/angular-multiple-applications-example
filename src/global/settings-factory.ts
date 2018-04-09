import { Injectable, Injector } from '@angular/core';
import { ISetttings } from './i-settings';

@Injectable()
export class SettingsFactory {
  public settings: ISetttings;

  constructor(private _injector: Injector) {
    // Dynamically load the Settings implementation.
    this.settings = this._injector.get('Settings');
  }

}
