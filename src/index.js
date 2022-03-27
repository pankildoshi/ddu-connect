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
const navbar = document.querySelector('.nav-center');
  window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const sticky = navbar.offsetTop;
    if (scrollHeight > 500){
        toplink.classList.add('show-link');
    } else {
        toplink.classList.remove('show-link');
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  });

reportWebVitals();
