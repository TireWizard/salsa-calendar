import should from 'should';
import moment from 'moment';

import * as CalendarActions from '../client/actions/calendarActions';
import globalReducer from '../client/reducers/globalReducer';
import initialAppState from '../client/initialAppState';

describe('Calendar', () => {
  it('should set initial date to calendar', () => {
    const someDate = moment().add(123, 'days');

    should(globalReducer(initialAppState, CalendarActions.dateChanged(someDate))
      .get('date').date()).equal(someDate.date());
  });
});
