import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import {createStore} from 'redux';
import reducer from './reducers';


const localStoredState = JSON.parse(localStorage.getItem('commentItems'));

const initialState = localStoredState 
  ? localStoredState 
  : {
    items: [{id:1, name: 'initialMan', text: "i'm first", date: "2000 BC" }],
    form: { 
      nameField: '',
      textField: ''
    }
  }

const store = createStore (reducer, initialState);

ReactDOM.render (
  <App store={store} />,
  document.querySelector("#root")
);