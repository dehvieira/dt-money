import { columns, customStyles } from 'components/Table';
import { useTransactions } from 'hooks/useTransactions';
import React from 'react';
import DataTable from 'react-data-table-component';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <DataTable columns={columns} data={transactions} theme="default" customStyles={customStyles} />
    </Container>
  );
}

// transactions.map((transaction) => {
//   const newValue = transaction.value
//     //  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
//     //  .replace('.', ',');
//   transaction.value = newValue;

//   // const newDate = new Date(transaction.createdAt);
//   // transaction.createdAt = newDate.toLocaleDateString('pt-br');
// });
