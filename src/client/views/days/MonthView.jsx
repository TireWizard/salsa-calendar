import React, { PropTypes } from 'react';
import { List } from 'immutable';

import PureView from '../PureView';
import DaysHeader from './DaysHeader';
import Day from './Day';

export default class DaysWrapper extends PureView {

  static propTypes = {
    daysInWeek: PropTypes.instanceOf(List),
    days: PropTypes.instanceOf(List),
    startOfWeek: PropTypes.string,
    firstDay: PropTypes.string,
    onDaySelected: PropTypes.func
  }

  render() {
    const { daysInWeek, days, startOfWeek, firstDay, onDaySelected } = this.props;

    return (
      <div className="month-view" data-week-starts={startOfWeek} data-first-day={firstDay}>
        <DaysHeader daysInWeek={daysInWeek} />
        <ol className="month">
          {days.map(day => <Day key={day} day={day} onDaySelected={onDaySelected} />)}
        </ol>
      </div>
    );
  }
}
