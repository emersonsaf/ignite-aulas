import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const totalDeposit = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const totalWithdraw = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'withdraw') {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  const total = totalDeposit - totalWithdraw

  return (
    <Container>
      <div>
        <header>
          <p>
            Entradas
          </p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(totalDeposit)}</strong>
      </div>
      <div>
        <header>
          <p>
            Saidas
          </p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(totalWithdraw)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>
            Total
          </p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong> {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(total)}</strong>
      </div>
    </Container>
  )
}