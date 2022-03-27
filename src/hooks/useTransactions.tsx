import { DataRow } from 'components/Table';
import React, { useContext } from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

interface TransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionInput {
  title: string;
  value: string | number;
  type: string;
  category: string;
}

interface ITransactionsContextData {
  transactions: DataRow[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

//type TransactionInput = Omit<DataRow, 'id' | 'createdAt' | 'date'>

export const TransactionsContext = createContext<ITransactionsContextData>({} as ITransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<DataRow[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date().toLocaleDateString('pt-br'),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
