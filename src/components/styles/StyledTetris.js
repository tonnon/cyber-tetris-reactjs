import styled from 'styled-components';

import bgImage from '../../img/bg.gif';

export const StyledTetrisWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: 1900px;
    background-position: center;
    overflow: hidden;
    background-position: -62px -478px;
    overflow: hidden;
    background-repeat: no-repeat;
`
export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 60px;
    margin: 0 auto;
    max-width: 900px

    aside {
        width: 100%;
        max-width: 200px;
        display: block
        padding: 0 20px;
    }
`