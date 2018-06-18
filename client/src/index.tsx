import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

const Index = hot(module)((): JSX.Element => {
  return <div>{'Hello React!@@'}</div>
});

ReactDOM.render(
  <Index />,
  document.getElementById('index') as HTMLElement
);