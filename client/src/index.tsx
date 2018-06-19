import 'react-hot-loader/patch'; // why is this needed?
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Landing from './pages/landing';
import { setConfig } from 'react-hot-loader'
require('dotenv').config({ path: '../.env' });

if (process.env.NODE_ENV === 'development') {
  setConfig({ logLevel: 'debug' })
}

const rootEl = document.getElementById('index') as HTMLElement;

const hotRender = (Component: any) => render(
  <AppContainer>
    <Component />
  </AppContainer>,
  rootEl
);

hotRender(Landing);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept();
}