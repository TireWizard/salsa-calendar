import { Component } from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';

export default class PureView extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState);
  }

}
