import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {} from 'react-router-redux';

import App from './app/app';
import './styles/main.sass';
import {appStore} from './app/store/configurestore';

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>
    , document.getElementById('app'));
