import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
