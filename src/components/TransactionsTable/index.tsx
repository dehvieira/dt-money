import { columns, customStyles, IDataRow } from 'components/Table';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { api } from 'services/api';

import { Container } from './styles';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<IDataRow[]>([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    api.get('transactions').then((response) => setTransactions(response.data.transactions));

    //use state "loading" progress pending
    const timeout = setTimeout(() => {
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
    ///
  }, []);

  return (
    <Container>
      <DataTable
        columns={columns}
        data={transactions}
        theme="default"
        customStyles={customStyles}
        progressPending={pending}
      />
    </Container>
  );
}
