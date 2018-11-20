import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css/normalize.css' ;
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store = { store }>
        <AppRouter />
    </Provider>,
    document.getElementById("root")
);