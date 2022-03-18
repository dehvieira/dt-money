import { columns, customStyles } from 'components/Table';
import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { api } from 'services/api';

import { Container } from './styles';
import transactions from './transactions';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <DataTable columns={columns} data={transactions} theme="default" customStyles={customStyles} />
    </Container>
  );
}
