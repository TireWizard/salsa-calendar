import React, { PropTypes } from 'react';
import cx from 'classnames';

import { DayRecord } from '../../reducers/daysReducer';
import PureView from '../PureView';

export default class Day extends PureView {

  static propTypes = {
    day: PropTypes.instanceOf(DayRecord),
    onDaySelected: PropTypes.func
  }

  getClasses(day) {
    return cx({
      active: day.get('active')
    });
  }

  render() {
    const { day, onDaySelected } = this.props;

    return (
      <li
        className={this.getClasses(day)}
        onClick={onDaySelected.bind(null, day.get('day'))}
        >
        {day.get('day')}
      </li>
    );
  }
}
