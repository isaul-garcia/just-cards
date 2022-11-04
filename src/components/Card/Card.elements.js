import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 120px;
    height: 280px;
    margin-top: -${({ cardPosition }) => (cardPosition)}px;
    transform: skewY(15deg);
    transition: 0.2s;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    z-index: ${({ zin }) => (zin)};
    position: relative;
    pointer-events: all;
    animation-name: appear;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    
    &:hover{
        transform: skewY(15deg) translate(0px, -20px);
    }

    @media screen and (max-width: 991px) {
        width: 40px;
        height: 80px;

        &:hover{
            transform: skewY(15deg) translate(0px, -50px);
        }
    }
`

export const Wrapper = styled.div`
    width: 480px;
    height: 280px;
    background-color: ${({ cardColor }) => (cardColor)};
    border-radius: 20px;
    overflow: hidden;    
    transition: 0.2s;
    position: absolute;
    z-index: ${({ zin }) => (zin)};

    @media screen and (max-width: 991px) {
        width: 235px;
        height: 170px;
    }
`

export const Info = styled.div`
    width: 65%;
    height: 50%;
    position: absolute;
    display: inline-block;
    padding: 20px;

    @media screen and (max-width: 991px) {
        padding: 14px;
        width: 90%;
    }
`

export const Data = styled.div`
    width: 150px;
    height: 58px;
    position: absolute;
    display: inline-block;
    transform-origin: top right;
    transform: rotate(-90deg) translate(45px, 270px);
`

export const TextBubble = styled.div`
    width: 130px;
    height: 130px;
    text-align: center;
    padding: 29px 0;
    border-radius: 80px;
    background-color: #f0f0f0;
    position: absolute;
    float: right;
    bottom: 0;
    right: 110px;

    @media screen and (max-width: 991px) {
        width: 60px;
        height: 60px;
        right: 50px;
    }
`

export const ImgBubble = styled.div` 
    overflow: hidden;
    width: 130px;
    height: 130px;
    text-align: center;
    border-radius: 80px;
    background-color: #f0f0f0;
    position: absolute;
    float: right;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 991px) {
        width: 60px;
        height: 60px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
`

export const PointsIcon = styled.div`
    overflow: hidden;
    width: 45px;
    height: 45px;
    text-align: center;
    padding: 3px;
    border-radius: 80px;
    background-color: #f0f0f0;
    position: absolute;
    float: left;
    bottom: 25px;
    left: 20px;
    z-index: 2;

    @media screen and (max-width: 991px) {
        width: 32px;
        height: 32px;
        bottom: 8px;
        left: 10px;
        padding-top: 22px;
    }
`

export const PointsAmount = styled.div`
     overflow: hidden;
    width: 45px;
    height: 45px;
    text-align: center;
    border-radius: 80px;
    position: absolute;
    float: left;
    bottom: 25px;
    margin-left: 60px;

    @media screen and (max-width: 991px) {
        width: 32px;
        height: 32px;
        bottom: 8px;
        left: 10px;
        
    margin-left: 28px;
    }
`