import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Top from './components/Top';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Top></Top>
  </React.StrictMode>,
  document.getElementById('root')
);

window.scrollTo({
  top: 0,
  left: 0,
  behaviour: 'auto'
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
