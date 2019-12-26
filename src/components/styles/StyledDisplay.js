import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border 4px solid #091243;
    min-height: 30px;
    width: 100%;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: Pixel, Arial, helvetica, sans-serif;
    font-size: 0.8rem;
    background: rgba(0, 0, 0,0.7);
    border-radius: 50px
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
    color: #D895FD;
    border: 2px solid;

    @media screen and (min-width: 320px) and (max-width: 768px) {
      padding: 5px 26px 5px 20px;
      font-size: 10px;
      width: 74px;
    }
`