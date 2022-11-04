import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 530px;
    padding-left: 200px;
    position: absolute;
    overflow: hidden;
    z-index: -999;
    pointer-events: none;

    @media screen and (max-width: 991px) {
        padding-top: 63vh;
        padding-left: 20px;
    }
`

export const ButtonsContainer = styled.div`
    position: absolute;
    display: inline-block;
    border-radius: 90px;
    background-color: #222;
    border: none;
    color: #999;
    z-index: 10;
    pointer-events: all;
    cursor: pointer;
    padding: 10px;
    bottom: 5vw;
    right: 5vw;
`

export const Button = styled.button`
    width: 50px;
    height: 50px;
    font-size: 25px;
    border-radius: 40px;
    background-color: #444;
    border: none;
    color: #999;
    z-index: 10;
    pointer-events: all;
    cursor: pointer;
    margin: 5px;
    
    &:hover {
        background-color: #999;
        color: #eee;
    }
`

