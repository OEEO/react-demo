import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './assets/less/normalize.less'
import './assets/less/common.less';
import './index.scss'
import RouterView from './RouterView'
import {Provider} from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <RouterView />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
