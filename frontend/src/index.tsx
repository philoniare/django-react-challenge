import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import reducers from './reducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#6074DD',
    },
    secondary: {
      main: '#e9e9e9',
    },
  },
});
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
