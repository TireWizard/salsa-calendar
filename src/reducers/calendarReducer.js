import moment from 'moment';

import { updateFirstDay, updateHeaderDays, updateDays } from './daysReducer';

const updateCurrentMonth = appState => appState.set('currentMonth', appState.get('date'));

export const dateChanged = (appState, date) => {
  return appState.withMutations(mutableAppState => {
    if (date) {
      mutableAppState.set('date', moment(date));
    } else {
      mutableAppState.set('date', moment());
    }

    mutableAppState.set('startOfWeek', 'monday');
    mutableAppState.update(updateCurrentMonth);
    mutableAppState.update(updateFirstDay);
    mutableAppState.update(updateHeaderDays);
    mutableAppState.update(updateDays);
  });
};

export const nextMonthSelected = appState => {
  return appState.withMutations(mutableAppState => {
    mutableAppState.update('currentMonth', date => date.clone().add(1, 'month'));
    mutableAppState.update(updateFirstDay);
    mutableAppState.update(updateDays);
  });
};

export const prevMonthSelected = appState => {
  return appState.withMutations(mutableAppState => {
    mutableAppState.update('currentMonth', date => date.clone().add(-1, 'month'));
    mutableAppState.update(updateFirstDay);
    mutableAppState.update(updateDays);
  });
};

export const daySelected = (appState, day) => {
  return appState.withMutations(mutableAppState => {
    mutableAppState.update('date', date => date.clone().date(day));
    mutableAppState.update(updateDays);
  });
};
