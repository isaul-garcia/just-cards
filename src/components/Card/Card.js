import React, { useEffect, useState } from 'react';
import {
    Container,
    Wrapper,
    Info,
    Data,
    ImgBubble,
    TextBubble,
    PointsIcon,
    PointsAmount,
    Image
} from './Card.elements';
import img2 from '../../images/star-badge.svg'

export const Card = ({ ...props }) => {
    const [position, setPosition] = useState(80)

    const cardPosition = () => {
        if (props.keyNum > 1) {
            setPosition(position * props.keyNum)
        } else if (props.keyNum === 1) {
            setPosition(position)
        }
    }

    useEffect(() => {
        cardPosition()
    }, [])

    return (
        <>
            <Container cardPosition={position} zin={-props.keyNum}>
                <Wrapper cardColor={props.cardColor}>

                    <Info>
                        <h2>{props.topic}:</h2>
                        <h2>« {props.title} »</h2>
                    </Info>

                    <Data>
                        <h5>{props.stage}</h5>
                        <h5>{props.date}</h5>
                    </Data>

                    <ImgBubble>
                        <Image src={props.imag} />
                    </ImgBubble>

                    <TextBubble>
                        <h1>{props.time}</h1>
                    </TextBubble>

                    <PointsIcon>
                        <h1>{props.code}</h1>
                    </PointsIcon>

                    <PointsAmount>
                        <Image src={img2}/>
                    </PointsAmount>

                </Wrapper>
            </Container>
        </>
    )
};