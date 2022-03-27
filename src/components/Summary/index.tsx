import React, { useContext } from 'react';
import { TransactionsContext } from 'TransactionsContext';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from './styles';

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1200,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong> -R$400,00</strong>
      </div>

      <div className="total-background">
        <header>
          <p>Valor Total</p>
          <img src={totalImg} alt="Valor total" />
        </header>
        <strong>R$800,00</strong>
      </div>
    </Container>
  );
}
