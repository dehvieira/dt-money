import { DataRow } from 'components/Table';
import React from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from 'services/api';

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<DataRow[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<DataRow[]>([]);

  useEffect(() => {
    api.get('transactions').then((response) => setTransactions(response.data.transactions));
  }, []);

  return <TransactionsContext.Provider value={transactions}>{children}</TransactionsContext.Provider>;
}
