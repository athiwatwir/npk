import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './assets/vendor/bootstrap/bootstrap.min.css';
import './assets/css/unify-core.css';
import './assets/css/unify-components.css';
import './assets/css/unify-globals.css';
import './assets/css/custom.css';
import './assets/vendor/animate.css';
//import './assets/vendor/icon-awesome/css/font-awesome.min.css';
import './assets/vendor/hs-megamenu/src/hs.megamenu.css';
import './assets/vendor/hamburgers/hamburgers.min.css';
//import './assets/vendor/icon-line/css/simple-line-icons.css';
//import './assets/vendor/icon-etlinefont/style.css';
//import './assets/vendor/icon-line-pro/style.css';
//import './font/style.css';


import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
