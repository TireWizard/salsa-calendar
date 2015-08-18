import React, { PropTypes } from 'react';
import { List } from 'immutable';

import PureView from '../PureView';

export default class DaysHeader extends PureView {

  static propTypes = {
    daysInWeek: PropTypes.instanceOf(List)
  }

  render() {
    const { daysInWeek } = this.props;

    return (
      <ol clasName="heading">
        {daysInWeek.map((dayInWeek, index) => <li className={dayInWeek.toLowerCase()} key={index}><span>{dayInWeek}</span></li>)}
      </ol>
    );
  }
}
