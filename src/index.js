import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




let dialogs = [
  {id: 1, name: 'Genbu'},
  {id: 2, name: 'Tosiro'},
  {id: 3, name: 'Shinjiru'},
  {id: 4, name: 'Kami-Sama'},
  {id: 5, name: 'Kuhulin'}
]
let messages = [
      {id: 1, message: 'おはようございます'},
      {id: 2, message: 'You are the best'},
      {id: 3, message: 'Nice speed'}
  ]
let posts = [
  {id :1, message : "It's best Japanese guide Post Tokyo", likeCount : 15},
  {id :1, message : 'First publication release Post Chiba', likeCount : 25}
]
ReactDOM.render(
  
  <React.StrictMode>
    <App 
    posts={posts}
    dialogs={dialogs}
    messages={messages}


    
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
