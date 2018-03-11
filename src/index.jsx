import React from 'react';
import { render } from 'react-dom';

import('./App').then((module) => {
  const App = module.default;
  render(<App />, document.querySelector('#app'));
});

