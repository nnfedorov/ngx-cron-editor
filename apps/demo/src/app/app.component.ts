import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import {CronOptions} from 'ngx-cron-editor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public cronExpression = '0 0 1/1 * *';

  public isCronDisabled = false;

  public cronOptions: CronOptions = {
    formInputClass: 'cron-editor-input',
    formSelectClass: 'cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '00:00:00',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,

    cronFlavor: 'standard'
  };

  cronForm: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.cronForm = new FormControl(this.cronExpression);
  }

}
