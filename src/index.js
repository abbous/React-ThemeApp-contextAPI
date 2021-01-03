import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './PropsDrilling/App';
import AppContext from './APIContext/AppContext'

import ThemeProvider from './APIContext/themeProvider'
ReactDOM.render(
  <React.StrictMode>
<ThemeProvider>
<AppContext />

</ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
