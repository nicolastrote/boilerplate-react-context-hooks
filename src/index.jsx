import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { StoreProvider } from './store/Store';

import './index.scss';

const app = (
    <StoreProvider>
        <App />
    </StoreProvider>
);

ReactDOM.render(app, document.getElementById('root'));