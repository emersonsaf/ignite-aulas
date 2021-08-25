import React from 'react';
import ReactDOM from 'react-dom';
import  { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'First Transaction',
          amount: 400,
          type: 'Deposit',
          category: 'Car',
          createdAt: new Date()
        }
      ]
    })
  }
}) 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

