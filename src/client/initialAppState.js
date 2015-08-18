import moment from 'moment';
import { Map, List } from 'immutable';

export default new Map({
  startOfWeek: 'monday',
  firstDay: 'monday',
  date: moment(),
  currentMonth: moment(),
  days: List.of(),
  daysInWeek: List.of()
});
