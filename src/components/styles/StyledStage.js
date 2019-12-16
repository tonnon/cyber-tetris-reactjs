import styled from 'styled-components';

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(28vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    color: #D895FD;
    border: 2px solid;
    border-radius: 5px;
    width: 100%;
    max-width: 28vw;
    background: rgba(0, 0, 0,0.7);
    box-shadow: 
    0 1px 2px rgba(0,0,0, 0.6), 
    2px 1px 4px rgba(0,0,0, 0.3), 
    2px 4px 3px rgba(71,17,100, 0.3), 
    0 0 7px 2px  rgba(187, 38, 210, 0.6),
    inset 0 1px 2px rgba(0,0,0, 0.6), 
    inset 2px 1px 4px rgba(71,17,100, 0.3), 
    inset 2px 4px 3px rgba(71,17,100, 0.6),
    inset 0 0 7px 2px rgba(71,17,100, 0.6);
    text-shadow:
    -2px 4px 4px #471164, 
    0 0 10px #b22cfb,
    inset 1px 1px 1px white;
`