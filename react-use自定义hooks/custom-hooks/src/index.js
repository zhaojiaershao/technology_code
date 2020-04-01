import React from 'react';
import ReactDOM from 'react-dom';
import './stase/index.css';
import 'antd/dist/antd.css'
import App from './test/'
import {
    unregister
} from './stase/serviceWorker';

ReactDOM.render(< App />, document.getElementById('root'));

unregister();