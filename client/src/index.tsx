// import 'react-hot-loader/patch'; // why is this needed?
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('index') as HTMLElement;

const Index = (): JSX.Element => {
  return <div onClick={() => console.warn('something else')}>{'Hello React!@@'}</div>
};

render(
  <AppContainer>
    <Index />
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./pages/landing', () => {
    const NewApp = require('./pages/landing');

    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      rootEl
    );
  });
}