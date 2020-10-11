import { Component } from '@angular/core';
import { Options } from 'src/app/options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vanilla-angular';
  options: Options[];

  constructor() {
    this.options = [
      [
        {
          id: 1,
          text: 'underarmen',
        },
        {
          id: 2,
          text: 'kneet',
        },
        {
          id: 3,
          text: 'hjernen',
        },
        {
          id: 4,
          text: 'føttene',
        },
      ],
      [
        {
          id: 1,
          text: 'styler',
        },
        {
          id: 2,
          text: 'krykker',
        },
        {
          id: 3,
          text: 'skøyter',
        },
        {
          id: 4,
          text: 'rulleski',
        },
      ],
    ];
  }
}
