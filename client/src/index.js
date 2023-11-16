import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://videogames-dev-ekhg.4.us-1.fl0.io/';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
