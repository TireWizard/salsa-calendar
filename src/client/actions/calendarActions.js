const buildAction = (type, payload) => { return {type, payload}; };

export const dateChanged = date => buildAction('DATE_CHANGED', date);
export const nextMonth = () => buildAction('NEXT_MONTH_SELECTED');
export const prevMonth = () => buildAction('PREV_MONTH_SELECTED');
export const daySelected = day => buildAction('DAY_SELECTED', day);
