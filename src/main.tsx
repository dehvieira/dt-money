import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 7,
          titulo: 'Carro',
          valor: -5000, //" R$ 2,000",
          categoria: 'Moradia',
          data: new Date(),
          type: 'deposit',
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
