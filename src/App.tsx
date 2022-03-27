import { Dashboard } from 'components/Dashboard';
import { Header } from 'components/Header';
import { NewTransactionModal } from 'components/NewTransactionModal';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from 'styles/global';
import { TransactionsProvider } from 'TransactionsContext';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </TransactionsProvider>
  );
}

export default App;
