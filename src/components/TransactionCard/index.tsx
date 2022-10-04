import React from 'react'

import {
    Container,
    Title,
    Amount,
    CategoryName,
    Icon,
    Footer,
    Category,
    Date,
} from './styles'

interface ICategoryProps {
    name: string;
    icon: string;
}

export interface ITransactionCardProps  {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: ICategoryProps;
    date: string;
}
interface ITransactionsProp {
    data: ITransactionCardProps
}

export function TransactionsCard({data}: ITransactionsProp){
    return (
        <Container>
            <Title>
                {data.title}
            </Title>
            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                {data.amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={data.category.icon} />
                    <CategoryName>
                        {data.category.name}
                    </CategoryName>
                </Category>
                <Date>
                    {data.date}
                </Date>
            </Footer>
        </Container>
    )
}