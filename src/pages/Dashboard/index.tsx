import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionsCard } from '../../components/TransactionCard'

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

interface ICategoryProps {
  name: string;
  icon: string;
}
interface ITransactionsProp {
  data: {
      title: string;
      amount: string;
      category: ICategoryProps;
      date: string;
  }
}

export function Dasboard () {
  const data = [
    {
      title:'Desenvolvimento de software',
      amount:'R$ 1.000,00',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date:'01/09/2022'
    },
    {
      title:'Desenvolvimento de software',
      amount:'R$ 1.000,00',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date:'01/09/2022'
    },
    {
      title:'Desenvolvimento de software',
      amount:'R$ 1.000,00',
      category:{
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date:'01/09/2022'
    }
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
          renderItem={({ item }) => <TransactionsCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
      </Transactions>
    </Container>
  )
}

