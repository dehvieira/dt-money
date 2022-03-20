import { createTheme, TableColumn } from 'react-data-table-component';

export interface IDataRow {
  title: string;
  value: number;
  category: string;
  //date: string;
  createdAt: string,
  type?:string,
}

export const columns: TableColumn<IDataRow>[] = [
  {
    name: 'Titulo',
    selector: (row) => row.title,
  },
  {
    name: 'Valor',
    selector: (row) => row.value,
    conditionalCellStyles: [
      {
        when: (row) => row.value < 0,
        style: {
          color: 'red',
        },
      },
    ],
  },
  {
    name: 'Categoria',
    selector: (row) => row.category,
  },
  {
    name: 'Data',
    selector: (row) => row.createdAt,
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
