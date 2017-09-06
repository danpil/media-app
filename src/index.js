import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
const rootEl = document.querySelector('#root');

const wrapApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(wrapApp(), rootEl);
