import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer, { rootSaga } from './modules';
import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);
console.log(store.getState());
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
