import moment from 'moment';
import { List } from 'immutable';

import { updateFirstDay, updateHeaderDays, updateDays } from './daysReducer';

const updateCurrentMonth = appState => appState.set('currentMonth', appState.get('date'));

export const dateChanged = (reduction, date) => {
  const appState = reduction.get('appState').withMutations(mutableAppState => {
    if (date) {
      mutableAppState.set('date', moment(date).startOf('day'));
    } else {
      mutableAppState.set('date', moment().startOf('day'));
    }

    mutableAppState.set('initialized', true);
    mutableAppState.set('startOfWeek', 'monday');
    mutableAppState.update(updateCurrentMonth);
    mutableAppState.update(updateFirstDay);
    mutableAppState.update(updateHeaderDays);
    mutableAppState.update(updateDays);
  });

  return reduction.set('appState', appState);
};

export const nextMonthSelected = reduction => {
  const appState = reduction.get('appState').withMutations(mutableAppState => {
    mutableAppState.update('currentMonth', date => date.clone().add(1, 'month'));
    mutableAppState.update(updateFirstDay);
    mutableAppState.update(updateDays);
  });

  return reduction.set('appState', appState);
};

export const prevMonthSelected = reduction => {
  const appState = reduction.get('appState').withMutations(mutableAppState => {
    mutableAppState.update('currentMonth', date => date.clone().add(-1, 'month'));
    mutableAppState.update(updateFirstDay);
    mutableAppState.update(updateDays);
  });

  return reduction.set('appState', appState);
};

export const daySelected = (reduction, day) => {
  const appState = reduction.get('appState').withMutations(mutableAppState => {
    mutableAppState.set('date', mutableAppState.get('currentMonth').clone().date(day));
    mutableAppState.update(updateDays);
  });

  return reduction
    .set('appState', appState)
    .set('effects', List.of({
      type: 'CHANGE_DATE',
      payload: appState.get('date')
    }));
};
