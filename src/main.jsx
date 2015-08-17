require('./styles/salsa-calendar.styl');

import React, { render } from 'react';
import Calendar from './views/Calendar';

render(<Calendar />, document.getElementById('app'));
