import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './App'
import { StoreProvider } from './store/Store';

const app = (
    <StoreProvider>
        <App />
    </StoreProvider>
);

ReactDOM.render(app, document.getElementById('root'));