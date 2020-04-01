import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store' //状态共享
import App from './index.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Store ><App /></Store>, document.getElementById('root')
);

serviceWorker.unregister();
