import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/Hello';
import App from './components/App';
import Shape from './components/Shape';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
