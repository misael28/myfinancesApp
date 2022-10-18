import React, { useState } from 'react'

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes,
} from './styles'
import { CategorySelect } from '../../components/Forms/CategorySelect'

export function Register(){
    const [transactionType, setTransactionType] = useState('')

    const handleTransactionTypeSelect = (type: 'up' | 'down') => {
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
            <Form>
                <Fields>
                    <Input 
                        placeholder="Nome"
                    />
                    <Input 
                        placeholder="Preço"
                    />
                    <TransactionTypes>
                        <TransactionTypeButton
                            title='Income' 
                            type='up'
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                            />
                        <TransactionTypeButton 
                            title='Outcome' 
                            type='down'
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>
                    <CategorySelect title="Categoria" />
                </Fields>
                <Button title="Enviar" />
            </Form>
        </Container>    
    )
}