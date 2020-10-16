import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Options, Option } from 'src/app/options.interface';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  optionsGroups: Options[];
  text: string;
  answers: number[];
  submittedAnswers: number[] = [];

  radiosForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.answers = [3, 2];
    this.answers.forEach((v) => {
      this.submittedAnswers.push(-1);
    });
    this.text =
      'Anders var urolig for at han hadde skadet %s på fotballkamp. Det han tenkte mest på var om han måtte dra til %s.';
    this.optionsGroups = [
      [
        {
          id: 1,
          text: 'bilen',
        },

        {
          id: 2,
          text: 'bjørnen',
        },
        {
          id: 3,
          text: 'kaffekoppen',
        },
        {
          id: 4,
          text: 'kneet',
        },
      ],
      [
        {
          id: 1,
          text: 'pleiehjemmet',
        },
        {
          id: 2,
          text: 'sykehuset',
        },
        {
          id: 3,
          text: 'skolen',
        },
        {
          id: 4,
          text: 'NAV',
        },
      ],
    ];

    this.radiosForm = this.formBuilder.group({});

    this.answers.forEach((value, index) => {
      this.radiosForm.addControl(
        index.toString(),
        new FormControl('', Validators.required)
      );
    });
  }

  onClicked(index: number, option: Option) {
    this.submittedAnswers[index] = option.id;
  }

  getSplitText(value: string) {
    const ary = value.split('%s');

    let result = [];
    let counter = 0;

    for (let i = 0; i < ary.length; i++) {
      if (ary[i] === '' && i < ary.length - 1) {
        result.push(counter);
      } else {
        result.push(ary[i]);
        if (i < ary.length - 1) {
          result.push(counter);
        }
      }
      counter++;
    }
    //console.log(result);
    return result;
  }

  isNumber(val: string | number): boolean {
    return typeof val === 'number';
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.radiosForm.value);
  }
}
