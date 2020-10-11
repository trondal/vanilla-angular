import { Component, Input, OnInit } from '@angular/core';
import { Options, Option } from 'src/app/options.interface';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  @Input() options: Options;
  selectedItem: string = null;

  ngOnInit(): void {}

  onClick = (option: Option) => {
    this.selectedItem = option.text;
  };

  isActive = (option: Option) => {
    return this.selectedItem === option.text;
  };
}
