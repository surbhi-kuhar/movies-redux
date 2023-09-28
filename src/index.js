import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import movies from './reducers';
import { createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(movies);
// console.log("State earlier", store.getState());
// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:'Superman'}]
// });
// console.log("State later", store.getState());

root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

