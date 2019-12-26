import styled from 'styled-components';

export const StyledButton = styled.button`
display: block;
  margin: auto;
  padding: 1rem 1.25rem;
  font-family: Pixel, Arial, helvetica, sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow:
    -2px 4px 4px #091243, 
    0 0 10px #00D0FF,
    inset 1px 1px 1px white;
  color: #1FFFFF;
  border: 2px solid;
  border-radius: 4px;
  background-color: transparent;
  box-shadow: 
    0 1px 2px rgba(0,0,0, 0.6), 
    2px 1px 4px rgba(0,0,0, 0.3), 
    2px 4px 3px rgba(3,0,128, 0.3), 
    0 0 7px 2px rgba(0,208,255, 0.6), 
    inset 0 1px 2px rgba(0,0,0, 0.6), 
    inset 2px 1px 4px rgba(0,0,0, 0.3), 
    inset 2px 4px 3px rgba(3,0,128, 0.3), 
    inset 0 0 7px 2px rgba(0,208,255, 0.6);
  animation: flickering 5s infinite;
  background: rgba(0, 0, 0,0.7);
  border-radius: 50px
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 253px;
    padding: 5px 26px 5px 20px;
    font-size: 10px;
    margin-top: -1px;
  }
`