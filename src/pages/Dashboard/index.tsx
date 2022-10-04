import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { ITransactionCardProps, TransactionsCard } from '../../components/TransactionCard'

import { 
  Container, 
  Header, 
  UserInfo, 
  Photo, 
  User,
  UserGreeting, 
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsLists,
} from './style'

export interface IDataListProps extends ITransactionCardProps{
  id: string;
}

export function Dasboard () {
  const data: IDataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title:'Desenvolvimento de software',
      amount:'R$ 1.000,00',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date:'01/09/2022'
    },
    {
      id: '2',
      type: 'negative',
      title:'Hamburger',
      amount:'R$ 100,00',
      category:{
        name: 'food',
        icon: 'coffee',
      },
      date:'01/09/2022'
    },
    {
      id: '3',
      type: 'positive',
      title:'Desenvolvimento de software',
      amount:'R$ 1.000,00',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date:'01/09/2022'
    },
    {
      id: '4',
      type: 'negative',
      title:'Aluguel do apto',
      amount:'R$ 2.000,00',
      category:{
        name: 'shopping',
        icon: 'shopping-bag',
      },
      date:'01/09/2022'
    },
]

  return (
    <Container>
      <Header>
        <UserWrapper>
        <UserInfo>
          <Photo source={{ uri: "https://avatars.githubusercontent.com/u/38145379?v=4"}} />
            <User>
              <UserGreeting>
                Ola
              </UserGreeting>
              <UserName>
                Misael
              </UserName>
            </User>
        </UserInfo>
         <Icon name="power"/>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          title="Entradas"
          amount="R$ 17.000,00"
          lastTransaction='Última entrada dia 10/09/2022'
          type='up'
          />
        <HighlightCard 
          title="Saída"
          amount="R$ 1.000,00"
          lastTransaction='Última saída dia 10/09/2022'
          type='down'
        />
        <HighlightCard 
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction='01 à 10 de Abril'
          type='total'
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsLists 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionsCard data={item}/>}
        />
      </Transactions>
    </Container>
  )
}

