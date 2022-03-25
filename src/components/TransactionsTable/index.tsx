import { columns, customStyles, DataRow} from 'components/Table';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { api } from 'services/api';

import { Container } from './styles';



export function TransactionsTable()  {
  const [transactions, setTransactions] = useState<DataRow[]>([]);

   
  useEffect(() => {
    api.get('transactions').then((response) =>
     setTransactions(response.data.transactions));            
      }, []);  

      console.log(transactions)

      //var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(".", ",");

       
            
  return (
    <Container>

      <DataTable columns={columns} data={transactions} theme="default" customStyles={customStyles} 
            
      />
    </Container>
  );
}

  // const [pending, setPending] = useState(true);

   //  //use state "loading" progress pending
    //  const timeout = setTimeout(() => {
    //   setPending(false);
    // }, 2000);
    // return () => clearTimeout(timeout);
    // ///

