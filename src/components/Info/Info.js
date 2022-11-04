import React, { useState } from 'react';
import {
    Container,
    IconWrapper,
    Information,
    Wrapper,
    LinkRef
} from './Info.elements';
import { BsInfoCircle } from 'react-icons/bs'

export const Info = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <Container show={show}>
                <Wrapper
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}>
                    <IconWrapper>
                        <BsInfoCircle color={'#cccccc'} size={17} />
                    </IconWrapper>
                    <Information>
                        This work was inspired by the design done for
                        <LinkRef href='https://www.behance.net/gallery/96230039/Lectarium-Online-Education' target='_blank'> Lectarium.</LinkRef>
                    </Information>
                </Wrapper>
            </Container>
        </>
    )
};