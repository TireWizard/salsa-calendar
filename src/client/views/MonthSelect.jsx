import React, { PropTypes } from 'react';
import MomentPropType from 'react-moment-proptypes';

import PureView from './PureView';

export default class MonthSelect extends PureView {

  static propTypes = {
    date: MomentPropType.momentObj,
    onNextMonth: PropTypes.func,
    onPrevMonth: PropTypes.func
  }

  render() {
    const { date, onNextMonth, onPrevMonth } = this.props;
    
    var dateFormatted = date.format('YYYY MMMM');
    var previous = "Previous";
    var next = "Next";
    if (this.props.locale == "fr") {
      dateFormatted = date.format('MMMM YYYY');
      previous = "précédent";
      next = "suivant";
    }

    return (
      <div className="month-select">
        <span className="title">{dateFormatted}</span>
        <span className="prev" onClick={onPrevMonth}>{previous}</span>
        <span className="next" onClick={onNextMonth}>{next}</span>
      </div>
    );
  }
}
