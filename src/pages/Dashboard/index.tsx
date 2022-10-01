import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

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
  HighlightCards
} from './style'

export function Dasboard () {
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
    </Container>
  )
}

