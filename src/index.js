import React from 'react';
import ReactDOM from 'react-dom/client';
//import "slick-carousel/slick/slick.css"
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  
 
<Provider store={store}>
<App />
</Provider>
 // <React.StrictMode>
   // <App />
//</React.StrictMode>
);

