import React, { Component, PropTypes } from 'react';
import MomentPropType from 'react-moment-proptypes';
import { Dispatcher } from 'flux';

import initialReduction from '../initialReduction';
import { dateChanged, nextMonth, prevMonth, daySelected } from '../actions/calendarActions';

import globalReducer from '../reducers/globalReducer';
import MonthSelect from './MonthSelect';
import MonthView from './days/MonthView';

export default class Calendar extends Component {

  static propTypes = {
    date: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      MomentPropType.momentObj
    ]),
    onDateChanged: PropTypes.func,
    classDecorator: PropTypes.func
  }

  static defaultProps = {
    onDateChanged: () => {},
    classDecorator: () => { return {}; }
  }

  constructor(props) {
    super(props);

    const dispatcher = new Dispatcher();
    dispatcher.register(action => {
      const reduction = globalReducer(this.state.reduction, action);

      reduction.get('effects').forEach(effect => {
        switch (effect.type) {
        case 'CHANGE_DATE':
          this.props.onDateChanged(effect.payload);
          break;
        default:
          break;
        }
      });

      this.setState({reduction});
    });

    this.state = {
      dispatcher: dispatcher,
      reduction: initialReduction
    };
  }

  componentDidMount() {
    this.state.dispatcher.dispatch(dateChanged(this.props.date));
  }

  componentWillReceiveProps(nextProps) {
    this.state.dispatcher.dispatch(dateChanged(nextProps.date));
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
    const { reduction } = this.state;
    const appState = reduction.get('appState');
    
    console.log('Loading - Calendar, locale: '+this.props.locale);

    return (
      <section className="salsa-calendar">
        <MonthSelect
          date={appState.get('currentMonth')}
          onNextMonth={::this.onNextMonth}
          onPrevMonth={::this.onPrevMonth}
          locale={this.props.locale} />

        <MonthView
          days={appState.get('days')}
          daysInWeek={appState.get('daysInWeek')}
          startOfWeek={appState.get('startOfWeek')}
          firstDay={appState.get('firstDay')}
          onDaySelected={::this.onDaySelected}
          classDecorator={this.props.classDecorator}
          locale={this.props.locale} />
      </section>
    );
  }
}
