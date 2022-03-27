import { columns, customStyles } from 'components/Table';
import React, { useContext} from 'react';
import DataTable from 'react-data-table-component';
import { TransactionsContext } from 'TransactionsContext';

import { Container } from './styles';

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);
 
  transactions.map((transaction) => {
    const newValue = transaction.value
      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      .replace('.', ',');
    transaction.value = newValue;

    const newDate = new Date(transaction.createdAt);
    transaction.createdAt = newDate.toLocaleDateString('pt-br');
  
  });
  
  return  (
    <Container>
      <DataTable columns={columns} data={transactions} theme="default" customStyles={customStyles} />
    </Container>
  );
}


