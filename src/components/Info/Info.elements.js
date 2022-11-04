import styled from 'styled-components/macro'

export const Container = styled.div`
    width: ${({ show }) => (show ? '' : '33px')};
    height: ${({ show }) => (show ? '' : '33px')};
    overflow: hidden;
    color: #ccc;
    background-color: #00000099;
    right: 0;
    margin: 5vw;
    position: absolute;
    border-radius: 18px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const IconWrapper = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin: 8px;
`

export const Information = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px;
`

export const LinkRef = styled.a`
    color: #2f8bfd;
    text-decoration: none;
    &:hover{
        color: #0273fd;
    }
`