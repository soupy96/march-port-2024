import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';

import App from './App';
import './assets/css/index.css';
import './assets/css/Fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Favicon url='https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/call-me-hand.png' />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
