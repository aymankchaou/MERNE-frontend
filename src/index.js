import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import {
  persistStore,
} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
