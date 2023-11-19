import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App.js';
import './index.css';
import {BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <PersistGate loading = {null} persistor={persistor}>
     <Router basename="/miraplay_test_client">
      <App />
    </Router>
  </PersistGate>
  </Provider>
);
