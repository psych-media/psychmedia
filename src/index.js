/* Import statements */
import React from 'react';
import ReactDOM from 'react-dom';

/* App is the entry point to the React code.*/
import App from './App';

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from 'react-router-scroll-top'

ReactDOM.render(
    <BrowserRouter>
    <ScrollToTop>
        <App />
    </ScrollToTop>
    </BrowserRouter>
    , document.getElementById('root'));
