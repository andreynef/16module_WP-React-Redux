import React from 'react';//импорт реакт библиотеки для работы с этим файлом
import ReactDOM from 'react-dom';//импорт реактдом библиотеки для работы с этим файлом (только в том файле где находится строчка ReactDOM.render)
import App from './containers/App.js';
import {createStore} from 'redux';
import todoReducers from './reducers';

let initialState = {
  items: [
    {id:1, name: 'initialMan', text: "i'm first", date: "2000 BC" }
	],
	form: { 
    formName: '',
    formText: ''
  }
}

const setupItitialState = ()=>{
  const localStoredState = JSON.parse(localStorage.getItem('commentItems'));//считать массив в JSON формате('text','text') из localStorage и привести ее обратно в божеский вид путем parse.

  if (!localStoredState){//если сторадж undefined то загрузить туда InitialState
    alert('Локал пустой. Загружаю туда InitialState');
    localStorage.setItem('commentItems', JSON.stringify(initialState));
    return
  }
  alert('Локал не пустой. Загружаю оттуда InitialState');
  initialState = localStoredState
}
setupItitialState();


const store = createStore (todoReducers, initialState);
ReactDOM.render (//отрендерить/отрисовать
  <App store={store} />,//что рисовать и передать нужные пропсы
  document.querySelector("#root")//куда
);