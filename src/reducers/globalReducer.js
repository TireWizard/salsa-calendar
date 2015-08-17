import { dateChanged, nextMonthSelected, prevMonthSelected, daySelected } from './calendarReducer';

export default (appState, action) => {
  switch (action.type) {
    case 'DATE_CHANGED':
      return dateChanged(appState, action.payload);
    case 'NEXT_MONTH_SELECTED':
      return nextMonthSelected(appState);
    case 'PREV_MONTH_SELECTED':
      return prevMonthSelected(appState);
    case 'DAY_SELECTED':
      return daySelected(appState, action.payload);
    default:
      return appState;
  }
};
