import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  static key = 'NavbarComponent'; // This is required to dynamically load the component in --prod
}
