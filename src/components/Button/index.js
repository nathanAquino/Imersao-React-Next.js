import styled from 'styled-components';

const StartButton = styled.button`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  margin-top: 20px;
  border-radius: 25px;
  border : 1px solid transparent;
  box-shadow: 1px 1px 8px 0px black; 
  :hover {
    background-color: #A3161D;
    color: #ffffff;
    cursor: pointer;
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    :hover {
      cursor: not-allowed;
    }
  }
`;

export default StartButton;
