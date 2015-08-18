import { Range, List, Record } from 'immutable';

export const DayRecord = new Record({
  active: false,
  day: null
});

export const updateFirstDay = appState => {
  return appState.set('firstDay', appState
    .get('currentMonth')
    .clone()
    .startOf('month')
    .format('dddd') // This is not really reliable (what about locale?)
    .toLowerCase());
};

export const updateDays = appState => {
  const startOfMonth = appState.get('currentMonth').clone().startOf('month');
  const endOfMonth = startOfMonth.clone().add(1, 'month');
  const daysInMonth = endOfMonth.diff(startOfMonth, 'days');
  const month = startOfMonth.month();
  const year = startOfMonth.year();

  const days = new Range(1, daysInMonth + 1)
    .map(day => new DayRecord({
      active: day === appState.get('date').date() &&
              month === appState.get('date').month() &&
              year === appState.get('date').year(),
      day: day
    }))
    .toList();

  return appState.set('days', days);
};

export const updateHeaderDays = appState => {
  if (appState.get('startOfWeek') === 'monday') {
    return appState.set('daysInWeek', List.of('Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'));
  }
  return appState.set('daysInWeek', List.of('Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'));
};
