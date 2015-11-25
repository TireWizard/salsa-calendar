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
    onDaySelected: PropTypes.func,
    classDecorator: PropTypes.func
  }

  render() {
    const { daysInWeek, days, startOfWeek, firstDay, onDaySelected, classDecorator } = this.props;
    
    var daysInWeekWithLocale = daysInWeek;
    if (this.props.locale == "fr") {
      if (daysInWeekWithLocale == List.of('Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa')) {
          daysInWeekWithLocale = List.of('Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa');
      } else {
          daysInWeekWithLocale = List.of('Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di');
      }
    }

    return (
      <div className="month-view" data-week-starts={startOfWeek} data-first-day={firstDay}>
        <DaysHeader daysInWeek={daysInWeekWithLocale} />
        <ol className="month">
          {days.map(day => <Day key={day} day={day} onDaySelected={onDaySelected} classDecorator={classDecorator} />)}
        </ol>
      </div>
    );
  }
}
