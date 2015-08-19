import { dateChanged, nextMonthSelected, prevMonthSelected, daySelected } from './calendarReducer';

export default (reduction, action) => {
  switch (action.type) {
    case 'DATE_CHANGED':
      return dateChanged(reduction, action.payload);
    case 'NEXT_MONTH_SELECTED':
      return nextMonthSelected(reduction);
    case 'PREV_MONTH_SELECTED':
      return prevMonthSelected(reduction);
    case 'DAY_SELECTED':
      return daySelected(reduction, action.payload);
    default:
      return reduction;
  }
};
