import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


createServer({
  models: {
    transaction: Model,
  },
  
    seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento Web',
          type: 'deposit',
          value: 3000,
          category: 'Projetos',
          date: '20-03-2021',
          //createdAt: new Date('2021-02-05 08:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          value: -2000,
          type: 'withdraw',
          category: 'Moradia',
          date: '20-03-2022',
          //createdAt: new Date('2021-02-11 11:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
