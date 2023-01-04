import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import SearchBox from './SearchBox.js';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/*https://reactjs.org/docs/strict-mode.html*/}
    <div>
        <h1>RoboFriends</h1>
        <SearchBox />
        <App />
    </div>
  </React.StrictMode>
);

/*ReactDOM.render(<App />, document.getElementById('root'));*/

/*ReactDOM.render(<Hello />, document.getElementById('root'));*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
