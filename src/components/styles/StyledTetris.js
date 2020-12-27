import styled from 'styled-components';

import bgImage from '../../img/bg.gif';

export const StyledTetrisWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: url(${bgImage}) #000;
    background-size: 1980px;
    background-position: center;
    overflow: hidden;
    background-position: -62px -478px;
    overflow: hidden;
    background-repeat: no-repeat;

    .rhap_container {
        box-shadow: 
        0 1px 2px rgba(0,0,0, 0.6), 
        2px 1px 4px rgba(0,0,0, 0.3), 
        2px 4px 3px rgba(71,17,100, 0.3), 
        0 0 7px 2px  rgba(187, 38, 210, 0.6),
        inset 0 1px 2px rgba(0,0,0, 0.6), 
        inset 2px 1px 4px rgba(71,17,100, 0.3), 
        inset 2px 4px 3px rgba(71,17,100, 0.6),
        inset 0 0 7px 2px rgba(71,17,100, 0.6);
        background: black;
    }

    .rhap_progress-filled,{
        background: rgba(187, 38, 210, 0.6);
    }

    #rhap_current-time {
        color: rgba(187, 38, 210, 0.6);
    }
`
export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 20px 0 10px;
    margin: 0 auto;
    max-width: 900px

    aside {
        width: 100%;
        max-width: 200px;
        display: block
        padding: 0 20px;
    }

    @media screen and (min-width: 320px) and (max-width: 1365px) {

        aside {
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            padding: 0;
            max-width: none; !important
        }
    }
`