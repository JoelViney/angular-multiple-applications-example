import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ISetttings } from '../../global/i-settings';

/*
  This is duplicated by each application as each application needs to reference a different version of the environment.
*/
@Injectable()
export class Settings implements ISetttings {

  get title(): string {
    return environment.title;
  }
}
