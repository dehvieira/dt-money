import React from 'react';
import DataTable, { createTheme, TableColumn } from 'react-data-table-component';

import { Container } from './styles';
import transactions from './transactions';

interface IDataRow {
  titulo: string;
  valor: number;
  categoria: string;
  data: string;
}

const columns: TableColumn<IDataRow>[] = [
  {
    name: 'Titulo',
    selector: (row) => row.titulo,
  },
  {
    name: 'Valor',
    selector: (row) => row.valor,
    conditionalCellStyles: [
      {
        when: (row) => row.valor < 0,
        style: {
          color: 'red',
        },
      },
    ],
  },
  {
    name: 'Categoria',
    selector: (row) => row.categoria,
  },
  {
    name: 'Data',
    selector: (row) => row.data,
  },
];

createTheme(
  'default',
  {
    text: {
      primary: '#363F5F',
    },
    background: {
      default: '#F0F2F5',
    },
  },
  '',
);

export const customStyles = {
  rows: {
    style: {
      minHeight: '4.5rem', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

export function TransactionsTable() {
  return (
    <Container>
      <DataTable columns={columns} data={transactions} theme="default" customStyles={customStyles} />
    </Container>
  );
}
