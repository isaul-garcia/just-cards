import React, { useState } from 'react';
import { Card } from '../Card/Card';
import {
    Container,
    ButtonsContainer,
    Button,
} from './Stack.elements';
import { myDeck } from './Data';

//
//to do::
//make them align themselves automatically when adding new cards
//add on click effect to zoom and show card
//

export const Stack = () => {
    const [numCards, setNumCards] = useState(3)

    const handleAdd = () => {
        if (numCards < myDeck.length) {
            setNumCards(numCards + 1)
        } else {
            return null
        }
    }

    const handleRemove = () => {
        if (numCards === 3) {
            return null
        } else {
            setNumCards(numCards - 1)
        }
    }

    return (
        <>
            <Container>
                {myDeck.slice(0, numCards).map((props) => (
                    <Card key={props.keyNum} {...props} />
                ))}
                <ButtonsContainer>
                    <Button onClick={handleAdd}>+</Button>
                    <Button onClick={handleRemove}>-</Button>
                </ButtonsContainer>
            </Container>
        </>
    )
};