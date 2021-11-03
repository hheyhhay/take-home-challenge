import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const router = <BrowserRouter> <App /> </BrowserRouter>

ReactDOM.render(router, document.getElementById('root'));

reportWebVitals();
