import styled from 'styled-components';// blocos do quiz

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary}; // cor da borda
  background-color: ${({ theme }) => theme.colors.primary}; //cor do fundo do painel 
  border-radius: 10px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 25px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: #282526;
    text-shadow: black 0.1em 0.1em 0.2em;
    text-align:center;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    color:#9D353D;
    text-align: center;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    margin-top: 20px;
    border-radius: 25px;
    border : 1px solid transparent;
    box-shadow: 1px 1px 8px 0px black; 
    padding: 10px 15px;
    text-align: center;
    :hover {
      background-color: #A3161D;
      color: #ffffff;
      cursor: pointer;
      text-decoration:none;
    }
    :disabled {
      background-color: ${({ theme }) => theme.colors.secondary};
      :hover {
        cursor: not-allowed;
      }
    }
  }
  a{
    text-shadow: black 0.1em 0.1em 0.2em;
    text-decoration: none;
    color: #282526;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  
  * {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
