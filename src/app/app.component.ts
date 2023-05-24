import { Component } from '@angular/core';
import { state$ } from '@app/util';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  state2$ = state$;
  title = 'angular-app2';
}
