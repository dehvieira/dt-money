import React from 'react';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer } from './styles';

interface INewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransitionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >      
      <button type="button" onClick={onRequestClose} className="react-modal-close" data-tip="Clique para fechar">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <ReactTooltip />
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>

        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit" >Cadastrar</button>
      </Container>
    </Modal>
  );
}
