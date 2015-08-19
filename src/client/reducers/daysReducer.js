import { Range, List, Record } from 'immutable';

export const DayRecord = new Record({
  active: false,
  day: null,
  date: null
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

  const days = new Range(1, daysInMonth + 1)
    .map(day => {
      const dateForDay = startOfMonth.clone().add(day - 1, 'days');

      return new DayRecord({
        active: dateForDay.isSame(appState.get('date')),
        date: dateForDay,
        day: day
      });
    })
    .toList();

  return appState.set('days', days);
};

export const updateHeaderDays = reduction => {
  if (reduction.getIn(['appState', 'startOfWeek']) === 'monday') {
    return reduction.setIn(['appState', 'daysInWeek'], List.of('Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'));
  }
  return reduction.setIn(['appState', 'daysInWeek'], List.of('Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'));
};
