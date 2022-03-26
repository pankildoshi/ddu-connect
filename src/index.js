import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const toplink = document.querySelector('.top-link');
  window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500){
        toplink.classList.add('show-link');
    } else {
        toplink.classList.remove('show-link');
    }
  });

reportWebVitals();
