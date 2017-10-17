import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  combineReducers,
  createStore,
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Enhancers
const store = createStore(
  combineReducers({ form: formReducer }),
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
