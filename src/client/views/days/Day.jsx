import React, { PropTypes } from 'react';
import cx from 'classnames';

import { DayRecord } from '../../reducers/daysReducer';
import PureView from '../PureView';

export default class Day extends PureView {

  static propTypes = {
    day: PropTypes.instanceOf(DayRecord),
    onDaySelected: PropTypes.func,
    classDecorator: PropTypes.func
  }

  getClasses(day, classDecorator) {
    const decoratedClasses = classDecorator(day.get('date'));

    return cx({
      active: day.get('active'),
      ...decoratedClasses
    });
  }

  render() {
    const { day, onDaySelected, classDecorator } = this.props;

    return (
      <li
        className={this.getClasses(day, classDecorator)}
        onClick={onDaySelected.bind(null, day.get('day'))}>
        <span>{day.get('day')}</span>
      </li>
    );
  }
}
