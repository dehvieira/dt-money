import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface INewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransitionModalProps) {
  const [type, setType] = useState('deposit');
  

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
          <RadioBox
              type="button"
              onClick={() => {setType('deposit')}}
              isActive= {type === 'deposit'}
              activeColor = 'green'
           >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
            </RadioBox>

          <RadioBox              
              type="button"
              onClick={() => {setType('withdraw')}}    
              isActive= {type === 'withdraw'}
              activeColor = 'red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
