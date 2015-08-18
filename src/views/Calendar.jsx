import React, { Component, PropTypes } from 'react';
import MomentPropType from 'react-moment-proptypes';
import { Dispatcher } from 'flux';
import { Map } from 'immutable';

import { dateChanged, nextMonth, prevMonth, daySelected } from '../actions/calendarActions';

import globalReducer from '../reducers/globalReducer';
import MonthSelect from './MonthSelect';
import MonthView from './days/MonthView';

export default class Calendar extends Component {

  static propTypes = {
    date: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      MomentPropType.momentObj
    ])
  }

  constructor(props) {
    super(props);

    const dispatcher = new Dispatcher();
    dispatcher.register(action => {
      const appState = globalReducer(this.state.appState, action);
      this.setState({appState});
    });

    this.state = {
      dispatcher: dispatcher,
      appState: new Map({})
    };
  }

  componentWillMount() {
    this.state.dispatcher.dispatch(dateChanged(this.props.date));
  }

  componentWillUpdate(nextProps) {
    if (nextProps.date !== this.props.date) {
      this.state.dispatcher.dispatch(dateChanged(nextProps.date));
    }
  }

  onNextMonth() {
    this.state.dispatcher.dispatch(nextMonth());
  }

  onPrevMonth() {
    this.state.dispatcher.dispatch(prevMonth());
  }

  onDaySelected(day) {
    this.state.dispatcher.dispatch(daySelected(day));
  }

  render() {
    const { appState } = this.state;

    return (
      <section className="salsa-calendar">
        <MonthSelect
          date={appState.get('currentMonth')}
          onNextMonth={::this.onNextMonth}
          onPrevMonth={::this.onPrevMonth} />

        <MonthView
          days={appState.get('days')}
          daysInWeek={appState.get('daysInWeek')}
          startOfWeek={appState.get('startOfWeek')}
          firstDay={appState.get('firstDay')}
          onDaySelected={::this.onDaySelected} />
      </section>
    );
  }
}
