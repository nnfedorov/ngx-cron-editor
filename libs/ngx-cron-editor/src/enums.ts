export const Days = {
  'SUN': $localize`:@@sundayLabel:Воскресенье`,
  'MON': $localize`:@@mondayLabel:Понедельник`,
  'TUE': $localize`:@@tuesdayLabel:Вторник`,
  'WED': $localize`:@@wednesdayLabel:Среда`,
  'THU': $localize`:@@thursdayLabel:Четверг`,
  'FRI': $localize`:@@fridayLabel:Пятница`,
  'SAT': $localize`:@@saturdayLabel:Суббота`,
};

export const MonthWeeks = {
  '#1': $localize`:@@firstLabel:Первый`,
  '#2': $localize`:@@secondLabel:Второй`,
  '#3': $localize`:@@thirdLabel:Третий`,
  '#4': $localize`:@@fourthLabel:Четвертый`,
  '#5': $localize`:@@fifthLabel:Пятый`,
  'L': $localize`:@@lastLabel:Последний`
};

export enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export const MonthNames: Record<Months, string> = {
  [Months.January]: $localize`:@@januaryLabel:Январь`,
  [Months.February]: $localize`:@@februaryLabel:Февраль`,
  [Months.March]: $localize`:@@marchLabel:Март`,
  [Months.April]: $localize`:@@aprilLabel:Апрель`,
  [Months.May]: $localize`:@@mayLabel:Май`,
  [Months.June]: $localize`:@@juneLabel:Июнь`,
  [Months.July]: $localize`:@@julyLabel:Июль`,
  [Months.August]: $localize`:@@augustLabel:Август`,
  [Months.September]: $localize`:@@septemberLabel:Сентябрь`,
  [Months.October]: $localize`:@@octoberLabel:Октябрь`,
  [Months.November]: $localize`:@@novemberLabel:Ноябрь`,
  [Months.December]: $localize`:@@decemberLabel:Декабрь`
};
