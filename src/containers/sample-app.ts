import {
  Component,
  ViewEncapsulation,
  Inject,
  ApplicationRef
} from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { RioAboutPageComponent } from './about-page';
import { RioCounterPageComponent } from './counter-page';

import {
  RioContainerComponent,
  RioNavigatorComponent,
  RioNavigatorItemComponent,
  RioLogoComponent
} from '../components';

@Component({
  selector: 'sg-rio-sample-app',
  directives: [
    ROUTER_DIRECTIVES, RioNavigatorComponent, RioNavigatorItemComponent,
    RioLogoComponent, RioContainerComponent
  ],
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [require('../styles/index.css')],
  template: `
    <div>
      <sg-rio-navigator>
        <sg-rio-navigator-item [mr]=true>
          <sg-rio-logo></sg-rio-logo>
        </sg-rio-navigator-item>
        <sg-rio-navigator-item [mr]=true>
          <a [routerLink]="['Counter']"
            class="text-decoration-none">Counter</a>
        </sg-rio-navigator-item>
        <sg-rio-navigator-item>
          <a [routerLink]="['About']"
            class="text-decoration-none">About Us</a>
        </sg-rio-navigator-item>
        <div class="flex flex-auto"></div>
      </sg-rio-navigator>
      <sg-rio-container>
        <router-outlet></router-outlet>
      </sg-rio-container>
    </div>
  `
})
@RouteConfig([
  {
    path: '/counter',
    name: 'Counter',
    component: RioCounterPageComponent,
    useAsDefault: true
  },
  {
    path: '/about',
    name: 'About',
    component: RioAboutPageComponent
  }
])
export class RioSampleAppComponent {

};
