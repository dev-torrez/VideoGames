import { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router'
import { store}  from './store/store';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
//axios.defaults.baseURL = 'https://videogames-dev-ekhg.4.us-1.fl0.io/';

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)