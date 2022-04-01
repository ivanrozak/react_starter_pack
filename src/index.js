import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'antd/dist/antd.min.css';

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import store, { Persistor } from './redux/store';
import RouteComponent from './routes/RouteComponent'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <RouteComponent />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

