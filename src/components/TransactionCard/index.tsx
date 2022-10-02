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

interface ITransactionsProp {
    data: {
        title: string;
        amount: string;
        category: ICategoryProps;
        date: string;
    }
}

export function TransactionsCard({data}: ITransactionsProp){
    return (
        <Container>
            <Title>
                {data.title}
            </Title>
            <Amount>
                {data.amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name="dollar-sign" />
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